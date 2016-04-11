import React from 'react';

import {findBlockContent} from './finder'

const HEADING_REGEX = /^(#{1,6}) ([^\n]*)/;

const Heading = {
  strategy: function(contentBlock, callback) {
    findBlockContent(HEADING_REGEX, contentBlock, callback);
  },

  component: function(props) {
    let level          = HEADING_REGEX.exec(props.decoratedText)[1].length;
    let HeadingTagName = `h${level}`;

    return <HeadingTagName {...props}>{props.children}</HeadingTagName>;
  }
}

export { Heading };
