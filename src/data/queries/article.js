/**
 * Created by jahv on 2016/10/26.
 */
import { GraphQLList as List,GraphQLInt } from 'graphql';
import ArticleType from '../types/ArticleType';
import {Article} from '../models';

const article = {
    type: new List(ArticleType),
    args:{
        id: {
            type: GraphQLInt
        }
    },
    resolve() {
        const args = arguments[1];
        var options = {attributes: ['id', 'title','content','createDate','modifyDate','reading','traffic']};
        if(args&&args.id)options.where = {id:args.id};
        return Article.all(options);
    },
};

export default article;