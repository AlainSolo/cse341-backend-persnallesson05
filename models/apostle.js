module.exports = (mongoose) => {
  const apostleData = mongoose.Schema({
    name: {
      type: String
    },
    familyName: {
      type: String
    },
    age: {
      type: String
    },
    birthday: {
      type: String
    },
    email: {
      type: String
    },
    
    tel: {
      type: String
    },
    
    calleddate: {
      type: String
    },
  },
  {
    collection: 'apostleproject'
  })

  return mongoose.model('apostleproject', apostleData);
}
