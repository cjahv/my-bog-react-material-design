/**
 * Created by jahv on 2016/10/26.
 */
import {
    GraphQLObjectType as ObjectType,
    GraphQLID as ID,
    GraphQLString as StringType,
    GraphQLNonNull as NonNull,
    GraphQLInt as Int
} from 'graphql';

import Date from 'graphql-date';

const UserType = new ObjectType({
    name: 'Article',
    description: 'Article table information.',
    fields: {
        id: {type: new NonNull(ID), description: 'The id of the article.'},
        title: {type: StringType, description: 'The title of the article.'},
        content: {type: StringType, description: 'The content of the article.'},
        createDate: {type: Date, description: 'The creation time of the article.'},
        modifyDate: {type: Date, description: 'When the article was last modified.'},
        reading: {type: new NonNull(Int), description: 'The number of times the article was viewed.'},
        traffic: {type: new NonNull(Int), description: 'The number of clicks on the article.'},
    },
});

export default UserType;