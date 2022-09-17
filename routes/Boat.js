const router = require('express').Router();

let Boat = require('../models/boatModel');

//adding boat
router.route('/').get((req, res) => {
    Boat.find()
        .then(Boat => res.json(Boat))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) => {
    const Capacity = Number(req.body.Capacity);
    const Type = req.body.Type;
    const Cost = Number(req.body.Cost);
    const Description = req.body.Description; 
  
    const newBoat = new Boat({
      Capacity,
      Type,
      Cost,
      Description,
    });
    newBoat.save()
    .then(() => res.json('boat added !'))
    .catch (err => res.status(400).json('Error: ' + err))
});

//delete boat-------------------------------------------------------------------------------------------
  router.route('/delete/:id').delete((req, res) => {
    Boat.findByIdAndDelete(req.params.id)
      .then(() => res.json('Boat Deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  //update boat details----------------------------------------------------------------------------------
  // router.route('/update/:id').post((req, res) => {
  //   Boat.findById(req.params.id)
  //     .then(Boat => {
  //       Boat.Capacity = Number(req.body.Capacity);
  //       Boat.Type = req.body.Type;
  //       Boat.Cost = Number(req.body.Cost);
  //       Boat.Description = req.body.Description;
  
  //       Boat.save()
  //         .then(() => res.json('Boat updated!'))
  //         .catch(err => res.status(400).json('Error: ' + err));
  //     })
  //     .catch(err => res.status(400).json('Error: ' + err));
  // });








//  recently 
// -----------------------------------------------------
  // router.route("/update/:id").put(async(req,res)=>{

  //   let boatId= req.params.boatId;
  //   const{Capacity,Type,Cost,Description}= req.body; 

  //   const updateBoat={
  //       Capacity,
  //       Type,
  //       Cost,
  //       Description,
    
  //     }

  //   const update=  await Boat.findByIdAndUpdate(boatId,updateBoat)
  //   .then(()=>{
  //       res.status(200).send({status:"Boat newly updated"})
  //   }).catch((error)=>{
  //       console.log(error);
  //       res.status(500).send({status:"Task Not Completed"});
  //   })
    //
    //
//













  //update specific id----------------------------------------------------------------------------------------------------
  // router.route("/get/:boatId").get(async(req,res)=>{
  //   try{
  //       let boatId = req.params.boatId;
  //   const Data =await Boat.findById(boatId)
  //           .then((Data)=>{
  //               res.status(200).send({status:"boat fetch",Data})

  //   }).catch((error)=>{
  //       console.log(error);
  //       res.status(500).send({status:"error with get user",error:error});
  //   })
  //   }
  //   catch(error){
  //       console.log(error);
  //       res.status(500).send({status:"error with get user",error:error});
  //   }

    


// });

  
  module.exports = router;