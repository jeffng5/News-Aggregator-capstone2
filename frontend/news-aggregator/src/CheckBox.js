import React, {useState} from 'react'


const CheckBox = ({item}) => {

    const [state, setState] = useState(true)

    
return (
<>
<form>
<input type = 'checkbox' id ={item} name={item} value={item} checked={setState}></input>   
<label for= {item}>{item}</label>
</form>
</>
)
}


export default CheckBox;