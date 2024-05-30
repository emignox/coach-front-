import axios from "axios";
import dayjs from "dayjs";
import { Appointment } from "./interface-appointments";

export const submitAppointment = async (
  selectedDay: dayjs.Dayjs,
  selectedTime: string,
  appointments: Appointment[],
  setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>,
  setSelectedDay: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>,
  setSelectedTime: React.Dispatch<React.SetStateAction<string | null>>
) => {
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
          year: selectedDay.year(), // Invia l'anno
          month: selectedDay.month() + 1, // Invia il mese (dayjs inizia a contare i mesi da 0)
          day: selectedDay.date(), // Invia il giorno del mese
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
};
