/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function Navigation() {
    return (
      <MuiThemeProvider>
        <AutoComplete
            floatingLabelText="Search in this blog."
            filter={AutoComplete.fuzzyFilter}
            dataSource={['abc']}
            maxSearchResults={5}
            style={{position: 'absolute',top:0,right:0}}
        />
      </MuiThemeProvider>
  );
}

export default Navigation;
