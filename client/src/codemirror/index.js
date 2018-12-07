import React, { Component } from 'react';
import codemirror from 'codemirror';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';

class Editor extends Component {
  componentDidMount = () => {
    this.codeMirror = codemirror(this.editor, {
      mode: 'markdown'
    });
  };
  ref = React.createRef();
  render = () => (
    <div>
      <div ref={self => this.editor = self} />
    </div>
  );
}

export default Editor;