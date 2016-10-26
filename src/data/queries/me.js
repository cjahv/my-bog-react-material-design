/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List,GraphQLInt } from 'graphql';
import UserType from '../types/UserType';
import {User} from '../models';

const me = {
    type: new List(UserType),
    args:{
        id: {
            type: GraphQLInt
        }
    },
    resolve() {
        const args = arguments[1];
        var options = {attributes: ['id', 'email']};
        if(args&&args.id)options.where = {id:args.id};
        return User.all(options);
    },
};

export default me;
