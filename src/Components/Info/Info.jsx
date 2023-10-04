import React from 'react'
import axios from 'axios';
import {useEffect,useState } from 'react';

function Info() {

  let [info,setInfo]=useState([]);
      let getInfo=async()=>{
          let {data}=await axios.get("http://universities.hipolabs.com/search?country=United+States");
          setInfo(data.slice(0, 20));
      }
  
      useEffect(()=>{
        getInfo();
      },[])


  return (
    <div className="container mt-5 ">
    <h2 className="mb-4">University Information</h2>
    <table className="table table-striped">
      <thead>
        <tr>
        <th scope="col"> #</th>
          <th scope="col">University Name</th>
          <th scope="col">Country</th>
          <th scope="col">Alpha Two Code</th>
          <th scope="col">Number of Domains</th>
        </tr>
      </thead>
      <tbody>
        {info.map((informations, index) => (
          <tr key={index} >
            <td >{index+1}</td>
            <td >{informations.name}</td>
            <td >{informations.country}</td>
            <td >{informations.alpha_two_code}</td>
            <td >{informations.domains}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
  }

export default Info