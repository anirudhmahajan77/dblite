import React, { Component } from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import styles from "../Stylesheets/CodeEditor.module.css"


export class CodeEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "select * from customers;",
    }
  }

  render() {
    return (
      <AceEditor
        className={styles.editor}
        placeholder="Type Your SQL Queries Here!"
        mode="mysql"
        theme="monokai"
        name="sql_query"
        onLoad={() => { }}
        onChange={(value) => { this.setState({ query: value }) }}
        fontSize={16}
        minLines={34}
        maxLines={90}
        width="100%"
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        value={this.state.query}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }} />
    )
  }
}

export default CodeEditor