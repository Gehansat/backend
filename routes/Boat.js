const router = require('express').Router();

let Boat = require('../models/boatModel');


router.route('/').get((req, res) => {
    Boat.find()
        .then(Boat => res.json(Boat))
        .catch(err => res.status(400).json('Error: '+ err));
});

//adding boat----------------------------------------------------------------------------------------
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
  router.route('/update/:id').put((req, res) => {
    Boat.findById(req.params.id)
      .then(Boat => {
        Boat.Capacity = req.body.Capacity;
        Boat.Type = req.body.Type;
        Boat.Cost = req.body.Cost ;
        Boat.Description =req.body.Description ;
  
        Boat.save()
          .then(() => res.json('Boat updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

   //getting boat by ID

router.route("/get/:id").get(async (req, res)=>{
  let userId = req.params.id;
  const boatOne = await Boat.findById(userId)
    .then((boats)=>{
      res.status(200).send({status: "Salary Sheet Fetched", boats})
    }).catch((err)=>{
          console.log(err.message);
          res.status(500).send({status: "Error with get salary sheet",error:err.message});
      
  })
})







  
  module.exports = router;