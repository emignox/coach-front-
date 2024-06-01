// src/redux/actions/appointmentsActions.ts

import { AppDispatch } from "../reduxStore";
import axios from "axios";
import {
  fetchAppointmentsRequest,
  fetchAppointmentsSuccess,
  fetchAppointmentsFailure,
  removeAppointment,
} from "../reducers/appointmentsReducer";
import { Appointment } from "../../components/booking/interface-appointments";
import { AxiosError } from "axios";
import dayjs from "dayjs";
import { Appointments } from "../../components/booking/interface-appointments";

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

export const fetchAllAppointments = () => async (dispatch: AppDispatch) => {
  dispatch(fetchAppointmentsRequest());
  try {
    const userId = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userId="))
      ?.split("=")[1];

    if (userId) {
      const response = await axios.get<{ appointments: Appointments[] }>(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/appointments`,
        { withCredentials: true }
      );
      dispatch(fetchAppointmentsSuccess(response.data.appointments));
    } else {
      throw new Error("User ID not found in cookies");
    }
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchAppointmentsFailure(error.message));
    } else {
      dispatch(fetchAppointmentsFailure("An unknown error occurred"));
    }
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
            data: {
              userId,
              appointmentId,
            },
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

// redux/actions/appointmentsActions.ts

export const FETCH_USERS_APPOINTMENTS_SUCCESS =
  "FETCH_USERS_APPOINTMENTS_SUCCESS";

export const fetchUsersAppointments = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/appointments`
    );
    dispatch({
      type: FETCH_USERS_APPOINTMENTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching users appointments:", error);
  }
};

//submitAppointment.ts

export const addNewAppointment = (appointment: Appointment) => ({
  type: "ADD_NEW_APPOINTMENT",
  payload: appointment,
});

interface ErrorResponse {
  message: string;
}

export const submitAppointment =
  (selectedDay: dayjs.Dayjs, selectedTime: string) =>
  async (dispatch: AppDispatch) => {
    try {
      const userId = document.cookie
        .split("; ")
        .find((row) => row.startsWith("userId="))
        ?.split("=")[1];
      if (userId) {
        console.log("Selected day:", selectedDay.format("YYYY-MM-DD"));
        console.log("Selected time:", selectedTime);

        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/appointments`,
          {
            userId,
            year: selectedDay.year(),
            month: selectedDay.month() + 1,
            day: selectedDay.date(),
            time: selectedTime,
          },
          { withCredentials: true }
        );
        const { appointmentId } = response.data;

        // Aggiorna lo stato degli appuntamenti
        const newAppointment = {
          _id: appointmentId,
          date: selectedDay.format("YYYY-MM-DD"),
          time: selectedTime,
        };
        dispatch(addNewAppointment(newAppointment));
      } else {
        console.error("User ID not found in cookies");
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        const statusCode = axiosError.response.status;
        if (statusCode >= 200 && statusCode < 300) {
          // Request was successful
        } else if (statusCode === 400) {
          console.error("Unauthorized Error:", axiosError.response.data);
        } else {
          console.error("Server Error:", axiosError.response.data);
        }
      } else if (axiosError.request) {
        console.error("Network Error:", axiosError.request);
      } else {
        console.error("Request Error:", axiosError.message);
      }
    }
  };
