import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("log", "ok");
    navigate("/home");
  };

  const handleRegister = () => {
    navigate("/register");
  }

  return (
    <div className="max-sm:px-5 lg:self-center">
      <div className="flex flex-col gap-3 lg:w-[35vw]">
        <input type="text" placeholder="Email" className="w-[100%] max-sm:w-[90%] p-1" />
        <input type="text" placeholder="Mot de passe" className="w-[100%] max-sm:w-[90%] p-1"  />
        <p className="underline text-sm">mot de passe oublié ?</p>
        {/* Button log */}
        <button onClick={handleLogin} className="mt-5">
          Go home
        </button>
      </div>
    {/* New user */}
      <div className="text-center mt-5">
        <p>Vous n'avez pas de compte ?</p>
        <p className="underline cursor-pointer" onClick={handleRegister}>Création d'un compte</p>
      </div>
    </div>
  );
};

export default LoginForm;
