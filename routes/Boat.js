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

//delete boat
  router.route('/:id').delete((req, res) => {
    Boat.findByIdAndDelete(req.params.id)
      .then(() => res.json('Boat refunded.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  //update boat details
  router.route('/update/:id').post((req, res) => {
    Boat.findById(req.params.id)
      .then(Boat => {
        Boat.Capacity = Number(req.body.Capacity);
        Boat.Type = req.body.Type;
        Boat.Cost = Number(req.body.Cost);
        Boat.Description = req.body.Description;
  
        Boat.save()
          .then(() => res.json('Boat updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;