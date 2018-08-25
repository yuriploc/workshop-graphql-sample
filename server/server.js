import express from 'express';
import mongoose from 'mongoose';
import expressGraphQL from 'express-graphql';
import schema from './schema';

console.log(schema);

const app = express();

mongoose.connect('mongodb://cejs:wscejs1@ds133622.mlab.com:33622/cejs-graphql');
const databaseConnection = mongoose.connection;
databaseConnection.once('open', () => console.log('Connected'));
databaseConnection.on('error', error => console.log('Error:' + error));

app.use(express.static('dist/client'));

app.use(
  '/graphql',
  expressGraphQL({
    schema: schema,
    grapiql: true
  })
);

app.listen(4000, () => {
  console.log('listening');
});
