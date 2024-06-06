import { Route,Routes } from "react-router-dom";
import CreateCard1 from "./components/CreateCard1";
// import Navbar from "./components/Navbar";
import NoteDetails from "./components/NoteDetails";

import Home from "./components/Home";
import Login from "./components/Login";
import UpdateUser from "./components/UpdateUser";
import Register from "./components/Register";

function App() {
 
  return (
    <div >
      {/* <Navbar></Navbar> */}
      <Routes>
      <Route path='/home' element={<Home/>}></Route>
        <Route path='/add' element={<CreateCard1 ></CreateCard1>}></Route>
        <Route path='/note' element={<NoteDetails ></NoteDetails>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;


// import { Route,Routes } from 'react-router-dom';
// // import Button from './components/Button';
// import About from './components/About';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import CreateCard1 from './components/CreateCard1';
// import NoteDetails from './components/NoteDetails';

// function App() {
//   return (
//     <div >
//       <Navbar/>
//       <Routes>
//         <Route path="/about" element={<About/>}></Route>
//         <Route path="/home" element={<Home/>}></Route>
//         <Route path="/add" element={<CreateCard1/>}></Route>
//         <Route path="/note" element={<NoteDetails/>}></Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;
