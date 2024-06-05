import React, { Component } from 'react';
import TableComponent from './client/component/table-component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hospitalData: []
    }
  }
  componentDidMount() {
    const url = "https://services.arcgis.com/HQ0xoN0EzDPBOEci/arcgis/rest/services/Hospital/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ hospitalData: json }))
  }
  render() {
    if (this.state.hospitalData && this.state.hospitalData.features){
      const hospitals = this.state.hospitalData && this.state.hospitalData.features;
      const headers = ["Name", "Address", "Licensed Beds", "Critical Access Hospital", "Phone Number", "Website"];
      return (
        <div>
          <h1>Real Time Hospital Waiting Time Tracker</h1>
          <TableComponent 
          headers={headers}
          data={hospitals} 
          />
        </div>
      );
  
    } else {
      return null;
    }
  }
}
export default App;