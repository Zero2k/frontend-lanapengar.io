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
import { Form, Input, Button } from 'semantic-ui-react';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class FormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeText = (e, { name, value }) =>
    this.setState({ ...this.state, [name]: value });

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  };

  submit = async () => {
    if (this.state.editorState) {
      const contentState = this.state.editorState.getCurrentContent();
      const contentJSON = JSON.stringify(convertToRaw(contentState));

      const values = {
        title: this.state.title,
        page: this.state.page,
        content: contentJSON
      };
      this.props.submit(values);
    } else {
      console.log("Editor can't be empty");
    }
  };

  render() {
    const { title, page, editorState } = this.state;
    return (
      <div>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              defaultValue={title}
              onChange={this.onChangeText}
              name="title"
              label="Section title"
              placeholder="Title"
            />
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              defaultValue={page}
              onChange={this.onChangeText}
              name="page"
              label="Section page"
              placeholder="Page"
            />
          </Form.Group>
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Save"
            onClick={this.submit}
          />
        </Form>
      </div>
    );
  }
}

export default FormSection;
