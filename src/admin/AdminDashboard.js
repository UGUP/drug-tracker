import React from 'react';

import AdminMenu from './AdminMenu';
import ManufacturerList from './ManufacturerList';
import DistributorList from './DistributorList';
import TransporterList from './TransporterList';
import RetailerList from './RetailerList';

class AdminDashboard extends React.Component {

   constructor(props) {
      super();
      this.state = {
         selectmenu: 'manufacturer'
      }
      this.selectMenu = this.selectMenu.bind(this);
   }

   selectMenu(value) {
      console.log("Select Menu updates")
      this.setState({
         selectmenu: value
      })
   }

   render() {
      return (
         <div style={{display: 'flex'}}>
            <div style={{ width: "30%"}}>
               <AdminMenu selectMenu={this.selectMenu}/>
            </div>
            <div style={{ width: "70%" }}>
               {(() => {
                  switch (this.state.selectmenu) {
                     case 'manufacturer':
                        return (<ManufacturerList/>)
                     case 'distributor':
                        return (<DistributorList/>)
                     case 'transporter':
                        return (<TransporterList/>)
                     case 'retailer':
                        return (<RetailerList/>)
                     default:
                        return (<ManufacturerList/>)
                  }
               })()}
            </div>
         </div>
      )
   }

}
export default AdminDashboard;