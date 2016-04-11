import React from 'react';

import {findInlineContent} from './finder';

const STRONG_REGEX = /__([\s\S]*?[^_])__/g;

const Strong = {
  strategy: function(contentBlock, callback) {
    findInlineContent(STRONG_REGEX, contentBlock, callback);
  },

  component: function(props) {
    return <strong {...props}>{props.children}</strong>;
  }
}

export { Strong };
