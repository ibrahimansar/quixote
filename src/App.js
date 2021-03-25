import React, {useState} from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [details, setDetails] = useState({
    uid:' ',
    name:' ',
    mobile_number:' ',
    age:' '        
  });

  const handleChange=(e)=>{
      setDetails( {
          ...details,
          [e.target.name]:e.target.value} )
  }

  const handleSubmit=(e)=>{        
            
      alert("Successfully Submitted");
      axios.post('http://localhost:3001/users/' ,{details})      
      e.preventDefault()
    
  }
  return (
    <div className="App">
      <h1>Enter some values</h1>
    <form onSubmit={handleSubmit} >
      <div>                    
            <input  type="text" name="uid" placeholder="Id" onChange={handleChange}></input>                        
      </div>  

      <div>                    
            <input type="text" name="name" placeholder="Name" onChange={handleChange}></input>                        
      </div>  
      
      <div>
            <input type="text" name="mobile_number" placeholder="Mobile Number" onChange={handleChange}></input>                      
             
      </div>  
      <div>
            <input type="text" name="age" placeholder="Age" onChange={handleChange}></input>                    
      </div>  
        <input type = "submit" value = "Submit" />
    </form>
    </div>
  );
}

export default App;
