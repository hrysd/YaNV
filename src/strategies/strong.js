import React from 'react';

const STRONG_REGEX = /__([\s\S]*?[^_])__/g;

function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

const Strong = {
  strategy: function(contentBlock, callback) {
    findWithRegex(STRONG_REGEX, contentBlock, callback);
  },

  component: function(props) {
    return <strong {...props}>{props.children}</strong>;
  }
}

export { Strong };
