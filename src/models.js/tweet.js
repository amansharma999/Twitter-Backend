const mongoose = require('mongoose');


const tweetSchema = new mongoose.schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,//this is the type of the id of the referenced document 
        ref: 'Comment' //ref is the model name of the referenced document
    }]
}, {timestamps: true});

tweetSchema.virtual('contentWithEmail').get(function process(){
    return `${this.content} \nCreated by: ${this.userEmail}`;
});


const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;