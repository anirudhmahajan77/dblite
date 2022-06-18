import React, { Component } from 'react'
import "../Stylesheets/Table.css";
import customers from "../DataSource/customers.json"
import orders from "../DataSource/orders.json";
import { CSVLink } from "react-csv";
import { FiArrowDownCircle } from "react-icons/fi";

export class Table extends Component {
    render() {
        let data = [];
        if (this.props.run && this.props.queryToRun === 0) {
            data = customers;
        }
        if (this.props.run && this.props.queryToRun === 1) {
            for (let i = 0; i < 5; i++) {
                data.push(orders[i]);
            }
        }
        if (this.props.run && this.props.queryToRun === 2) {
            for (let i = 0; i < orders.length; i++) {
                if (orders[i].employeeID === 4) {
                    data.push(orders[i]);
                }
            }
        }
        if (this.props.run && this.props.queryToRun === 3) {
            data = [
                {
                    "customerID": "ALFKI",
                    "companyName": "Alfreds Futterkiste",
                    "contactName": "Maria Anders",
                    "contactTitle": "Sales Representative",
                    "address": "Obere Str. 57",
                    "city": "Berlin",
                    "region": "NULL",
                    "postalCode": 12209,
                    "country": "Germany",
                    "phone": "030-0074321",
                    "fax": "030-0076545"
                }
            ]
        }

        let result, tablename;
        if (this.props.queryToRun === 0 || this.props.queryToRun === 3) {
            tablename = <div className='tableData'>
            <p className="tableName">Result From Orders</p>
            <CSVLink data={data}
              filename="AnirudhMahajan.csv"
              className='downloadIcon'
              >
                <FiArrowDownCircle/></CSVLink>
        </div>;
            result = <table>
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key, index) => {
                            return <th key={index}>{key}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.customerID}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td>{item.address}</td>
                            <td>{item.city}</td>
                            <td>{item.region}</td>
                            <td>{item.postalCode}</td>
                            <td>{item.country}</td>
                            <td>{item.phone}</td>
                            <td>{item.fax}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        } else {
            tablename = <div className='tableData'>
            <p className="tableName">Result From Orders</p>
            <CSVLink data={data}
              filename="AnirudhMahajan.csv"
              className='downloadIcon'
              >
                <FiArrowDownCircle/></CSVLink>
        </div>;
            result = <table>
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key, index) => {
                            return <th key={index}>{key}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.orderID}</td>
                            <td>{item.customerID}</td>
                            <td>{item.employeeID}</td>
                            <td>{item.orderDate}</td>
                            <td>{item.requiredDate}</td>
                            <td>{item.shippedDate}</td>
                            <td>{item.shipVia}</td>
                            <td>{item.freight}</td>
                            <td>{item.shipName}</td>
                            <td>{item.shipAddress}</td>
                            <td>{item.shipCity}</td>
                            <td>{item.shipRegion}</td>
                            <td>{item.shipPostalCode}</td>
                            <td>{item.shipCountry}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        }
        return (
            <div>
                {tablename}
                {result}
            </div>
        )
    }
}

export default Table