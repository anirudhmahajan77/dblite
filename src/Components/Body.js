import React, { Component } from 'react'
import CodeEditor from './CodeEditor'
import styles from '../Stylesheets/Body.module.css';
import { FiSave, FiRefreshCcw, FiUpload, FiZap } from "react-icons/fi";
import Tabs from './Tabs';

export class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: "select * from customers;",
            queryToSet:0,
            run: false,
            dummyQueries: [
                {
                    query: "select * from customers;",
                    id: 0,
                },
                {
                    query: "select * from orders limit 5;",
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
            dummyResult:[
                 {
                    id:1,
                    result: [
                        {
                          "orderID": 10248,
                          "customerID": "VINET",
                          "employeeID": 5,
                          "orderDate": "1996-07-04 00:00:00.000",
                          "requiredDate": "1996-08-01 00:00:00.000",
                          "shippedDate": "1996-07-16 00:00:00.000",
                          "shipVia": 3,
                          "freight": 32.38,
                          "shipName": "Vins et alcools Chevalier",
                          "shipAddress": "59 rue de l'Abbaye",
                          "shipCity": "Reims",
                          "shipRegion": "NULL",
                          "shipPostalCode": 51100,
                          "shipCountry": "France"
                        },
                        {
                          "orderID": 10249,
                          "customerID": "TOMSP",
                          "employeeID": 6,
                          "orderDate": "1996-07-05 00:00:00.000",
                          "requiredDate": "1996-08-16 00:00:00.000",
                          "shippedDate": "1996-07-10 00:00:00.000",
                          "shipVia": 1,
                          "freight": 11.61,
                          "shipName": "Toms Spezialitäten",
                          "shipAddress": "Luisenstr. 48",
                          "shipCity": "Münster",
                          "shipRegion": "NULL",
                          "shipPostalCode": 44087,
                          "shipCountry": "Germany"
                        },
                        {
                          "orderID": 10250,
                          "customerID": "HANAR",
                          "employeeID": 4,
                          "orderDate": "1996-07-08 00:00:00.000",
                          "requiredDate": "1996-08-05 00:00:00.000",
                          "shippedDate": "1996-07-12 00:00:00.000",
                          "shipVia": 2,
                          "freight": 65.83,
                          "shipName": "Hanari Carnes",
                          "shipAddress": "Rua do Paço 67",
                          "shipCity": "Rio de Janeiro",
                          "shipRegion": "RJ",
                          "shipPostalCode": "05454-876",
                          "shipCountry": "Brazil"
                        },
                        {
                          "orderID": 10251,
                          "customerID": "VICTE",
                          "employeeID": 3,
                          "orderDate": "1996-07-08 00:00:00.000",
                          "requiredDate": "1996-08-05 00:00:00.000",
                          "shippedDate": "1996-07-15 00:00:00.000",
                          "shipVia": 1,
                          "freight": 41.34,
                          "shipName": "Victuailles en stock",
                          "shipAddress": "2 rue du Commerce",
                          "shipCity": "Lyon",
                          "shipRegion": "NULL",
                          "shipPostalCode": 69004,
                          "shipCountry": "France"
                        },
                        {
                          "orderID": 10252,
                          "customerID": "SUPRD",
                          "employeeID": 4,
                          "orderDate": "1996-07-09 00:00:00.000",
                          "requiredDate": "1996-08-06 00:00:00.000",
                          "shippedDate": "1996-07-11 00:00:00.000",
                          "shipVia": 2,
                          "freight": 51.3,
                          "shipName": "Suprêmes délices",
                          "shipAddress": "Boulevard Tirou 255",
                          "shipCity": "Charleroi",
                          "shipRegion": "NULL",
                          "shipPostalCode": "B-6000",
                          "shipCountry": "Belgium"
                        }]
                 },
                 {
                    id: 2,
                    result: []
                 },
                 {
                    id: 3,
                 }
                  
            ],
            queryToRun: 0,
        }
    }

    setQuery = (queryValue) => {
        this.setState({
            query: this.state.dummyQueries[queryValue].query,
            queryToSet: queryValue,
        })
    }

    updateQuery = (newQuery) => {
        this.setState({ query: newQuery })
    }

    resetQuery = () => {
        this.setState({ query: "select * from customers;", queryToRun: 1, run: false })
    }

    runQuery=() => {
        this.setState({ run: true, queryToRun: this.state.queryToSet })
    }

    uploadQuery = e => {
        if (e !== undefined) {
            var file = e.target.files[0];
            const reader = new FileReader();
            if (file !== null && file.size > 0) {
                reader.readAsText(file);
                reader.onload = () => {
                    this.setState({ query: reader.result, queryToRun: 1 })
                }
            } else {
                reader.onerror = () => {
                    alert("Something went wrong on our end :( Try After some time!");
                }
            }
        }
    }

    downloadQueries = () => {
        const element = document.createElement('a');
        const file = new Blob([this.state.query], { type: 'text/plain;charset=utf-8' });
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
                            <p onClick={this.resetQuery} className={styles.resetQuery}><FiRefreshCcw /></p>
                            <p onClick={this.runQuery} className={styles.runQuery}><FiZap /></p>
                            <label className={styles.uploadQuery}>
                                <input className={styles.uploadFix} type="file" onChange={(e) => this.uploadQuery(e)} />
                                <FiUpload />
                            </label>
                            <p className={styles.saveQuery} onClick={this.downloadQueries}><FiSave /></p>
                        </div>
                    </div>
                    <CodeEditor updateQuery={this.updateQuery} query={this.state.query} />
                    <div>
                        <p className={styles.queryTitle}>Available Queries</p>
                        {this.state.dummyQueries.map((query, index) => {
                            return (
                                <div onClick={() => this.setQuery(query.id)} className={styles.dummyQuery} key={index}>
                                    <p>{query.query}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <Tabs run={this.state.run} queryToRun={this.state.queryToRun} />
                </div>
            </div>
        )
    }
}

export default Body