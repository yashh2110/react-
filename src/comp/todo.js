import React,{useState} from 'react'

function Todo() {
    const [items,setItems] =useState([]);
    const [text,setText]=useState("");
    return (
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button type="button" onClick={()=>setItems([...items,{text,id:Date.now()}])}>add item</button>
            {items.map((item)=>(
                <div key={item.id}>{item.text}</div>
            ))}
        </div>
    )
}
export default Todo
