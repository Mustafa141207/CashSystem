import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
export default function Details() {
  let key = useParams();
  async function getUserDetails() {
    return await axios.get(`https://reqres.in/api/users/${key.ID}?page=page`);
  }

  let { data } = useQuery("UserData", getUserDetails);
  return (
    <>
      <div className="row justify-content-center align-items-center g-2 py-5">
        <div className="col-md-8">
          <div className="content p-3 border border-2 shadow">
            <div className="avatar m-auto">
              <img
                src={data?.data.data.avatar}
                className="w-100  rounded-circle"
                alt=""
              />
            </div>
            <div className="userDetails p-2 my-2">
              <h6>User id: {data?.data.data.id}</h6>
              <p>
                User Name: {data?.data.data.first_name}{" "}
                {data?.data.data.last_name}
              </p>
              <p>Email: {data?.data.data.email}</p>
            </div>
            <div className=" d-flex justify-content-end align-items-center">
              <button className=" btn   btn-success  text-light">
                <Link className=" fw-bolder text-light" to="/Home">
                  <i className="fa-solid mx-2 p-1 fa-arrow-left text-light"></i>
                  Back{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
