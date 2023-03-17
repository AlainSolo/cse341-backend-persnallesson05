const db = require('../models');
const Apostle = db.apostle;

exports.create = (req, res) => {
  // Validate request
//  if (!req.body.username || !req.body.password) {
//     res.status(400).send({ message: 'Content can not be empty!' });
//    return;
//   }

  const apostle = new Apostle(req.body);
  apostle
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the user.'
      });
    });
};

exports.getAll = (req, res) => {
  Apostle.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

exports.getApostle = (req, res) => {
  const presidentId = req.params.presidentId;
  Apostle.find({ apostleId: apostleId })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

 // Update an Apostle by the id in the request
 exports.updateApostle = (req, res) => {
  if (!req.body) {     
    return res.status(400).send({     
       message: 'Data to update can not be empty!',
    });
   }

  const apostleId = req.params.apostleId;

  Apostle.findByIdAndUpdate(apostleId, req.body, { useFindAndModify: false })     
  .then((data) => {
      if (!data) {
        res.status(404).send({          
          message: `Cannot update Apostlewith id=${apostleId}. Maybe Apostle was not found!`,     
         })      
        } else res.send({ message: 'Apostle was updated successfully.' });
    })    .catch((err) => {      
      res.status(500).send({        
        message: 'Error updating Apostle with id=' + apostleId,
       });    
  }); 
};




exports.deleteApostle = (req, res) => {
  const apostleId = req.params.apostletId;
  Apostle.findByIdAndRemove(apostleId)
    .then((data) => {
       if (!data) {
                 res.status(404).send({
          message: `Cannot delete Apsostle with id=${id}. Maybe Apostle was not found!`,
         });       } else {
        res.send({
          message: 'Apostle was deleted successfully!',
        });       }     })     .catch((err) => {       res.status(500).send({
         message: 'Could not delete Apostle with id=' + id,
      });
     });
 };
