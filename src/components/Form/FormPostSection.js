import React from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { stateToHTML } from 'draft-js-export-html';
import { Form, Input, Button, Dropdown } from 'semantic-ui-react';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { categories } from '../../utils/categories';

class FormSection extends React.Component {
  constructor(props) {
    super(props);
    const { data = {} } = props;
    this.state = {
      title: '',
      category: '',
      description: '',
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
      const html = stateToHTML(contentState);

      const values = {
        id: this.state.id,
        title: this.state.title,
        category: this.state.category,
        description: this.state.description,
        content: contentJSON,
        html
      };
      this.props.submit(values);
      console.log(values);
    } else {
      console.log("Editor can't be empty");
    }
  };

  render() {
    const {
      title, category, description, content
    } = this.state;
    const { existDescription } = this.props;
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
              label="Title"
              placeholder="Title"
            />
            <Form.Field
              control={Dropdown}
              onChange={this.onChangeText}
              placeholder="Select category"
              closeOnBlur={false}
              label="Category"
              selection
              defaultValue={category}
              options={categories}
              name="category"
            />
          </Form.Group>
          {existDescription && (
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              defaultValue={description}
              onChange={this.onChangeText}
              name="description"
              label="Description"
              placeholder="Description"
            />
          )}
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
