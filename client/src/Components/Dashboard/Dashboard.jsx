import React from 'react';
import Sidebar from './Components/SideBar Section/Sidebar';
import Top from '../Dashboard/Components/Body Section/Top';


const Dashboard = () => {
    return (
        <div className='dashboard flex'>
           <div className='dashboardContainer flex'>
            <Sidebar/>
            <Top/> 
           </div>
        </div>
        
    )
}

export default Dashboard