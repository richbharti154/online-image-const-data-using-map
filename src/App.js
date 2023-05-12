import React from "react";
import "./style.css";

export default function App() {
  const data1=[
    
      {
        
        id: 1, 
        imageSrc: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTExNjUzNHx8ZW58MHx8fHw%3D&w=1000&q=80',
       }
    
  ]
  return (
    <div >
      {data1.map((ele)=><p key={ele.id}><img src={ele.imageSrc} alt={`Image ${ele.id}`} style={{width:'10%',height:'10vh'}}/></p>)}
    </div>
  );
}
