import React from 'react';
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromRaw
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class FormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  };

  submit = async () => {
    const contentState = this.state.editorState.getCurrentContent();
    const contentJSON = JSON.stringify(convertToRaw(contentState));
    this.props.submit(contentJSON);
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <button onClick={this.submit}>Save</button>
      </div>
    );
  }
}

export default FormSection;
