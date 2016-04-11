import React from 'react';

const HEADING_REGEX = /^(#{1,6}) ([^\n]*)/;

function findWithRegex(regex, contentBlock, callback) {
  let start;

  const text = contentBlock.getText();
  const matches = regex.exec(text);

  if (matches) {
    start = matches.index;
    callback(start, start + matches[0].length);
  }
}

const Heading = {
  strategy: function(contentBlock, callback) {
    findWithRegex(HEADING_REGEX, contentBlock, callback);
  },

  component: function(props) {
    let level          = HEADING_REGEX.exec(props.decoratedText)[1].length;
    let HeadingTagName = `h${level}`;

    return <HeadingTagName {...props}>{props.children}</HeadingTagName>;
  }
}

export { Heading };
