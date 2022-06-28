import { createContext , useState} from "react";
import App from "../App";
import Books from "../Books.json"
 export const Notecontext = createContext(null);
 
 
 
 const Context = ({children}) => {
const[books, setbooks]=useState(Books)
console.log(books)
   return (
     
     <Notecontext.Provider value={{books, setbooks}} >
       
        
         <App/>
     </Notecontext.Provider>
     
   )
 }
 export default Context