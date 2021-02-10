import React,{useReducer} from 'react'
var initial={
    stage:1,
    firstname:"",
    secondname:"",
    email:"",
    address:"",
    city:"",
    occupation:"",
    bio:""
}
const reduce=(state,{key,data})=>{
    switch(key){
        case "firstname":
           return {...state,firstname:data}
        case "lastname":
           return {...state,lastname:data}
        case "email":
           return {...state,email:data}
        case "address":
           return {...state,address:data}
        case "city":
           return {...state,city:data}
        case "occupation":
           return {...state,occupation:data}
        case "bio":
           return {...state,bio:data}
        case "stage":
            return {...state,stage:data}
        default:
            return state
    }
}
function Userform() {
    const [info,dispatch]=useReducer(reduce,initial);
    const changeHandler=e=>{
        dispatch({key:e.target.name,data:e.target.value})
    }
    switch(info.stage){
        case 1:
            return (
                <div>
                    <input type="text" value={info.firstname} name="firstname" placeholder="First name" onChange={changeHandler}></input>
                    <input type="text" value={info.lastname} name="lastname" placeholder="Last name" onChange={changeHandler}></input>
                    <input type="text" value={info.email} name="email" placeholder="Email" onChange={changeHandler}></input>
                    <button type="button" onClick={()=>dispatch({key:"stage",data:info.stage+1})}>next</button>
                </div>)
        case 2:
            return (
                <div>
                    <input type="text" value={info.address} name="address" placeholder="address" onChange={changeHandler}></input>
                    <input type="text" value={info.city} name="city"placeholder="city" onChange={changeHandler}></input>
                    <input type="text" value={info.occupation} name="occupation" placeholder="occupation" onChange={changeHandler}></input>
                    <input type="text" value={info.bio} name="bio" placeholder="bio" onChange={changeHandler}></input>
                    <button type="button" onClick={()=>dispatch({key:"stage",data:info.stage-1})}>back</button>

                </div>
            )
            default:
                return

    }
    
}

export default Userform
