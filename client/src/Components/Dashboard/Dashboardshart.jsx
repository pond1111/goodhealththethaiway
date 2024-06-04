import React from 'react';
import Sidebarshart from './Components/SideBar Section/Sidbarshart'
import Bodyshart from './Components/Body Section/Bodyshart'
import "../../App.scss";


const Dashboard = () => {
    return (
        <div className='dashboard flex'>
           <div className='dashboardContainer flex'>
            <Sidebarshart/>
            <Bodyshart/> 
           </div>
        </div>
        
    )
}

export default Dashboard