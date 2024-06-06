import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteDetails from './NoteDetails';
import Navbar from './Navbar'
const Home = () => {
  const [vale, setVale] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('http://localhost:5000/notes',
        const storedval = localStorage.getItem("usernamesfor");
        const response = await axios.get(`http://localhost:5000/notesuser/${storedval}`,
         {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const users = response.data;
       // console.log(response.data);
        setVale(users);
        // console.log("abcd", users);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData(); 
  }, []); 
  //  console.log(vale)
  return (
    
    <div>
      <Navbar/>
    <div className='grid grid-cols-3 ml-5'>
      {vale.map((a) => (
        <NoteDetails id={a._id} name={a.notesname} message={a.notesmessage} />
      ))}
     
    </div>
    </div>
  );
}

export default Home;



// import React from 'react'
// import axios from 'axios'
// import { useState } from 'react';
// import NoteDetails from './NoteDetails';
// const Home = () => {
//   const [vale, setVale] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/notes', {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const  users  = response.data;
//       console.log(response.data);
//       setVale(users);
//       console.log("abcd",users)
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };
  
//   return (
//     <div>
      
//       {/* {vale.map((a)=>{
//        return <NoteDetails name={a.notesname} message={a.notesmessage}/>
//       })} */}

//     </div>
//   )
// }

// export default Home
