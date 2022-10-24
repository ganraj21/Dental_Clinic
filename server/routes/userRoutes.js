const { register, login, setAvatar, appointment, getAllUsers} = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register",register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.post("/appointment",appointment);
router.get('/allusers/:id',getAllUsers)



// const ObjectId = require('mongodb').ObjectId;

// router.get('/appointments', (req,res,next)=>{
//     req.collection.find({})
//     .toArray()
//     .then(results => res.json(results))
//     .catch(error => res.send(error));
// })

// router.post('/appointments',(req,res,next)=>{
//     const { appointmentDate , name, email} = req.body;
//     if(!appointmentDate || !name || !email){
//         return res.status(400).json({
//             message: 'Appointment date, name and email are required'
//         })
//     }

//     const payload = {appointmentDate , name, email};
//     req.collection.insertOne(payload)
//     .then(result => res.json(result))
//     .catch(error => res.send(error));
// })

// router.delete('/appointment/:id',(req,res,next)=>{
//     const {id} = req.params;
//     const _id = ObjectId(id);

//     req.collection.deleteOne({_id})
//     .then(result => res.json(result))
//     .catch(error => res.send(error))
// })

module.exports = router;