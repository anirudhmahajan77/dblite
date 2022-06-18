import React, { Component } from 'react'
import customers from "../DataSource/customers.json";
import orders from "../DataSource/orders.json";
import ViewTableDesc from './ViewTableDesc';

export class DataDesc extends Component {
  render() {
    return (
      <div>
        <div>
            <ViewTableDesc name="Customers" data={customers}/>
        </div>        

        <div>
            <ViewTableDesc  name="Orders" data={orders}/>
        </div>
      </div>
    )
  }
}

export default DataDesc