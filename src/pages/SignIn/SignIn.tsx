import React, { useState } from "react";
import * as yup from "yup";

import logo from "../../assets/images/logo.svg";
import heroImage from "../../assets/images/signin-hero-image.png";
import CustomForm from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../../store/reducers/auth.reducer";
import axios from "../../API/axios";

const validationSchema = yup.object().shape({
  jojoId: yup.string().label("user id"),
  // .required("User ID is required"),
  password: yup.string().label("Password"),
  // .required("Password is required"),
  keepMeLogin: yup.boolean().optional().default(false),
});

interface SignInProps {
  jojoId: string;
  password: string;
  appType: string;
  keepMeLogin: boolean;
}

const SignIn = () => {
  const initialState: SignInProps = {
    jojoId: "",
    password: "",
    appType : "mainAdmin",
    keepMeLogin: false,
  };
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (values: SignInProps) => {
    setIsLoading(true);
    console.log(values, "nlhbhjbhbjhbh");
    try {
      dispatch(LOGIN_SUCCESS(values));
      const Response = await axios.post("login", values)
      .then( resp => {
        const token = resp.data.token
        localStorage.setItem("token",token);
        console.log(token, "TOKENNNN");  
        if(token){
        }
      })
      setIsLoading(false)
    }
    catch(err) {
        console.log(err)
        setIsLoading(false)
      }
    setIsLoading(false);
  };
  return (
    <div className="bg-white w-screen h-screen flex items-center justify-center">
      <div className="w-[55%] h-[420px] shadow rounded-xl  overflow-hidden">
       
        <div className="w-full h-full flex items-center justify-center flex-col p-5 bg-quaternary bg-opacity-60">
          <h5 className="text-black capitalize font-bold text-3xl mb-5">Sign in</h5>
          <CustomForm
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className="bg-white px-6 py-8 rounded-lg rounded-2xl">
              <Input
                type="text"
                name="jojoId"
                placeholder="User Id"
                className="border-none text-black outline-none shadow-lg w-96"
                inputContainerClassName="mb-3"
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                className="border-none text-black outline-none shadow-lg w-96"
              />
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <Button
                title="sign-in"
                type="submit"
                isLoading={isLoading}
                className="bg-tertiaryText text-white p-2 px-9 w-36 m-auto transform transition-all hover:scale-95"
              />
            
            </div>
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  label="Keep me signed in"
                  className=""
                  labelClassName="text-black"
                  name="keepMeLogin"
                />
              </div>
              <Link to="/forgot-password" className="text-black underline">
                Forgot Password
              </Link>
            </div>
          </CustomForm>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
