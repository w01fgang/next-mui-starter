// @flow
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';
// $flow: this is text file
import schemaString from './mock.graphql';

const mocks = {
  PageInfo: () => ({
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: 'startCursor',
    endCursor: 'endCursor',
  }),
  User: () => ({
    id: 9287364982716489723,
    name: 'Ernest',
    surname: 'Thompson',
    companyName: 'Test company, S.R.L.',
    role: 'ADMIN',
    createdAt: '2019-11-08T06:50:17.449Z',
  }),
};

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ typeDefs: schemaString });

// Add mocks, modifies schema in place
addMockFunctionsToSchema({ schema, mocks });

export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { query, variables } = req.body;
  graphql(schema, query, variables).then((result) => {
    res.json(result);
  });
};
