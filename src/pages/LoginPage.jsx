import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";
import image from "../assets/illustrations/noteLoging.svg"
import CustomDivide from "../components/custom/CustomDivide";
import ImageLogin from "../components/login/ImageLogin";

const LoginPage = () => {
  return (
    <div className="base-page">
      <div className="flex flex-col gap-10">
        <h1>Connexion</h1>
        {/* Try grid */}
        {/* <div className="grid grid-cols-2 divide-x-2 divide-black mt-10">
          <LoginForm />
          <div className="">
            <h2 className="ml-10">INFO</h2>
          </div>
        </div> */}
        {/* Try flex */}
        <div className="flex max-sm:flex-col gap-5 max-sm:gap-10 mt-10 justify-evenly max-sm:mt-3">
          <LoginForm />
          <CustomDivide />
          <ImageLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
