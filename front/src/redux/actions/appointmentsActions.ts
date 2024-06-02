// src/redux/actions/appointmentsActions.ts

import { AppDispatch } from "../reduxStore";
import axios from "axios";
import {
  fetchAppointmentsSuccess,
  fetchAppointmentsFailure,
  removeAppointment,
} from "../reducers/appointmentsReducer";
import {
  Appointments,
  User,
} from "../../components/booking/interface-appointments";

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
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/appointments`,
      { withCredentials: true }
    );
    console.log(response.data);
    if (response.data) {
      const users = response.data.appointments.map(
        (item: { user: User; appointments: Appointments[] }) => ({
          username: item.user.username,
          appointments: item.appointments,
        })
      );
      dispatch(fetchAppointmentsSuccess(users));
      return { payload: { appointments: users } };
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    dispatch(fetchAppointmentsFailure("An unknown error occurred"));
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
