import axios from 'axios';
import React,{useReducer,useEffect} from 'react';
const initial={
    loading:true,
    items:[],
    error:""
}
const reduce =(state,action) =>{
    switch(action.type){
        case "FETCHED":
            return({
                loading:false,
                items:action.data,
                error:""

            })
        case "ERROR":
            return({
                loading:false,
                items:[],
                error:"somthing went wrong"
            })
        default:
          return state
    }
}
function Reducer(){
    const [items,dispatch] =useReducer(reduce,initial);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                dispatch({type:"FETCHED",data:res.data})
            })
            .catch(err=>{
                dispatch({type:"ERROR"})
            })
    })
    return( 
        <div>
            {items.loading ? "loading": items.items.map(item=><div key={item.id}>{item.title}</div>)}
        </div>
    )
}
export default Reducer