const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://herosurnameherofirstname:hero123@mymongo.twfog1l.mongodb.net/MyMongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
})

const formSchema =new mongoose.Schema({
    notesname: String,
    notesmessage: String,
  });

  const Form = mongoose.model('notes', formSchema);

  const userdetails =new mongoose.Schema({
    username: String,
    contactnumber:Number,
    password: String
  });

  const UserDetails = mongoose.model('userdetails', userdetails);

 
  app.get("/notes", async (req, res) => {
    try {
      const notes = await Form.find();
      // console.log(notes)
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.get("/getusers", async (req, res) => {
    try {
      const notes = await UserDetails.find();
      // console.log(notes)
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  app.post("/add",async (req,res)=>{
    
    // const { notesname, notesmessage } = req.body;
    // console.log(req.body);
    // const newForm = new Form({ notesname, notesmessage });
    // try {
    //   const savedForm = await newForm.save();
    //   res.status(201).json(savedForm);
    // } catch (error) {
    //   res.status(400).json({ message: error.message });
    // }
    try {
      const newUser = new Form(req.body);
      // const { notesname,notesmessage } = newUser;
  
      // const userExist = await User.findOne({ notesname,notesmessage });
      // if (userExist) {
      //   return res.status(400).json({ message: "User already exists." });
      // }
      const savedData = await newUser.save();
      // res.status(200).json(savedData);
      res.status(200).json({ message: "User created successfully." });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
})


app.post("/adduser",async (req,res)=>{
  try {
    const newUser = new UserDetails(req.body);
    // const { notesname,notesmessage } = newUser;

    // const userExist = await User.findOne({ notesname,notesmessage });
    // if (userExist) {
    //   return res.status(400).json({ message: "User already exists." });
    // }
    const savedData = await newUser.save();
    // res.status(200).json(savedData);
    res.status(200).json({ message: "User created successfully." ,savedData});
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
})

app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await Form.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});






app.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const userExist = await Form.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    const updatedData = await Form.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "User Updated successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

app.put("/update1/:id",async (req,res)=>{
  try {
    const id = req.params.id;
    console.log(id);  
    const userExist = await Form.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    const updatedData = await Form.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // res.status(200).json(updatedData);
    res.status(200).json({ message: "User Updated successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
})

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Find the form by ID and delete it
    const deletedForm = await Form.findByIdAndDelete(id);

    if (!deletedForm) {
      // If the form is not found, return a 404 error
      return res.status(404).json({ message: "Form not found" });
    }

    // Return the deleted form as the response
    res.json(deletedForm);
  } catch (error) {
    // If an error occurs, return a 500 error with the error message
    res.status(500).json({ message: error.message });
  }
});

/*
--------------------------userdetails-----------------------

*/ 
const userwithnotes =new mongoose.Schema({
  notesname: String,
  notesmessage:String,
  username: String
});

const UserWithNotes = mongoose.model('usersnotes', userwithnotes);

app.get("/userwithnotes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await UserWithNotes.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

app.get("/notesuser/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const userExist = await UserWithNotes.find({ username: username });
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});


app.get("/gettingusers/:username",async(req,res)=>{
  try {
    const usernames = req.params.username;
    const userExist = await UserDetails.findOne({username:usernames})
    if(!userExist)
      {
        return res.status(404).json({message:"user not found"})
      }
      res.status(200).json(userExist)
  } catch (error) {
    res.status(500).json({ errorMessage: error.message })
  }
})


app.get("/noteuser", async (req, res) => {
  try {
    const notes = await UserWithNotes.find();
    // console.log(notes)
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



app.post("/updateusernotes",async(req,res)=>{
  try {
    const newUser = new UserWithNotes(req.body);
   
    const savedData = await newUser.save();
    // res.status(200).json(savedData);
    res.status(200).json({ message: "User created successfully." ,savedData});
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
})


app.put("/usernoteupdate/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const userExist = await UserWithNotes.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    const updatedData = await UserWithNotes.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "User Updated successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});


app.delete("/deletenotes/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Find the form by ID and delete it
    const deletedForm = await UserWithNotes.findByIdAndDelete(id);

    if (!deletedForm) {
      // If the form is not found, return a 404 error
      return res.status(404).json({ message: "Form not found" });
    }

    // Return the deleted form as the response
    res.json(deletedForm);
  } catch (error) {
    // If an error occurs, return a 500 error with the error message
    res.status(500).json({ message: error.message });
  }
});


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})



