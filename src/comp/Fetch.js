import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Fetch() {
    const [items,setItems]=useState([]);
    const [loader,setLoader]=useState(true);
    const [error,setError]=useState("");
    useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log(res.data)
            setLoader(false);
            setError("");
            setItems(res.data)
        })
        .catch(err=>{
            setLoader(false);
            setError("somthing went wrong");
            setItems([]);
        })
},[])
    return (
        <div>
            {loader ? "LOADING" : items.map(item=>(
                <div key={item.id}>{item.title}</div>
            ))}
            {error ? error : null}
        </div>
    )
}

export default Fetch
