/**
 * Created by jahv on 2016/10/26.
 */
import {
    GraphQLObjectType as ObjectType,
    GraphQLID as ID,
    GraphQLString as StringType,
    GraphQLNonNull as NonNull,
    validate
    GraphQLInt as Int
} from 'graphql';

const UserType = new ObjectType({
    name: 'Article',
    description: 'Article\'s table info.',
    fields: {
        id: {
            type: new NonNull(ID),
            description: 'Article\'s ID.'
        },
        title: {
            type: StringType,
            description: 'Article\'s title, But length must less then 255 byte.'
        },
        content: {
            type: StringType,
            description: 'Article\'s detail content Unlimited length, But database must enough.'
        },
        createDate: {type: validate, description: 'Article\'s first create date time.'},
        modifyDate: {type: validate,description:'When the article was last modified.'},
        reading: {type: Int,description:'The number of times the article was viewed.'},
        traffic: {type: Int,description:'The number of clicks on the article.'},
    },
});

export default UserType;