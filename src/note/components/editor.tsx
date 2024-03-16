import {
  Editor,
  EditorState,
  ContentState,
  RichUtils,
  DraftEditorCommand,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { Component, ReactNode } from "react";

import "../css/editor.css";

interface NoteEditorComponentProps {
  noteContent: string;
}

interface NoteEditorState {
  editorState: EditorState;
}

class NoteEditor extends Component<NoteEditorComponentProps, NoteEditorState> {
  constructor(props: any) {
    super(props);

    var noteContent = this.props.noteContent;
    var contentState;

    if (noteContent !== null && typeof noteContent !== undefined) {
      contentState = ContentState.createFromText(noteContent);
    }

    this.state = {
      editorState:
        contentState !== null && contentState !== undefined
          ? EditorState.createWithContent(contentState)
          : EditorState.createEmpty(),
    };
  }

  componentDidUpdate(prevProps: Readonly<NoteEditorComponentProps>): void {
    if (this.props.noteContent !== prevProps.noteContent) {
      var newContent = ContentState.createFromText(
        this.props.noteContent || " "
      );
      this.setState({
        editorState: EditorState.createWithContent(newContent),
      });
    }
  }

  handelChange = (newState: EditorState) => {
    this.setState({ editorState: newState });
  };

  keyCommand = (keyCommand: DraftEditorCommand) => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      keyCommand
    );
    if (newState) {
      this.handelChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  onUnderlineClick = () => {
    this.handelChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  };

  onBoldClick = () => {
    this.handelChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "BOLD")
    );
  };

  onItalicClick = () => {
    this.handelChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  };

  render(): ReactNode {
    return (
      <div className="p-4 sm:ml-64 flex flex-row min-h-screen justify-center ">
        <div className="editorContainer">
          <button onClick={this.onUnderlineClick}>U</button>
          <button onClick={this.onBoldClick}>
            <b>B</b>
          </button>
          <button onClick={this.onItalicClick}>
            <em>I</em>
          </button>
          <div className="editors">
            <Editor
              editorState={this.state.editorState}
              handleKeyCommand={this.keyCommand}
              onChange={this.handelChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NoteEditor;
