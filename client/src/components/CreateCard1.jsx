import { useState } from "react";
import axios from 'axios';
import React from 'react';
import { useNavigate } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
const CreateCard1 = () => {
    const navigate = useNavigate();
    //const notify = () => toast("Wow so easy!");
    const   storevalues = localStorage.getItem("usernamesfor");
    const [objectname,setObjectName]=useState({
        notesname:"",
        notesmessage:'',
        username:`${storevalues}`
    });
    function update(e) {
        const {name,value}=e.target;        
        setObjectName((prev)=>{
            return {...prev,[name]:value}
        });
    }
   
    
    // let history = useHistory();
    async function printing(e){
        e.preventDefault();
        if(objectname.notesname!=="" && objectname.notesmessage!=="")
            {
        try {
            const response = await axios.post('http://localhost:5000/updateusernotes', {
            // const response = await axios.post('http://localhost:5000/add', {
                notesname: objectname.notesname,
                notesmessage: objectname.notesmessage,
                username:objectname.username
            }, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            const data = response.data;
            console.log(data);
          } catch (error) {
          
            console.error('There was an error submitting the form!', error);
          }
                navigate("/home ");
            }
        
          
    }
    return (
        <div>
            <div className="mt-10 border-2 border-blue-400 rounded-lg mx-14 bg-slate-300">
                <div className="mt-10 font-bold text-center">Notes App</div>
                <div className="mt-3 text-4xl font-bold text-center">Add your Notes</div>
                <div className="p-8">
                    <form onSubmit={printing}> 
                        <div className="flex gap-4">
                            <input onChange={update} value={objectname.notesname} type="text" name="notesname" className="block w-full px-3 py-4 mt-1 bg-white border border-black rounded-md shadow-sm placeholder-slate-400 placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Notes Name *" />
                        </div>
                        
                        <div className="mt-4">
                            <textarea onChange={update} value={objectname.notesmessage} name="notesmessage" id="text" cols="30" rows="10" className="w-full h-40 p-5 mb-10 font-semibold text-gray-800 border border-black rounded-md resize-none" placeholder="Notes*"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit"  className="px-8 py-5 text-sm font-semibold text-white bg-blue-700 rounded-lg cursor-pointer">Save your notes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateCard1;






// import { useState } from "react";
    // import React from 'react';

    // const CreateCard1 = (cardetails) => {
    //     const [title, setTitle] = useState("");
    //     const [notes, setNotes] = useState("");

    //     function update(e) {
    //         setTitle(e.target.value);
    //     }

    //     function update1(e) {
    //         setNotes(e.target.value);
    //     }

    //     console.log(title);
    //     console.log(notes);

    //     return (
    //         <div>
    //             <div className="mt-10 border-2 border-blue-400 rounded-lg mx-14">
    //                 <div className="mt-10 font-bold text-center">Notes App</div>
    //                 <div className="mt-3 text-4xl font-bold text-center">Create your Notes</div>
    //                 <div className="p-8">
    //                     <div className="flex gap-4">
    //                         <input onChange={update} value={title} type="text" name="name" className="block w-full px-3 py-4 mt-1 bg-white border border-black rounded-md shadow-sm placeholder-slate-400 placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Notes Name *" />
    //                     </div>
                        
    //                     <div className="mt-4">
    //                         <textarea onChange={update1} value={notes} name="textarea" id="text" cols="30" rows="10" className="w-full h-40 p-5 mb-10 font-semibold text-gray-800 border border-black rounded-md resize-none" placeholder="Notes*"></textarea>
    //                     </div>
    //                     <div className="text-center">
    //                         <a className="px-8 py-5 text-sm font-semibold text-white bg-blue-700 rounded-lg cursor-pointer">Save your notes</a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    // export default CreateCard1;
