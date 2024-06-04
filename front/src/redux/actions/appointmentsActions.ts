// src/redux/actions/appointmentsActions.ts

import { AppDispatch } from "../reduxStore";
import axios from "axios";
import {
  fetchAppointmentsSuccess,
  removeAppointment,
} from "../reducers/appointmentsReducer";
import { Appointments } from "../../components/booking/interface-appointments";
import { AxiosError } from "axios";
import dayjs from "dayjs";

export const fetchAppointments = () => async (dispatch: AppDispatch) => {
  try {
    const userId = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userId="))
      ?.split("=")[1];
    if (userId) {
      const response = await axios.get<{ appointments: Appointments[] }>(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/appointments/${userId}`,
        { withCredentials: true }
      );
      dispatch(fetchAppointmentsSuccess(response.data.appointments));
    } else {
      console.error("User ID not found in cookies");
    }
  } catch (error) {
    console.error("Error fetching appointments:", error);
  }
};

export const deleteExistingAppointment =
  (appointmentId: string) => async (dispatch: AppDispatch) => {
    try {
      const userId = document.cookie
        .split("; ")
        .find((row) => row.startsWith("userId="))
        ?.split("=")[1];
      if (userId) {
        await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/appointments`,
          {
            data: { userId, appointmentId },
            withCredentials: true,
          }
        );
        dispatch(removeAppointment(appointmentId));
      } else {
        console.error("User ID not found in cookies");
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

interface ErrorResponse {
  message: string;
}

export const submitAppointment = async (
  selectedDay: dayjs.Dayjs,
  selectedTime: string,
  dispatch: AppDispatch // Rimuovi appointments e setAppointments come argomenti
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
      if (response) {
        alert("Appointment successfully submitted!");
      }

      // Richiama fetchAppointments dopo aver inviato l'appuntamento
      dispatch(fetchAppointments());
    } else {
      console.error("User ID not found in cookies");
    }
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    if (axiosError.response) {
      const statusCode = axiosError.response.status;
      if (statusCode >= 200 && statusCode < 300) {
        alert("Appointment successfully submitted!");
        // Request was successful
      } else if (statusCode === 400) {
        // L'utente non è autorizzato a visualizzare la pagina
        console.error("Unauthorized Error:", axiosError.response.data);
        alert(`Unauthorized Error: ${axiosError.response.data.message}`);
      } else {
        // L'errore è stato causato dalla risposta del server (status code diverso da 2xx)
        console.error("Server Error:", axiosError.response.data);
        alert(`Server Error: ${axiosError.response.data.message}`);
      }
    } else if (axiosError.request) {
      // La richiesta è stata fatta ma non è stata ricevuta una risposta
      console.error("Network Error:", axiosError.request);
      alert("Network Error: No response received from server.");
    } else {
      // Errore durante la configurazione della richiesta
      console.error("Request Error:", axiosError.message);
      alert(`Request Error: ${axiosError.message}`);
    }
  }
};
