
import React,{ useState,useContext} from 'react'
import Books from "./Books.json"
import {Notecontext} from './context/Context'
import "./App.css"


const App=()=>{

   const {books, setbooks}=useContext(Notecontext)
   console.log(books)
   const [load, setload]=useState(books.splice(0, 5))
   
   const LoadMore=()=>{
     const first = books.slice(load.length,load.length + 5)
      const second=  load.concat(first)
      setload(second)

   }
    
   

  return (
    <div className='app-container'>
      
        <div className="main">
          
        {load.map((c)=>{
        return(
        <div className="card text-white bg-dark mb-3">
        <div className='image'>
        <img src={`${c.thumbnailUrl}`} alt=""></img>
        </div>
        <h4> {c.title}</h4>
        <p>{c.authors}</p>
        <button>{c.pageCount}</button>

      </div>
        )
      })}
        </div>
      
      
      <div className='btn '>
      <button class="btn btn-outline-dark"onClick={() =>LoadMore()}>Load More</button>
      </div>
      </div>
      
    
     
  )
  }

export default App





  
  


