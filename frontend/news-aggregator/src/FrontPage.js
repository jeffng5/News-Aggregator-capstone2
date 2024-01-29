import React, {useState, useEffect } from 'react'
import axios from 'axios'

const FrontPage = () => {

const [data, setData] = useState("")
    
useEffect(()=> {
    getData();
}, []);

async function getData() {
    try{
    let res = await axios.get('/dogs');
    console.log(res.data)
    
    setData(res.data)
} catch (err) {
    console.log(err)
}
}

return (
    data 



    )


}

export default FrontPage