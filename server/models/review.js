const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
  clientname: {type: String, required: true},
  barbername: {type: String, required: true},
  reviewmessage: {type: String, required: true},
},
);
const Review = mongoose.model('Review', ReviewSchema);
export default Review;
