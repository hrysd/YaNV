import React from 'react';

const HEADING_REGEX = /^(#{1,6}) ([^\n]*)/;

function headingStarategy(contentBlock, callback) {
  findWithRegex(HEADING_REGEX, contentBlock, callback);
}

function findWithRegex(regex, contentBlock, callback) {
  let start;

  const text = contentBlock.getText();
  const matches = regex.exec(text);

  if (matches) {
    start = matches.index;
    callback(start, start + matches[0].length);
  }
}

function handleHeading (props) {
  let a = HEADING_REGEX.exec(props.decoratedText)[1].length
  let HeadingTagName = `h${a}`;

  console.log(a, HeadingTagName);
  return <HeadingTagName {...props}>{props.children}</HeadingTagName>;
}

export {
  headingStarategy,
  handleHeading
}
