import { GraphQLObjectType } from 'graphql';
import {
  fromGlobalId,
  globalIdField,
} from 'graphql-relay';
import ReadingList from './ReadingList';

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'ReadingList') {
      return ReadingList.findById(id);
    }
    return null;
  },
  /* eslint-disable no-use-before-define */
  (obj) => {
    if (obj instanceof ReadingList) {
      return GraphQLReadingList;
    }
    return null;
  },
  /* eslint-enable no-use-before-define */
);

const GraphQLReadingList = new GraphQLObjectType({
  name: 'ReadingList',
  fields: {
    id: globalIdField('ReadingList'),
  },
});
