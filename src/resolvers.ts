import { DataSources } from './dataSources';
import { IResolvers } from 'graphql-tools';

const resolvers: IResolvers<unknown, { dataSources: DataSources }> = {
  Query: {
    hello: (_, args: { name: string }) => ({ name: args.name }),
  },
  Example: {
    result: ({ name }) => `hello ${name || 'world'}`
  }
};

export default resolvers;
