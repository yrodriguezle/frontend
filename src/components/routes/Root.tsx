import { Outlet, redirect } from "react-router-dom"
import { isAuthenticated } from "@/lib/authentication/auth";

export async function loader() {
  if (!isAuthenticated()) {
    return redirect("/login");
  }
  return null;
}

function Root() {
  return (
    <Outlet />
  )
}

export default Root