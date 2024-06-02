export interface Appointment {
  _id: string;
  date: string;
  time: string;
}
export interface Appointments {
  _id: string;
  year: number;
  month: number;
  day: number;
  time: string;
  createdAt: string;
}

export interface User {
  username: string;
  appointments: Appointments[];
}
