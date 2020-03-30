import React from "react";
import Header from './components/header/header';
import Heading from './components/heading/heading';
import Sidebar from './components/sidebar/sidebar';
import EventHeaderPanel from './components/event-header/event-header';
import RegistrationsPanel from './components/registrations-panel/registrations-panel';
import MeetingsPanel from './components/meetings-panel/meetings-panel';
import MeetingsUtilizationPanel from './components/meetings-utilization-panel/meetings-utilization-panel';
import './dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      UserResponse: {
        name: '',
      },
      
      EventResponse: {
        title: '1st Annual Business Marthmaker Houston',
        location: 'Houston, TX',
        date:  '02/14/20',
        participants: [
          {
            type: "buyers",
            quantity: 120,
            isRegistrationOpen: false,
            isScheduleOpen: false
          },
          {
            type: "suppliers",
            quantity: 55,
            isRegistrationOpen: false,
            isScheduleOpen: false
          },
          {
            type: "multilatterals",
            quantity: 13,
            isRegistrationOpen: false,
            isScheduleOpen: false
          },
          {
            type: "others",
            quantity: 150,
            isRegistrationOpen: false,
            isScheduleOpen: false
          },
        ],
        day: '5/04/2020',
      }
    };

    this.toggleRegistration = this.toggleRegistration.bind(this);
    this.toggleSchedule = this.toggleSchedule.bind(this);
  }

  toggleRegistration(participantType) {
    const { participants } = this.state.EventResponse;
    const selectedGroupIndex = participants.findIndex(participant => participant.type === participantType);
    const newState = Object.assign({}, this.state);
    
    newState.EventResponse.participants[selectedGroupIndex].isRegistrationOpen = !participants[selectedGroupIndex].isRegistrationOpen;

    this.setState(newState);
  }

  toggleSchedule(participantType) {
    const { participants } = this.state.EventResponse;
    const selectedGroupIndex = participants.findIndex(participant => participant.type === participantType);
    const newState = Object.assign({}, this.state);
    
    newState.EventResponse.participants[selectedGroupIndex].isScheduleOpen = !participants[selectedGroupIndex].isScheduleOpen;

    this.setState(newState);
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
                <EventHeaderPanel data={this.state.EventResponse}/>
              </div>
              <div className={"dashboard__panels-bottom"}>
                <div className={"dashboard__panel"}>
                  <RegistrationsPanel data={this.state.EventResponse} onToggleRegistration={this.toggleRegistration}/>
                </div>
                <div className={"dashboard__panel"}>
                  <MeetingsPanel data={this.state.EventResponse} onToggleSchedule={this.toggleSchedule}/>
                </div>
                <div className={"dashboard__panel"}>
                  <MeetingsUtilizationPanel />
                </div>
              </div>
            </div>
          </main>
        </div>
      );
  }
}

export default Dashboard;