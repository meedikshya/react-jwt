import React, { useState } from 'react'
import { Barchart } from '../Components/Barchart';
import {UserData} from '../data';
import {Linechart} from '../Components/Linechart';
import {Piechart} from '../Components/Piechart';

export const Insights = () => {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month)  ,
    datasets:[{
      label: "Steps",
      data: UserData.map((data) => data.steps),
      backgroundColor:[ "#6d5fb3", "#f46995"]
     
    }]
  });
  return (
    <div className='barchart'>
    <Barchart chartData={userData} />
    <Linechart chartData={userData} />
    <Piechart chartData={userData} />

    

    </div>
  )
}
