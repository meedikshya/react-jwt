import React from 'react'
import { useState } from 'react';
import {GiRunningShoe} from 'react-icons/gi';
import {LiaRunningSolid} from 'react-icons/lia';
import {IoIosBicycle} from 'react-icons/io';
import {UserData} from '../data';
import {Linechart} from '../Components/Linechart';


export const Dashboard = () => {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month)  ,
    datasets:[{
      data: UserData.map((data) => data.steps),
      backgroundColor: 'white',
      borderColor: 'white',
      // backgroundColor:[ "#00BA2C", "white"]
    }]
  });

  return (
    <div className='dashboardSection'>

    <span className='pText'>Primary</span>
    <br></br>
    <span className='dText'>Dashboard</span>

    <div className='dashboardContainer'>
      <div className='containerLeft'>
    <span className='lineChart'><Linechart chartData={userData} /></span>
      </div>
      <div className='containerRight'>
        <div className='rightFirst'>
          <div className='upperOverlappingDiv'>
              <span style={{"color":"white","font-size":"45px", "margin-left":"15px"}}><GiRunningShoe/></span>
          </div>
        </div>
        <div className='rightSecond'></div>
          <div className='lowerFirstOverlappingDiv'></div>
          <div className='lowerOverlappingDiv'>
            <span style={{"color":"white", "font-size":"50px", "margin-left":"15px"}}><LiaRunningSolid/></span>
          </div>
      </div>
    </div>

    <div className='containerBottom'>
      <div className='containerI'>
        <div className='overlappingDiv'>
        <span style={{"color":"white", "font-size":"45px", "margin-left":"10px"}}><IoIosBicycle/></span>

        </div>
      </div>
      <div className='containerII'>
        <div className='overlappingDiv'>
        <span style={{"color":"white", "font-size":"45px", "margin-left":"15px"}}><LiaRunningSolid/></span>
        </div>
      </div>
      <div className='containerIII'>
        <div className='overlappingDiv'>
        <span style={{"color":"white","font-size":"45px", "margin-left":"15px"}}><GiRunningShoe/></span>

        </div>
      </div>

    </div>

    </div>
  )
}
