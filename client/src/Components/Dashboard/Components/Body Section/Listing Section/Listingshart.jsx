import React from 'react'
import './listing.scss'

import axios from 'axios'; 

const listingshart =  () => {
    const [data,setdata]=React.useState([])
    React.useEffect(()=>{
    const fetchdata = async() => {
    const response = await axios.get('http://localhost:3002/listingshart')
    setdata(response.data)
    console.log(data) 
} 

 fetchdata()
    },[])



 return(<div>
 <h1>{data.map(v => { v})}</h1></div>);
}

export default listingshart