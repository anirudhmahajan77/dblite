import React, { Component } from 'react'
import styles from "../Stylesheets/Table.module.css"
export class Table extends Component {
    render() {
        return (
            <>
                <table className={styles.dataTable}>
                    <tr className={styles.header}>
                        {
                            this.props.columns.map((column, index) => {
                                return <th>{column}</th>
                            })
                        }
                    </tr>
                    
                </table>
            </>
        )
    }
}

export default Table