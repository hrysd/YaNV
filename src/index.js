import React from 'react';
import ReactDOM from 'react-dom';

import {CompositeDecorator, Editor, EditorState} from 'draft-js';
import {headingStarategy, handleHeading} from './strategies'

const compositeDecorator = new CompositeDecorator([
  {
    strategy: headingStarategy,
    component: handleHeading
  }
]);

class MyEditor extends React.Component {
  constructor(props) {
    super(props);

    this.focus = () => this.refs.editor.focus();
    this.state = {editorState: EditorState.createEmpty(compositeDecorator)};
    this.onChange = (editorState) => this.setState({editorState});
  }

  styles() {
    return {
      fontFamily: '\'Helvetica\', sans-serif',
      cursor: 'text',
      margin: '50px 30px'
    };
  }

  render() {
    return (
      <div style={this.styles()} onClick={this.focus}>
        <Editor editorState={this.state.editorState} onChange={this.onChange} placeholder='Enter something' ref='editor'/>
      </div>
    )
  }
}

ReactDOM.render(
  <MyEditor />,
  document.getElementById('app')
);
