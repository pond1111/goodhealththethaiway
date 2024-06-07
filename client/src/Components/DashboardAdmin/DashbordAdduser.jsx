import React from 'react';
import Sidebaram from './Sidbar/Sidebaram'
import Bodyam from './Body/Bodyam';
import "../../App.scss";


const DashboardAdminUser = () => {
    return (
        <div className='dashboard flex'>
           <div className='dashboardContainer flex'>
            <Sidebaram/>
            <Bodyam/> 
           </div>
        </div>
        
    )
}

export default DashboardAdminUser