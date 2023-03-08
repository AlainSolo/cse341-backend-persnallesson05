module.exports = (mongoose) => {
  const presidentData = mongoose.Schema({
    name: {
      type: String
    },
    familyName: {
      type: String
    },
    rang: {
      type: String
    },
    party: {
      type: String
    },
    electedDate: {
      type: String
    },
    hobbies: {
      type: String
    },
   
   
  })

  return mongoose.model('president', presidentData);
};
