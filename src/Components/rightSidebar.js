import React from 'react';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {FaHeart, FaRegMoon} from 'react-icons/fa';
import ProgressBar from "@ramonak/react-progress-bar";



export const RightSidebar = () => {
  return (
    <div>
        <div className='top'>
        <div className='smallContainers'>
        <div className='containerSectionI'>
        <div className='smallContainerI'>

        <FaHeart className='iconRight'/>

            <span className='textRight'>
              Heart
            </span>

        </div>
        <div className='smallContainerII'>

        <FaRegMoon className='iconRight'/>

            <span className='textRight'>
              Sleep
            </span>

          </div>
        </div>
        <div className='containerSectionII'>
        {/* <span className='progress'>
        <ProgressBar completed={70} 
        maxCompleted={120}
        background-bgColor='#f46995'
        baseBgColor='#f46995'
        height='30px'
        margin='10px'
         />

        </span> */}
        <div className='smallContainerIII'>
          
          </div>
          <div className='smallContainerIV'>
          
          </div>
          
        </div>
        <div className='containerSectionIII'>
        <div className='smallContainerV'>
          
          </div>
          <div className='smallContainerVI'>
          
          </div>
          
        </div>

        </div>
        </div>
    </div>
  )
}
