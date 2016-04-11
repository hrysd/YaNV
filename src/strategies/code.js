import React from 'react';

import {findInlineContent} from './finder';

const CODE_REGEX = /`([\s\S]*?[^`])`/g;

const Code = {
  strategy: function(contentBlock, callback) {
    findInlineContent(CODE_REGEX, contentBlock, callback);
  },

  component: function(props) {
    return <code {...props}>{props.children}</code>;
  }
}

export { Code };
