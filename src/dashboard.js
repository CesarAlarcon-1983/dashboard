import React from "react";
import Header from './components/header/header';
import Heading from './components/heading/heading';
import Sidebar from './components/sidebar/sidebar';
import EventHeaderPanel from './components/event-header/event-header';
import RegistrationsPanel from './components/registrations-panel/registrations-panel';
import './dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      UserResponse: {
        name: '',
      },
      
      EventResponse: {
        logo: 'https://picsum.photos/id/237/200/300',
        title: '1st Annual Business Marthmaker Houston',
        location: 'Houston, TX',
        date:  '02/14/20',
        participants: {
          buyers: 120,
          suppliers: 55,
          multilatterals: 13,
          others: 150,
        },
        day: '5/04/2020',

      }
    };
  }

  render() {
      return(
        <div className="dashboard">
          <Header
            name={this.state.UserResponse.name.length > 0 ? this.state.UserResponse.name : 'Karla'}
          />
          <div className="dashboard__heading-container">
            <Heading
              name={this.state.UserResponse.name.length > 0 ? this.state.UserResponse.name : 'Karla'}
            />
          </div>
          <main className="dashboard__main">
            <div className="dashboard__sidebar-container">
              <Sidebar />
            </div>           
            <div className="dashboard__panels-container">
              <div className={"dashboard__panels-top"}>
                <EventHeaderPanel data = {this.state.EventResponse}/>
              </div>
              <div className={"dashboard__panels-bottom"}>
                <div className={"dashboard__panel"}>
                  <RegistrationsPanel data = {this.state.EventResponse}/>
                </div>
                <div className={"dashboard__panel"}>
                </div>
                <div className={"dashboard__panel"}>
                </div>
              </div>
            </div>
          </main>
        </div>
      );
  }
}

export default Dashboard;