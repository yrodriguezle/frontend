import { useCallback } from "react";
import { SubmitHandler } from "react-hook-form";
import { redirect, useNavigate } from "react-router-dom";

import { isAuthenticated, signin } from "@/lib/authentication/auth";
import SigninForm, { SigninValues } from "./SigninForm";

export async function loader() {
  if (isAuthenticated()) {
    return redirect("/");
  }
  return null;
}

function SigninPage() {
  const navigate = useNavigate();

  const onSubmit = useCallback<SubmitHandler<SigninValues>>(
    async (values) => {
      
      try {
        const signinSuccesful = await signin(values);
        if (signinSuccesful) {
          navigate("/", { replace: true });
        }
      } catch (error) {
        console.log(error);
      }
    },
    [navigate],
  )

  return (
    <SigninForm onSubmit={onSubmit} />
  )
}

export default SigninPage