const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/one').then(() => {
    console.log('Connection established')
}).catch((err) => {
    console.log("Err", err);
})

//create schema
const test = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now,
    }
});

//create modal
const Test = new mongoose.model('Test', test);

// create document and insert
const createDocument = async () => {
    try {
        const reactPlaylist = new Test({
            name: 'Nodejs',
            ctype: 'Back end',
            videos: 50,
            author: 'Tapa tap',
            active: false,
        })

        const nodejsPlayList = new Test({
            name: 'Nodejs',
            ctype: 'Back end',
            videos: 50,
            author: 'Tapa tap',
            active: true,
        })

        const expressjsPlayList = new Test({
            name: 'expressjs',
            ctype: 'Back end',
            videos: 10,
            author: 'devoid',
            active: true,
        })

        const javaPlayList = new Test({
            name: 'java',
            ctype: 'Back end',
            videos: 40,
            author: 'sonu',
            active: true,
        })
        // const result = await reactPlaylist.save();
        const result = await Test.insertMany([reactPlaylist, nodejsPlayList, expressjsPlayList, javaPlayList]);//to save many
        console.log(result);

    } catch (err) {
        console.log(err);
    }
}
//  Create Document
// createDocument();

// To Get Document
const getDocument = async () => { 
    try {
        const result = await Test.find({ name: 'java' }).select({ ctype: "Back end" });
        console.log("Get Document :-", result);
    } catch (error) {
        console.log(error)
    }
}
// getDocument();

// Comparison Query Operator
const getDocumentUsingQueryOperator = async () => {
    // const result = await Test.find({ videos: { $gt: 40 } });
    // const result = await Test.find({ videos: { $eq: 40 } });
    const result = await Test.find({ videos: { $nin: [40] } });
    console.log(result);
}
getDocumentUsingQueryOperator();

