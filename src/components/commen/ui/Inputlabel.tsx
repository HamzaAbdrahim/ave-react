/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from "react";
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

type InputProps = {
  name: string;
  type: "text" | "password" | 'email';
  label: string;
  error?: FieldError | undefined ;
  value?:string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegister<any>;
  rules?: RegisterOptions;
};

const Inputlabel = ({ name, type, label,  error, onChange , value , register , rules}: InputProps) => {
  return (
    <div>
    <div className="col-12 position-relative">
      <input {...register?.(name, rules)} className={`${error && 'is-invalid'}
       floting-input px-3`} value={value}  type={type} name={name} onChange={onChange} placeholder=" " />
      <label className={`floting-label`} typeof="input"  
      htmlFor={name}>{label}</label>
    </div>
      {error ? <div className="text-danger fs-px_12">{error.message}</div> : false}
    </div>
  );
};

export default Inputlabel;

