// src/redux/reducers/appointmentsReducer.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Appointment {
  _id: string;
  year: number;
  month: number;
  day: number;
  time: string;
  createdAt: string;
}

interface AppointmentsState {
  appointments: Appointment[];
  loading: boolean;
  error: string | null;
}

const initialState: AppointmentsState = {
  appointments: [],
  loading: false,
  error: null,
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    fetchAppointmentsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAppointmentsSuccess(state, action: PayloadAction<Appointment[]>) {
      state.loading = false;
      state.appointments = action.payload;
    },
    fetchAppointmentsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addNewAppointment(state, action: PayloadAction<Appointment>) {
      state.appointments.push(action.payload);
    },
    removeAppointment(state, action: PayloadAction<string>) {
      state.appointments = state.appointments.filter(
        (appointment) => appointment._id !== action.payload
      );
    },
  },
});

export const {
  fetchAppointmentsRequest,
  fetchAppointmentsSuccess,
  fetchAppointmentsFailure,
  addNewAppointment,
  removeAppointment,
} = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
