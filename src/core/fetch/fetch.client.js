/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'whatwg-fetch';

function localFetch(url, options) {
    if (!options.headers)options.headers = {};
    options.headers.Accept = options.headers['Content-Type'] = 'application/json';
    if (!options.method)options.method = 'post';
    options.credentials = 'include';
    return self.fetch(url, options)
}

export default localFetch.bind(self);
export const Headers = self.Headers;
export const Request = self.Request;
export const Response = self.Response;
