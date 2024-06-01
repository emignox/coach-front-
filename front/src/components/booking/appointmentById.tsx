import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointments } from "../../redux/actions/appointmentsActions";
import { Appointments } from "./interface-appointments";
import { RootState, AppDispatch } from "../../redux/reduxStore";
import { CustomButton } from "../blocs/Custom-button";
import { deleteExistingAppointment } from "../../redux/actions/appointmentsActions";

function Appointment_Id() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const appointments = useSelector(
    (state: RootState) => state.appointments.appointments
  );

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch, appointments]);

  const handleDelete = (appointmentId: string) => {
    dispatch(deleteExistingAppointment(appointmentId));
  };

  const futureAppointments = appointments.filter((appointment) => {
    const appointmentDate = new Date(
      appointment.year,
      appointment.month,
      appointment.day
    );
    const today = new Date();
    const todayWithoutTime = new Date(
      today.getFullYear(),
      today.getMonth(), // Non sottrarre 1 qui
      today.getDate()
    );

    return appointmentDate >= todayWithoutTime;
  });

  const pastAppointments = appointments.filter((appointment) => {
    const appointmentDate = new Date(
      appointment.year,
      appointment.month - 1,
      appointment.day
    );
    return appointmentDate < new Date();
  });
  return (
    <div className="flex items-center justify-center w-full text-gray-100">
      <CustomButton
        value="my appointments"
        className=""
        onClick={() => setPopupVisible(!isPopupVisible)}
      />
      <span className="relative px-2 py-1 text-xs bg-red-800 rounded-full right-3 bottom-3 ">
        {futureAppointments.length}
      </span>
      {isPopupVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
          onClick={() => setPopupVisible(false)} // Chiude il popup quando si clicca all'esterno
        >
          <div
            className="p-4 w-1/2 bg-[#111] rounded-lg popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute px-3 text-white bg-red-500 rounded-full top-4 right-4"
              onClick={() => setPopupVisible(false)}
            >
              X
            </button>
            <h2>Future Appointments</h2>
            {futureAppointments.map((appointment: Appointments) => (
              <div
                className="flex items-center justify-between px-3 py-2 my-5 text-xs font-thin rounded-lg bg-gray-950"
                key={appointment._id}
              >
                <div className="px-3 py-2 rounded-lg">
                  <p>
                    Data:{" "}
                    {`${appointment.day}/${appointment.month}/${appointment.year}`}
                  </p>
                  <p>Ora: {appointment.time}</p>
                </div>
                <button
                  className="px-3 py-2 text-xs font-bold text-red-500 cursor-pointer bg-gray-950"
                  onClick={() => handleDelete(appointment._id)}
                >
                  Delete
                </button>
              </div>
            ))}
            <h2>Past Appointments</h2>
            {pastAppointments.map((appointment: Appointments) => (
              <div
                className="flex items-center justify-between px-3 py-2 my-5 text-xs font-thin rounded-lg bg-gray-950"
                key={appointment._id}
              >
                <div className="px-3 py-2 rounded-lg">
                  <p>
                    Data:{" "}
                    {`${appointment.day}/${appointment.month + 1}/${appointment.year}`}
                  </p>
                  <p>Ora: {appointment.time}</p>
                </div>
                <button
                  className="px-3 py-2 text-xs font-bold text-red-500 cursor-pointer bg-gray-950"
                  onClick={() => handleDelete(appointment._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Appointment_Id;
