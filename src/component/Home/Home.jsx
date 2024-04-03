import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import $ from'jquery'

export default function Home() {
//  function(){
//    // let[search,Setsearch]=useState([]);
//   // let[sItem,SetItem]=useState([]);
//   // async function getUsersData() {
//   //  let{data}= await axios.get(` https://reqres.in/api/users?page=page`);
//   //  Setsearch(data.data)
//   // }
//   // useEffect(()=>{
//   //   getUsersData();
//   // },[])
//   // let xyz=document.querySelector('#xyz')
//  }

let data={
  "data": [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "name": "سندوتشات",
      "name2": "سندوتش فول",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "name": "سندوتشات",
      "name2": "سندوتش فلافل",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      "id": 2,
      'Special':2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "name": "مشروبات",
      "name2": "قهوه",
     
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
      "id": 3,
      "email": "emma.wong@reqres.in",
      'Special':2,
      "name": "مشروبات",
      "name2": "شاي",
     
      "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
      "id": 4,
      "email": "eve.holt@reqres.in",
      "name": "سندوتشات",
      "name2": "استنج",
      "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
      "id": 5,
      "email": "charles.morris@reqres.in",
      'Special':2,
      "name": "مشروبات",
      "name2": "شويبس",
      "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
      "id": 6,
      "email": "tracey.ramos@reqres.in",
      "name": "مشروبات",
      "name2": "كانز",
      'Special':2,
      "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }
  ],
}
let[SearchVlaue,setSearch]=useState('');
let[count,setCount]=useState(1);

let  Types=["سندوتشات", "اطباق", "طاسات", "مشروبات",'سايب' ]
let numbers=[1,2,3,4,5,6,7,8,9]
  return (
   <>
   <section id="Home">
    <div className="container py-5">
      <div className="row g-4 flex-row-reverse">
      <div className="col-md-6 ">
        <div className="item d-flex flex-row-reverse justify-content-start align-items-center">
            {Types.map((e)=>{

              return <button onClick={(x)=>{
          
                setSearch(x.target.value)
              
              }} className=" m-1 btn btn-danger"  value={e}> {e} </button>
            })}
          
          </div>
          <div className="conteeent  d-flex flex-row-reverse  my-2">
            {data.data.filter((e)=>{
              if(e.name===SearchVlaue){
              return e
              }
            }).map((xxxx)=>{
              return<>
              <button className=" m-2 btn btn-success">{xxxx.name2}</button>
              
              </>
            })}
       
          </div>


        </div>
        <div className="col-md-6 ">
          <div className="top h-75">
            <table className="table border-danger  table-bordered">
             <thead className=" text-center">
              <tr>
              <th>السعر </th>
              <th>
                <div className=" justify-content-center align-items-center d-flex text-center">
                  <input value={count}  type="text" className=" mx-1 w-25 text-center  align-self-center" />
                  <span>الكميه</span>
                </div>
             
              </th>
            
              
              <th>الاسم</th>

              </tr>
        
             </thead>
             <tbody>
              <tr>
                <td>dadasda</td>
                <td>dadasda</td>
                <td>dadasda</td>
              </tr>
              <tr>
                <td>9</td>
                <td>2555</td>
                <td></td>
              </tr>
              <tr>
                <td>dadasda</td>
                <td>dadasda</td>
                <td>dadasda</td>
              </tr>
         
             </tbody>
            </table>
          </div>
          <div className="bottom row bg-dark d-flex border border-2 p-2 justify-content-center align-items-center">
            <div className="left my-3 col-md-4 d-flex justify-content-center align-items-center">
            <button className="btn mx-2 btn-success p-3">طباعه</button>
            <button className="btn btn-danger p-3">الغاء</button>
            </div>
            <div className="middlle col-md-4  d-flex justify-content-center align-items-center">
              <input type="text" className="   fw-bolder bg-dark  border-none  text-white w-50 text-center form-control " disabled value={200} />
            </div>
            <div className="right col-md-4  d-flex justify-content-center align-item-center">
              <div className="icons">
                {numbers.map((e)=>{
                  return  <div className="icon mx-1">
                  <button onClick={(x)=>{
                    setCount(e)
                  }} className=" btn btn-success">{e}</button>
                </div>
                })}
              </div>

             
            </div>
           
          </div>
        
       
        
        

        </div>
   
      </div>
    </div>
   </section>
   
   </>
  );
}
 // <>
    // <div className=" p-5 d-flex justify-content-center align-items-center">
    // <input id="xyz" type="text" className="form-control w-50 p-2 " placeholder="Search" onChange={(e)=> SetItem(e.target.value)}  />
    // </div>
    //   <div id="rows" className="row g-2 py-5">
    //   {search.filter((value)=>{
    //     if(sItem==''){
    //       return value
    //     }else if(value.id===sItem.id){
    //       return value
    //     }
    //   })
    //   .map((user,id) => {
    //       return (
    //         <>
    //           <div key={id} className="col-md-4">
    //             <Link to={`/Details/${user.id}`}>
    //               <div className="content p-3 border border-2 shadow">
    //                 <div className="avatar m-auto">
    //                   <img
    //                     src={user.avatar}
    //                     className="w-100  rounded-circle"
    //                     alt=""
    //                   />
    //                 </div>
    //                 <div className="userDetails p-2 my-2">
    //                   <h6>User id: {user.id}</h6>
    //                   <p>
    //                     User Name: {user.first_name} {user.last_name}
    //                   </p>
    //                   <p>Email: {user.email}</p>
    //                 </div>
    //               </div>
    //             </Link>
    //           </div>
    //         </>
    //       );
    //     })}
    //     {search.filter(x=>x.id==xyz.value ).map((user,id) => {
    //       return (
    //         <>
    //           <div key={user.id} className="col-md-4">
    //             <Link to={`/Details/${user.id}`}>
    //               <div className="content p-3 border border-2 shadow">
    //                 <div className="avatar m-auto">
    //                   <img
    //                     src={user.avatar}
    //                     className="w-100  rounded-circle"
    //                     alt=""
    //                   />
    //                 </div>
    //                 <div className="userDetails p-2 my-2">
    //                   <h6>User id: {user.id}</h6>
    //                   <p>
    //                     User Name: {user.first_name} {user.last_name}
    //                   </p>
    //                   <p>Email: {user.email}</p>
    //                 </div>
    //               </div>
    //             </Link>
    //           </div>
    //         </>
    //       );
    //     })}
        
    //   </div>
    // </>