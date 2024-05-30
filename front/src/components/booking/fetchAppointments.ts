import axios from "axios";
import { Appointment } from "./interface-appointments";

export const fetchAppointments = async (
  setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>
) => {
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
