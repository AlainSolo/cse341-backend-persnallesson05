const db = require('../models');
const President = db.president;

exports.create = (req, res) => {
  // Validate request
 if (!req.body.username || !req.body.password) {
    res.status(400).send({ message: 'Content can not be empty!' });
   return;
  }

  const user = new President(req.body);
  user
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
  President.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

exports.getPresident = (req, res) => {
  const presidentId = req.params.presidentId;
  President.find({ presidentId: presidentId })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

 // Update a President by the id in the request
 exports.updatePresident = (req, res) => {
  if (!req.body) {     
    return res.status(400).send({     
       message: 'Data to update can not be empty!',
    });
   }

  const presidentId = req.params.presidentId;

  President.findByIdAndUpdate(presidentId, req.body, { useFindAndModify: false })     
  .then((data) => {
      if (!data) {
        res.status(404).send({          
          message: `Cannot update president with id=${presidentId}. Maybe President was not found!`,     
         })      
        } else res.send({ message: 'President was updated successfully.' });
    })    .catch((err) => {      
      res.status(500).send({        
        message: 'Error updating President with id=' + presidentId,      
    });    
  }); 
};




exports.deletePresident = (req, res) => {
  const presidentId = req.params.presidentId;
   President.findByIdAndRemove(presidentId)
    .then((data) => {
       if (!data) {
                 res.status(404).send({
          message: `Cannot delete Presindt with id=${id}. Maybe Temple was not found!`,
         });       } else {
        res.send({
          message: 'President was deleted successfully!',
        });       }     })     .catch((err) => {       res.status(500).send({
         message: 'Could not delete President with id=' + id,
      });
     });
 };
