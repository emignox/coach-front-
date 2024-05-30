import axios from "axios";
import React from "react";

interface Appointment {
  _id: string;
  date: string;
  time: string;
}

export const deleteAppointment = async (
  appointmentId: string,
  appointments: Appointment[],
  setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>
) => {
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
        appointments.filter((app: Appointment) => app._id !== appointmentId)
      );
    } else {
      console.error("User ID not found in cookies");
    }
  } catch (error) {
    console.error("Error deleting appointment:", error);
  }
};

export default deleteAppointment;
