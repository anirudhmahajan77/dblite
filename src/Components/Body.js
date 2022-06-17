import React, { Component } from 'react'
import CodeEditor from './CodeEditor'
import styles from '../Stylesheets/Body.module.css';
import { FiSave, FiRefreshCcw } from "react-icons/fi";
import { AiOutlineThunderbolt } from "react-icons/ai";

export class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query:"select * from customers;",
            dummyQueries: [
                {
                    query: "select * from customers;",
                    id: 0,
                },
                {
                    query: "select * from orders;",
                    id: 1,
                },
                {
                    query: "select * from orders where employeeID = 4;",
                    id: 2,
                },
                {
                    query: 'select * from customers where contactName = "Maria Anders";',
                    id: 3,
                },
            ],
            queryToRun: 1,
        }
    }

    setQuery = (queryValue) => {
        this.setState({
            query: this.state.dummyQueries[queryValue].query,
            queryToRun: queryValue,})
    }

    updateQuery = (newQuery) => {
        this.setState({query: newQuery})
    }

    resetQuery = () => {
        this.setState({query: "select * from customers;", queryToRun: 1})
    }

    downloadQueries = () => {
        const element = document.createElement('a');
        const file = new Blob([this.state.query], {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = "queries.sql";
        element.click();
    }

  render() {
    return (
      <div className={styles.bodyContainer}>
        <div className={styles.leftContainer}>
            <div className={styles.inputContainer}>
                <p className={styles.inputTitle}>Input</p>
                <div className={styles.control}>
                    <p onClick={this.resetQuery} className={styles.resetQuery}><FiRefreshCcw/></p>
                    <p className={styles.runQuery}><AiOutlineThunderbolt/></p>
                    <p className={styles.saveQuery} onClick={this.downloadQueries}><FiSave/></p>
                </div>
            </div>
            <CodeEditor updateQuery={this.updateQuery} query = {this.state.query} />
            <div>
                <p className={styles.queryTitle}>Available Queries</p>
                {this.state.dummyQueries.map((query, index) => {
                    return (
                        <div onClick={()=>this.setQuery(query.id)} className={styles.dummyQuery} key={index}>
                            <p>{query.query}</p>
                            </div>
                    )
                })}
            </div>
        </div>
        <div className={styles.rightContainer}>
            <p>Output</p>
        </div>
      </div>
    )
  }
}

export default Body