import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import Titles from "../components/blocs/titles";
import { CustomButton } from "../components/blocs/Custom-button";
import { useNavigate } from "react-router-dom";
import { GiHighPunch } from "react-icons/gi";
import { ConnectionContainer } from "../components/blocs/containers";
import { CustomInput } from "../components/blocs/inputs";

interface ErrorResponse {
  message: string;
  user: {
    _id: string;
    username: string;
    email: string;
  };
}

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const maxLength = 20;
  const minLength = 3;

  const handleLogin = async () => {
    try {
      const response = await axios.post<ErrorResponse>(
        "http://localhost:5001/api/users/login",
        {
          username,
          email,
        }
      );
      console.log(response.data.message); // Logga il messaggio di successo
      // Effettua qualsiasi azione aggiuntiva necessaria dopo il login
      if (response.status === 200) {
        alert("Login successful!");

        // Imposta il cookie "userId" nel browser
        const userId = response.data.user._id;
        document.cookie = `userId=${userId}; max-age=3600; path=/;`;

        navigate("/booking");
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        // L'errore è stato causato dalla risposta del server (status code diverso da 2xx)
        console.error("Server Error:", axiosError.response.data);
        // alert(` ${axiosError.response.data.message}`);
        setErrorMessage(axiosError.response.data.message);
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

  return (
    <div className="flex items-center justify-center h-[90vh]">
      <ConnectionContainer>
        <div className="flex items-center justify-center">
          <Titles title="Login" className="font-black" />
          <GiHighPunch className="ml-3 text-xl text-[#111] md:text-3xl" />
        </div>
        <label htmlFor="username">Username:</label>
        <CustomInput
          maxLength={maxLength}
          minLength={minLength}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <CustomInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomButton className="mb-5 " value="Login" onClick={handleLogin} />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          className="underline text-custom-red"
          onClick={() => navigate("/register")}
        >
          Don't have an account? Register
        </button>
      </ConnectionContainer>
    </div>
  );
};

export default Login;
