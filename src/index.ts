import { ApolloServer } from 'apollo-server-express';
import dataSources from './dataSources';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const apollo = new ApolloServer({ typeDefs, resolvers, dataSources });

import express from 'express';
import compression from 'compression';
const app = express();
const PORT = process.env.PORT || 8080;


app.use(compression());
app.use(express.static(__dirname + '/frontend'));

apollo.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`ready on http://localhost:${PORT}`);
});
