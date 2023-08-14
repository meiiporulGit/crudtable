const express = require('express')
const router = express.Router()
const persons = require('./schema')


router.post('/post',async(req,res)=>{
    try{
        const postperson = await new persons(req.body)
        const saveperson = postperson.save()
        res.status(200).json('datasaved')
    }
    catch{
        if(err)throw err
    }
})

router.get('/getall',async(req,res)=>{
    try{
        const getall = await persons.find();
        res.status(200).json(getall)
    }
    catch{
        if(err)throw err
    }
})

router.get('/getbyid/:id',async(req,res)=>{
    try{
        const getbyid = await persons.findById(req.params.id);
        res.status(200).json(getbyid)
    }
    catch{
        if(err)throw err
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const update = await persons.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:req.body}            
        )
        res.json(update)
    }
    catch{
        if(err)throw err
    }
})

router.delete ('/delete/:id',async(req,res)=>{
    const del = await persons.findByIdAndDelete(req.params.id)
    res.json(del)
})

module.exports = router