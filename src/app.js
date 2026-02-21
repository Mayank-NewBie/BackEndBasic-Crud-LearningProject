const express= require('express')
const noteModel=require('./models/note.model')


const app=express()
app.use(express.json())


//Post/notes => Create a Note
app.post('/note',async function(req,res){
  const data=req.body
  await noteModel.create({
    title:data.title,
    description:data.description
  })

  res.status(201).json({
    message:'Note Created Successfull'
  })
})

//Get/notes => Find and Display a note
app.get('/note',async function(req,res){
  const notes=await noteModel.find()

  res.status(200).json({
    message:'Notes Fetched Successfully',
    notes:notes
  })
})

//Delete/notes => delete a note using id 
app.delete('/note/:id', async function(req,res){
  const id=req.params.id
  const deletedNote=await noteModel.findOneAndDelete({
    _id:id
  })

  res.status(200).json({
    message:'Note Deleted Successfully',
    deletedNote:deletedNote
  })
})

//Patch/notes => Update a note using id
app.patch('/note/:id',async function(req,res){
  const id=req.params.id
  const description=req.body.description
  const updateNote= await noteModel.findOneAndUpdate({
    _id:id
  },{
    description:description
  })

  res.status(200).json({
    message:"Note Changed Successful",
    updateNote:updateNote
  })
})


module.exports=app