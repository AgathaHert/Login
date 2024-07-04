import { IFormLogin } from "./../../pages/Login/types";
import { Control } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<IFormLogin, any>;
  name: "email" | "password";
  errorMessage?: string;
}
