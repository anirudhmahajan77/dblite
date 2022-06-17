import React, { Component } from 'react'
import CodeEditor from './CodeEditor'
import styles from '../Stylesheets/Body.module.css'

export class Body extends Component {
  render() {
    return (
      <div className={styles.bodyContainer}>
        <div className={styles.leftContainer}>
            <div>
                <p>Input</p>
                <div>
                    <p>Reset</p>
                    <p>Run</p>
                    <p>Save Queries</p>
                </div>
            </div>
            <CodeEditor />
        </div>
        <div className={styles.rightContainer}>
            <p>Hello</p>
        </div>
      </div>
    )
  }
}

export default Body