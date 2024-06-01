import axios from "axios";
import dayjs from "dayjs";
import { Appointment } from "./interface-appointments";

export const fetchAppointments = async (
  setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>
) => {
  try {
    const userIdCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userId="));

    if (userIdCookie) {
      const userId = userIdCookie.split("=")[1];

      const response = await axios.get<{ appointments: Appointment[] }>(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/appointments/${userId}`,
        { withCredentials: true }
      );

      // Formatta le date e gli orari degli appuntamenti utilizzando Day.js
      const formattedAppointments = response.data.appointments.map(
        (appointment: Appointment) => ({
          ...appointment,
          date: dayjs(appointment.date).format("YYYY-MM-DD"), // Formatta la data nel formato desiderato
          // Se l'orario è già nel formato corretto, non è necessario formattarlo
        })
      );
      if (response.data.appointments.length > 0) {
        console.log("Appointments:", formattedAppointments);
      }

      // Imposta gli appuntamenti nel tuo stato di React
      setAppointments(formattedAppointments);
    } else {
      console.error("User ID not found in cookies");
    }
  } catch (error) {
    console.error("Error fetching appointments:", error);
  }
};
