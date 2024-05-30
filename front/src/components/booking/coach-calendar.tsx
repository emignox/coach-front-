import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

interface Appointment {
  _id: string;
  year: number;
  month: number;
  day: number;
  time: string;
  createdAt: string;
}

interface User {
  username: string;
  appointments: Appointment[];
}

function CoachCalendar() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/appointments `
        );
        console.log(response.data);
        if (response.data) {
          const users = response.data.appointments.map(
            (item: { user: User; appointments: Appointment[] }) => ({
              username: item.user.username,
              appointments: item.appointments,
            })
          );
          setUsers(users);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getAllUsers();
  }, []);

  return (
    <div className="flex flex-wrap items-start justify-start h-screen text-white">
      {users.map(
        (user) =>
          user.appointments.length > 0 &&
          user.appointments.map((appointment) => (
            <div className="mx-10 text-white" key={appointment._id}>
              <p>Username: {user.username}</p>
              <p>Year: {appointment.year}</p>
              <p>Month: {appointment.month}</p>
              <p>Day: {appointment.day}</p>
              <p>Time: {appointment.time}</p>
            </div>
          ))
      )}
    </div>
  );
}

export default CoachCalendar;
