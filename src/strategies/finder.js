export function findBlockContent(regex, contentBlock, callback) {
  let start;

  const text = contentBlock.getText();
  const matches = regex.exec(text);

  if (matches) {
    start = matches.index;
    callback(start, start + matches[0].length);
  }
}

export function findInlineContent(regex, contentBlock, callback) {
  let matches, start;

  const text = contentBlock.getText();

  while ((matches = regex.exec(text)) !== null) {
    start = matches.index;
    callback(start, start + matches[0].length);
  }
}

