// src/redux/reducers/appointmentsReducer.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Appointments } from "../../components/booking/interface-appointments";

interface AppointmentsState {
  appointments: Appointments[];
  error: string | null;
}

const initialState: AppointmentsState = {
  appointments: [],
  error: null,
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    fetchAppointmentsSuccess(state, action: PayloadAction<Appointments[]>) {
      state.appointments = action.payload;
      state.error = null;
    },
    fetchAppointmentsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },

    removeAppointment(state, action: PayloadAction<string>) {
      state.appointments = state.appointments.filter(
        (appointment) => appointment._id !== action.payload
      );
    },
  },
});

export const {
  fetchAppointmentsSuccess,
  fetchAppointmentsFailure,
  removeAppointment,
} = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
