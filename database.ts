const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.hgslm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri);
