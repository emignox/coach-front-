import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { CustomButton } from "../blocs/Custom-button";
import {
  getDaysOfCurrentView,
  getTimeSlots,
  handlePrev,
  handleNext,
} from "./logic-time";
import Titles from "../blocs/titles";
import axios from "axios";

interface Appointment {
  _id: string;
  date: string;
  time: string;
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDay, setSelectedDay] = useState<dayjs.Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const timeSlots = getTimeSlots();
  const daysOfCurrentView = getDaysOfCurrentView(currentDate);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const userId = document.cookie
          .split("; ")
          .find((row) => row.startsWith("userId="))
          ?.split("=")[1];
        if (userId) {
          const response = await axios.get<{ appointments: Appointment[] }>(
            `${import.meta.env.VITE_BACKEND_URL}/api/users/appointments/${userId}`,
            { withCredentials: true }
          );
          setAppointments(response.data.appointments);
        } else {
          console.error("User ID not found in cookies");
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const handleDelete = async (appointmentId: string) => {
    try {
      const userId = document.cookie
        .split("; ")
        .find((row) => row.startsWith("userId="))
        ?.split("=")[1];
      if (userId) {
        await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/appointments`,
          {
            data: {
              userId,
              appointmentId,
            },
            withCredentials: true,
          }
        );
        setAppointments(
          appointments.filter((app) => app._id !== appointmentId)
        );
      } else {
        console.error("User ID not found in cookies");
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  const handleAppointmentSubmit = async () => {
    if (selectedDay && selectedTime) {
      try {
        const userId = document.cookie
          .split("; ")
          .find((row) => row.startsWith("userId="))
          ?.split("=")[1];
        if (userId) {
          console.log("Selected day:", selectedDay.format("YYYY-MM-DD")); // Aggiunto log per verificare il valore di selectedDay
          console.log("Selected time:", selectedTime); // Aggiunto log per verificare il valore di selectedTime

          const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/users/appointments`,
            {
              userId,
              date: selectedDay.format("YYYY-MM-DD"), // Invia la data nel formato ISO standard
              time: selectedTime,
            },
            { withCredentials: true }
          );

          // Aggiorna lo stato degli appuntamenti
          const newAppointment = {
            _id: response.data.user.appointments.pop()._id,
            date: selectedDay.format("YYYY-MM-DD"),
            time: selectedTime,
          };
          setAppointments([...appointments, newAppointment]);

          // Resetta selectedDay e selectedTime dopo l'invio
          setSelectedDay(null);
          setSelectedTime(null);
        } else {
          console.error("User ID not found in cookies");
        }
      } catch (error) {
        console.error("Error adding appointment:", error);
      }
    }
  };

  return (
    <>
      <Titles
        className="my-12 text-3xl font-bold text-center text-gray-100"
        title="Choose a date and time..."
      />
      <div className="flex items-center justify-center mb-20 h-[90vh] font p-10 relative z-10">
        <div className="w-full h-full text-white">
          <div className="flex items-center justify-between mb-4">
            <CustomButton
              value="Prev"
              onClick={() => setCurrentDate(handlePrev(currentDate))}
              className="p-2 bg-gray-100 text-[#111] rounded"
            />
            <h2 className="text-xl text-center">
              {currentDate.format("MMMM D, YYYY")}
            </h2>
            <CustomButton
              value="Next"
              onClick={() => setCurrentDate(handleNext(currentDate))}
              className="p-2 bg-gray-100 text-[#111] rounded"
            />
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-7">
            {daysOfCurrentView.map((day) => {
              const isPast = day.isBefore(dayjs(), "day");
              const isSunday = day.day() === 0;
              const isDisabledDay = isPast || isSunday;

              return (
                <div
                  key={day.format("YYYY-MM-DD")}
                  className={`h-20 md:h-52 font-thin p-4 ${
                    day.isSame(selectedDay)
                      ? "bg-red-500"
                      : isDisabledDay
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gray-100 text-[#111] cursor-pointer"
                  } rounded flex flex-col items-start justify-start`}
                  onClick={() =>
                    !isDisabledDay &&
                    setSelectedDay(day.isSame(selectedDay) ? null : day)
                  }
                >
                  <span>{day.format("dddd")}</span>
                  <span>{day.format("DD")}</span>
                  {appointments
                    .filter((appointment) =>
                      dayjs(appointment.date).isSame(day, "day")
                    )
                    .map((appointment) => (
                      <div
                        key={appointment._id}
                        className="text-xs text-black "
                      >
                        {appointment.time}
                        <button
                          onClick={() => handleDelete(appointment._id)}
                          className="px-1 ml-2 text-red-500 bg-black rounded"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                </div>
              );
            })}
          </div>

          {selectedDay && (
            <div className="mt-4">
              <h3 className="text-lg text-center">
                Select the hours for {selectedDay.format("dddd DD MMMM YYYY")}
              </h3>
              <div className="flex justify-center mt-2">
                <div className="relative z-10 flex flex-wrap gap-3 p-2 text-white rounded-2xl">
                  {timeSlots.map((slot) => {
                    const isSlotTaken = appointments.some(
                      (appointment) =>
                        dayjs(appointment.date).isSame(selectedDay, "day") &&
                        appointment.time === slot
                    );

                    const isPastTime =
                      selectedDay.isSame(dayjs(), "day") &&
                      dayjs().isAfter(
                        dayjs()
                          .set("hour", parseInt(slot.split(":")[0]))
                          .set("minute", parseInt(slot.split(":")[1]))
                      );

                    const isSaturdayEvening =
                      selectedDay.day() === 6 &&
                      slot >= "16:00" &&
                      slot <= "22:00";

                    const isDisabledSlot =
                      isSlotTaken || isPastTime || isSaturdayEvening;

                    return (
                      <button
                        key={slot}
                        className={`${
                          slot === selectedTime ? "bg-custom-red" : ""
                        } px-4 py-2 border rounded-lg ${
                          isDisabledSlot
                            ? "bg-gray-400 cursor-not-allowed"
                            : "hover:bg-custom-red"
                        }`}
                        disabled={isDisabledSlot}
                        onClick={() =>
                          setSelectedTime(selectedTime === slot ? null : slot)
                        }
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center justify-center my-5">
                <CustomButton
                  className="relative z-20"
                  value="Submit"
                  onClick={handleAppointmentSubmit}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Calendar;
