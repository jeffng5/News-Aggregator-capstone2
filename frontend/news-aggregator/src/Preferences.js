import React, { useState, useEffect } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

let username = localStorage.getItem('username')
let pref = localStorage.getItem('preferences')
const Preferences = () => {

const searchTopics=[]

    console.log(pref)
    const initialState = pref
    const [formData, setFormData] = useState([])
    const [prefs, setPrefs] = useState(initialState)


useEffect(()=>{
    setPrefs(pref)
   
}, []
)


    const handleForm = (e) => {
        // setFormData(e.target.value)
        // console.log(formData)
        let wildCard=[]
        wildCard.push(e.target.value)
        localStorage.setItem('freePreferences', wildCard)
    }

    const handleChange = (e) => {
    
    if (username) {
        console.log(e.target.checked)
        console.log(e.target.value)
        if (e.target.checked === true) {
            searchTopics.push(e.target.value)
        }
        if (e.target.checked === false) {
            const index = searchTopics.indexOf(e.target.value);

            searchTopics.splice(index, 1);
        }
            console.log(searchTopics)

            localStorage.setItem('preferences', searchTopics)
    }
    if (searchTopics.length ===0) {
        throw Error('Please select at least one topic')
    }
    if (searchTopics.length === 5) {
        throw Error('You have reached the max topics')
    }
    }
console.log(localStorage.getItem('preferences'))
console.log(localStorage.getItem('freePreferences'))

if (username)
console.log(username)
    return (
        <>
        <h1>News Topic Preferences</h1> 
     
        <h3> Your current Topics Are: <h3 className='color'>{prefs}</h3></h3>
        
        <h3> Please Choose (Up to 5): </h3>
        {/* <div>
        <CheckBox item={"Africa"} /></div>
        <div>
        <CheckBox item={"Asia"} /></div>

        <div><CheckBox item={"Business"} /></div>
        <div><CheckBox item={"Entertainment"} /></div>
        <div><CheckBox item={"Europe"} /></div>
        <div><CheckBox item={"General"} /></div>
        <div><CheckBox item={"Health"} /></div>
        <div><CheckBox item={"Science"} /></div>
        <div><CheckBox item={"Sports"} /></div>
        <div><CheckBox item={"Technology"} /></div>
        <div><CheckBox item={"U.S."} /></div> */}
<form>
        <div>
        <input type = 'checkbox' id ='Africa' name='Africa' value= 'Africa' onChange={handleChange}></input>   
        <label for= "Africa">Africa</label>
        </div>
        <div>
        <input type = 'checkbox'   id ='Asia' name='Asia' value= 'Asia' onChange={handleChange} ></input>   
        <label for= "Asia">Asia</label>
        </div>
        <div>
        <input type = 'checkbox'  id='business' name= "business" value= "Business" onChange={handleChange} ></input>
        <label for= "business" >Business</label>
        </div>
        <div>
        <input type = 'checkbox'   id ='entertainment' name='entertainment' value= 'Entertainment' onChange={handleChange}></input>   
        <label for= "entertainment">Entertainment</label>
        </div>
        <div>
        <input type = 'checkbox' id ='Europe' name='Europe' value= 'Europe' onChange={handleChange} ></input>   
        <label for= "Europe">Europe</label>
        </div>
        <div>
        <input type = 'checkbox'   id ='general' name='general' value= 'General' onChange={handleChange}></input>   
        <label for= "general">General</label>
        </div>
        <div>
        <input type = 'checkbox'  id ='health' name='health' value= 'Health' onChange={handleChange} ></input>   
        <label for= "health">Health</label>
        </div>
        <div>
        <input type = 'checkbox' id ='science' name='science' value= 'Science' onChange={handleChange} ></input>   
        <label for= "science">Science</label>
        </div>
        <div>
        <input type = 'checkbox'   id ='sports' name='sports' value= 'Sports' onChange={handleChange}></input>   
        <label for= "sports">Sports</label>
        </div>
        <div>
        <input type = 'checkbox'  id ='technology' name='technology' value= 'Technology' onChange={handleChange}></input>   
        <label for= "technology">Technology</label>
        </div>
        <div>
        <input type = 'checkbox' id ='US' name='US' value= 'US' onChange={handleChange}></input>   
        <label for= "US">U.S.</label>
        </div>
        <div className='button'>
        <button onClick={handleChange}>Save Preferences</button> 
        </div>
            <h2>OR</h2>
        <input type = 'text' id ='Anything' name='Anything' placeholder='Anything' onChange={handleForm}></input>   
        <label for= "Anything"> most popular articles by search term / phrase </label> 
        
        <div className='preferences'>
       <Link to = 'preferences'><button>See Front Page News</button></Link>
       
        </div>
        </form>
</>
    )
}


export default Preferences