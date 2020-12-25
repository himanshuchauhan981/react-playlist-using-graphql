const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema/schema');

const app = express();

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

mongoose.connect('mongodb://127.0.0.1:27017/react-playlist');
mongoose.connection.once('open', () => {
	console.log('Connected to database');
});

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
	console.log('Running on port 4000');
});
