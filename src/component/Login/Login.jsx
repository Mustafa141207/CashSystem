import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let gate=useNavigate();
  return (
    <>
  <section id="Login" className="">
    <div className="container d-flex  justify-content-center align-items-center">
      <div className="box my-5  border-1 rounded-4 shadow w-50 p-5 text-center">
        <h2 className=" my-5">Cash</h2>
        <div className="data ">
          <input type="text" className=" my-3 form-control" placeholder="User Name" />
          <input type="text" placeholder="UserPassword" className=" my-3  form-control" />
          <button onClick={()=>{
            gate('/Home')
          }} className=" btn btn-success w-25 m-auto">Login</button>
        </div>
      </div>
    </div>

  </section>
     
    </>
  );
}
