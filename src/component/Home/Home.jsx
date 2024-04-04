import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Link, json } from "react-router-dom";
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
let PursheData=[];
let Reset=[];
let[Purshe,SetPurshe]=useState([])
let e1=useRef();
let e2=useRef();
let[SearchVlaue,setSearch]=useState('');
let[count,setCount]=useState(1);
let[prise,Setprice]=useState(0);
let data={
  "data": [
    {
      "id": 1,
      "name": "سندوتشات",
      "name2": "سندوتش فول",
      'price':10,
      'count':count,
    },
    {
      "id": 10,
      "name": "سندوتشات",
      "name2": "سندوتش فلافل",
      'price':10,
      'count':count,
    },
    {
      "id": 2,
      "name": "مشروبات",
      "name2": "قهوه",
      'price':10,
      'count':count,
    
    },
    {
      "id": 3,
      'Special':2,
      "name": "مشروبات",
      "name2": "شاي",
      'price':10,
      'count':count,
     
     
    },
    {

      "id": 4,
      "name": "سندوتشات",
      "name2": "استنج",
      'price':10,
      'count':count,

     
    },
    {
      "id": 5,
      "name": "مشروبات",
      "name2": "شويبس",
      'price':10,
      'count':count,
     
    },
    {
      "id": 6,
      "name": "مشروبات",
      "name2": "كانز",
      'Special':2,
      'price':10,
      'count':count,
     
    }
  ],
}
function Show(){
  for(let i=0;i<PursheData.length;i++){
    e1.current.innerHTML+=
  `
  <tr  className=' text-center'>
  <td>${PursheData[i].count * PursheData[i].price}</td>
  <td>${PursheData[i].count}</td>
  <td>${PursheData[i].name2} </td>
</tr>


  `

  {setCount(1)};
  {Setprice(prise+PursheData[i].count * PursheData[i].price)}

    
  
    
    
    
  }
}

let  Types=["سندوتشات", "اطباق", "طاسات", "مشروبات",'سايب' ]
let numbers=[1,2,3,4,5,6,7,8,9]
  return (
   <>
   <section id="Home" className=" my-5">
    <div className="container py-5">
      <div className="row g-4 flex-row-reverse">
      <div className="col-md-6 ">
        <div className="item d-flex flex-column justify-content-start align-items-end">
            {Types.map((e)=>{

              return <button id="TypeBtn" onClick={(x)=>{
          
                setSearch(x.target.value)
              
              }} className=" m-1 btn w-25   "  value={e}> {e} </button>
            })}
          
          </div>
          <div className="conteeent  d-flex flex-row-reverse  my-2">
            {data.data.filter((e)=>{
              if(e.name===SearchVlaue){
              return e
              }
            }).map((xxxx)=>{
              return<>
              <button onClick={(e)=>{
              SetPurshe(xxxx);
                PursheData.push( xxxx);
                localStorage.setItem('Data',JSON.stringify(PursheData))
                Show()
              }}  className=" m-2 btn btn-success">{xxxx.name2}</button>
              
              </>
            })}
          
       
          </div>
         
        


        </div>
        <div className="col-md-6 ">
          <div className="top">
            <table className="table border-dark table-hover table-success table-bordered">
             <thead className=" text-center">
              <tr>
              <th className=" w-25">السعر </th>
              <th className=" w-25">
                <div className=" justify-content-center align-items-center d-flex text-center">
                  <input ref={e2} id="cOunt" value={count}   type="text" className=" mx-1 w-25 text-center  align-self-center" />
                  <span>الكميه</span>
                </div>
              </th>
              <th className=" w-25">الاسم</th>
              </tr>
             </thead>
             <tbody className=" text-center" id="Tbody" ref={e1}>
             </tbody>
            </table>
          </div>
          <div className="orderControl my-4 d-flex justify-content-center align-items-center flex-row-reverse">
            <div className="item">
              <button className=" btn mx-2 btn-success">التالي</button>
            </div>
            <div className="item">
              <button className=" btn mx-2 btn-success">السابق</button>
            </div>
            <div className="item">
              <button className=" btn mx-2 btn-danger">الغاء</button>
            </div>
          </div>
       
         
          <div className="bottom row  rounded-4 shadow d-flex border border-2 p-2 justify-content-center align-items-center">
            <div className="left my-3 col-md-4 d-flex justify-content-center align-items-center">
            <button onClick={()=>{
              Reset=PursheData;
              console.log(Reset)
            }} className="btn mx-2 btn-success p-3">طباعه</button>
            <button className="btn btn-danger p-3">الغاء</button>
            </div>
            <div className="middlle col-md-4  d-flex justify-content-center align-items-center">
              <input type="text" className="   fw-bolder  border-none   w-50 text-center form-control " disabled value={prise} />
            </div>
            <div className="right col-md-4  d-flex justify-content-center align-item-center">
              <div className="icons">
                {numbers.map((e)=>{
                  return  <div className="icon mx-1">
                  <button onClick={(x)=>{
                    setCount(e)
                    
                  }} className=" btn  btn-light fw-bold" id="NumBtn">{e}</button>
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