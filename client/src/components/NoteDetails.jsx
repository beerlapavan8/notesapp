import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const NoteDetails = (props) => {

  async function clicking(val)
  {
    
    try {
      const response = await axios.delete(`https://notesapp-4ia4.onrender.com/${val}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = response.data;
      
      console.log(data);
    } catch (error) {
     
      console.error('There was an error deleting the object!', error);
    }
    
    
  }
  function deletion(e)
  {
    const val = e.target.value;
    console.log(val)
    clicking(val);
  }
  return (
    <div>
      <div class="relative flex flex-col mt-6 text-gray-700 bg-slate-300 shadow-xl bg-clip-border rounded-xl w-96 text-ellipsis overflow-hidden">
          <div class="p-6">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {props.name}
            </h5>
            <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              {props.message}
            </p>
          </div>
          <div class="p-6 pt-0 ">
            <button  value = {props.id} onClick={deletion}
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button">
              Delete
            </button>
            {/* <button  value = {props.id} onClick={deletion}
              class="align-middle ml-2 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button">
              Update
            </button> */}
            <Link to= {`/update/${props.id}`}  class="align-middle ml-2 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">Update</Link>
          </div>
      </div>
    </div>
  )
}

export default NoteDetails
