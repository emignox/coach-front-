import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import Titles from "../components/blocs/titles";
import { CustomButton } from "../components/blocs/Custom-button";
import { useNavigate } from "react-router-dom";
import { GiPunch } from "react-icons/gi";
import { ConnectionContainer } from "../components/blocs/containers";
import { CustomInput } from "../components/blocs/inputs";

interface ErrorResponse {
  message: string;
  // Aggiungi altri campi se necessario
}

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const maxLength = 20;
  const minLength = 3;

  const handleRegister = async () => {
    try {
      const response = await axios.post<ErrorResponse>(
        "http://localhost:5001/api/users/register",
        {
          username,
          email,
        }
      );
      console.log(response.data.message); // Logga il messaggio di successo
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        // L'errore è stato causato dalla risposta del server (status code diverso da 2xx)
        console.error("Server Error:", axiosError.response.data);
        alert(`Server Error: ${axiosError.response.data.message}`);
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

  const handleSubmit = () => {
    setSubmitted(true);
    if (username.length < minLength) {
      return;
    }
    handleRegister();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <ConnectionContainer>
        <div className="flex items-center justify-center">
          <Titles title="Register" className="font-black" />
          <GiPunch className="ml-3 text-xl text-[#111] md:text-3xl" />
        </div>{" "}
        <label htmlFor="username">Username:</label>
        <CustomInput
          maxLength={maxLength}
          minLength={minLength}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {submitted && username.length < minLength ? (
          <p className="text-red-500">
            Username must be at least {minLength} characters long
          </p>
        ) : null}
        {username.length > maxLength && (
          <p className="text-red-500">
            Username must be at most 20 characters long
          </p>
        )}
        <label htmlFor="email">Email:</label>
        <CustomInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomButton
          className="mb-5 "
          value="Register"
          onClick={handleSubmit}
        />
        <button
          className="underline text-custom-red"
          onClick={() => navigate("/login")}
        >
          You have already an account ? Login
        </button>
      </ConnectionContainer>
    </div>
  );
};

export default Register;
