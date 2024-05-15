import React from "react";
import { useState } from "react";

function Form(){
    
   const handleClick = async(e) =>{ 
      e.preventDefault();
      const data = {
        name: name,
        email: email,
        address: address,
        number : number
      }

      try{
          const response = await fetch('https://dummy.restaplexample.com/api/vi/create',{
              method: 'POST',
              headers: {
                  'Content-Type' : 'application/json'
              },
             body: JSON.stringify(data)
          });
      }
      catch(error){
          console.error('error:',error);
      }
      
  }
    const[name , setName]=useState();
    const[email , setEmail]=useState();
    const[address , setAddress]=useState();
    const[number , setNumber]=useState(); 

    const[nameError,setNameError] = useState(false);
    const[emailError,setEmailError] = useState(false);
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const[addressError,setAddressError] = useState(false);
    const[numberError,setNumberError] = useState(false);

    const handleName = (e) =>{
      let name = e.target.value;
      if(name.length<3)
         {
           setNameError(true);
         }
         else{
            setNameError(false);
         }
     setName(e.target.value);
     console.log(e.target.value,'value');
    };

    console.log(name,'name');

   const handleEmail = (e) =>{
      let email = e.target.value;
      if(!email.match(emailRegex))
      {
         setEmailError(true);

      }
      else{
         setEmailError(false);
      }
    setEmail(e.target.value);
    console.log(e.target.value,'value');
   };

   console.log(email,'email');
   

   const handleAddress = (e) =>{
      let address = e.target.value;
      if(address.length<3)
         {
           setAddressError(true);
         }
         else{
            setAddressError(false);
         }
    setAddress(e.target.value);
    console.log(e.target.value,'value');
   };

   console.log(address,'address');


   const handleNumber = (e) =>{
      let number = e.target.value;
      if(number.length<9)
         {
           setNumberError(true);
         }
         else
         {
            setNumberError(false);
         }
    setNumber(e.target.value);
    console.log(e.target.value,'value');
   };

   console.log(number,'number');

   
   const handleClear = (e) =>{
      e.preventDefault();
      setName('');
      setEmail('');
      setAddress('');
      setNumber('');
     };
  
     
     console.log(name,'name');
     console.log(email,'email');
     console.log(address,'address');
     console.log(number,'number');

     

        return(
        <div className="form">
        <h1>My Form</h1>
      <div class = "form-box">
       
      <label>Name:<br></br>
        <input onChange = {handleName} type="text"  value = {name} required />
       
      </label>
      
      {nameError ? <span style={{color: "red"}}>Name Length must be greater than two characters</span> : ""}

      <br></br>

      <label>E-Mail:<br></br>  
         <input onChange = {handleEmail}  type="email" name="email" value = {email} required/> 
         </label>
      {emailError ? <span style={{color: "red"}}>Invalid Email</span> : ""}
       
         <br></br>
         <label>Address:<br></br>
        <input  onChange = {handleAddress} type="text2"  value  = {address}/>
      
      </label>
      {addressError ? <span style={{color: "red"}}>Address Length must be greater than two characters</span> : ""}
      <br></br> 

         
         <label for="phone">Phone Number:<br></br>
         
         <input  onChange = {handleNumber} type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value = {number}></input>
        
         </label>
         {numberError ? <span style={{color: "red"}}>Number Length must be greater than 8 digits</span> : ""}
   
     <br></br>
     <br></br>
     <button class = "button1" type = "submit " value = "Submit" onClick={handleClick} >Submit</button>
     <button class = "button2" onClick = {handleClear}>Clear</button>
     </div>
        </div>
        )

}

export default Form;