import React from 'react'
import { useState } from 'react';
import {GiRunningShoe} from 'react-icons/gi';
import {LiaRunningSolid} from 'react-icons/lia';
import {IoIosBicycle} from 'react-icons/io';
import {UserData} from '../data';
import {Linechart} from '../Components/Linechart';


export const Dashboard = () => {
  // const [selectedMonth, setSelectedMonth] = useState('Jan');
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month)  ,
    datasets:[{
      data: UserData.map((data) => data.steps),
      backgroundColor: 'white',
      borderColor: '#FE81A9',
      // backgroundColor:[ "#00BA2C", "white"]
    }]
  });

  // const totalSteps = UserData.reduce((total, data) => total + data.steps, 0);

  // const handleMonthSelect = (month) => {
  //   setSelectedMonth(month);
  // }

    // const months = UserData.map((data) => data.month);



  return (
    <div className='dashboardSection'>
    <span className='pText'>Primary</span>
    <br></br>
    <span className='dText'>Dashboard</span>
    <div className='dashboardContainer'>


      <div className='containerLeft'>
    <span>

    <div className="dropdown">
              <button className="dropdownButton">
                Months
              </button>
                {/* <div className="dropdownContent">
                  {months.map((month) => (
                    <button key={month} onClick={() => handleMonthSelect(month)}>
                      {month}
                    </button>
                  ))}
                </div> */}
            </div>
          </span>

      <span style={{"position":"relative ", "top":"30px", "left":"-63vh", "color":"white"}}>Overview</span>
    <span className='lineChart'>
    <Linechart chartData={userData} />
    </span>
    <span style={{"position":"relative", "top":"290px", "left":"-470px",  "color":"white", "font-size":"15px"}}>
      Steps
    <br/>
    </span>
      {/* <span style={{"font-size":"25px","position":"absolute", "top":"375px", "left":"110px", "color":"white"}}>{totalSteps}</span> */}
  </div>
      <div className='containerRight'>
        <div className='rightFirst'>
          <div className='upperOverlappingDiv'>
              <span style={{"color":"white","font-size":"45px", "margin-left":"15px"}}><GiRunningShoe/></span>
              <span style={{"color":"white","position":"absolute", "marginTop":"20px","left":"90px","fontSize":"20px", "white-space":"nowrap"}}>Daily Jogging</span>
          </div>
        </div>
        <div className='rightSecond'></div>
          <div className='lowerFirstOverlappingDiv'></div>
          <div className='lowerOverlappingDiv'>
            <span style={{"color":"white", "font-size":"50px", "margin-left":"15px"}}><LiaRunningSolid/></span>
              <span style={{"color":"white","position":"absolute", "marginTop":"20px","left":"90px","fontSize":"20px", "white-space":"nowrap"}}>My Jogging</span>
          </div>
      </div>
    </div>

    <div className='containerBottom'>
      <div className='containerI'>
        <div className='overlappingDiv'>
        <span style={{"color":"white", "font-size":"45px", "margin-left":"10px"}}><IoIosBicycle/></span>
        <span style={{"color":"black","position":"absolute", "marginTop":"80px","left":"-20px","fontSize":"20px", "white-space":"nowrap"}}>Bicycle Drill</span>


        </div>
      </div>
      <div className='containerII'>
        <div className='overlappingDiv'>
        <span style={{"color":"white", "font-size":"45px", "margin-left":"15px"}}><LiaRunningSolid/></span>
        <span style={{"color":"black","position":"absolute", "marginTop":"80px","left":"-20px","fontSize":"20px", "white-space":"nowrap"}}>Jogging Hero</span>

        </div>
      </div>
      <div className='containerIII'>
        <div className='overlappingDiv'>
        <span style={{"color":"white","font-size":"45px", "margin-left":"15px"}}><GiRunningShoe/></span>
        <span style={{"color":"black","position":"absolute", "marginTop":"80px","left":"-20px","fontSize":"20px", "white-space":"nowrap"}}>Healthy Busy</span>
        </div>
      </div>

    </div>

    </div>
  )
}
