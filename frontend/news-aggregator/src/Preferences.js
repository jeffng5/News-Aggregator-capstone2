import React from 'react'
import "./Login.css"

const Preferences = () => {

    return (
        <>
        <h1>News Topic Preferences</h1> 
        <form>
        
        <div>
        <input type = 'checkbox' id ='Africa' name='Africa' value= 'Africa'></input>   
        <label for= "Africa">Africa</label>
        </div>
        <div>
        <input type = 'checkbox' id ='Asia' name='Asia' value= 'Asia'></input>   
        <label for= "Asia">Asia</label>
        </div>
        <div>
        <input type = 'checkbox' id='business' name= "business" value= "business"></input>
        <label for= "business">Business</label>
        </div>
        <div>
        <input type = 'checkbox' id ='entertainment' name='entertainment' value= 'entertainment'></input>   
        <label for= "entertainment">Entertainment</label>
        </div>
        <div>
        <input type = 'checkbox' id ='Europe' name='Europe' value= 'Europe'></input>   
        <label for= "Europe">Europe</label>
        </div>
        <div>
        <input type = 'checkbox' id ='general' name='general' value= 'general'></input>   
        <label for= "general">General</label>
        </div>
        <div>
        <input type = 'checkbox' id ='health' name='health' value= 'health'></input>   
        <label for= "health">Health</label>
        </div>
        <div>
        <input type = 'checkbox' id ='science' name='science' value= 'science'></input>   
        <label for= "science">Science</label>
        </div>
        <div>
        <input type = 'checkbox' id ='sports' name='sports' value= 'sports'></input>   
        <label for= "sports">Sports</label>
        </div>
        <div>
        <input type = 'checkbox' id ='technology' name='technology' value= 'technology'></input>   
        <label for= "technology">Technology</label>
        </div>
        <div>
        <input type = 'checkbox' id ='US' name='US' value= 'US'></input>   
        <label for= "US">U.S.</label>
        </div>
        <div>
            <h2>OR</h2>
        <input type = 'text' id ='Anything' name='Anything' value= 'Anything' placeholder='Anything'></input>   
        <label for= "Anything"> most popular articles by search term / phrase </label> 
        </div>
        <div className='preferences'>
        <button>Submit Preferences</button>
        </div>
        </form>

</>
    )
}


export default Preferences