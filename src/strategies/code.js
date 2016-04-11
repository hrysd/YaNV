import React from 'react';

const CODE_REGEX = /`([\s\S]*?[^`])`/g;

function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

const Code = {
  strategy: function(contentBlock, callback) {
    findWithRegex(CODE_REGEX, contentBlock, callback);
  },

  component: function(props) {
    return <code {...props}>{props.children}</code>;
  }
}

export { Code };
