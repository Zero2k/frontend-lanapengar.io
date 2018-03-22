import React from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { Form, Input, Button } from 'semantic-ui-react';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class FormSection extends React.Component {
  constructor(props) {
    super(props);
    const { data = {} } = props;
    this.state = {
      title: '',
      page: '',
      content: EditorState.createEmpty(),
      ...data
    };

    if (!this.props.data || !this.props.data.content) {
      this.state.content = EditorState.createEmpty();
    } else {
      const { content } = this.props.data;
      this.state.content = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
    }
  }

  onEditorStateChange = (content) => {
    this.setState({
      content
    });
  };

  onChangeText = (e, { name, value }) =>
    this.setState({ ...this.state, [name]: value });

  submit = async () => {
    if (this.state.content) {
      const contentState = this.state.content.getCurrentContent();
      const contentJSON = JSON.stringify(convertToRaw(contentState));

      const values = {
        id: this.state.id,
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
    const { title, page, content } = this.state;
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
            editorState={content}
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
