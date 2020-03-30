import React from 'react';
import Board from '../board/board';
import GraphBar from '../graph-bar/graph-bar';
import ToggleItems from '../toggle-items/toggle-items';
import './registrations-panel.scss';

class RegistrationsPanel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
  }

  calculateTotalParticipants(participants) {
    const participantsQuantity = participants.map(participant => participant.quantity);
  
    return participantsQuantity.reduce((a, b) => a + b);
  }
    
  render() {
    const { data, onToggleRegistration } = this.props;
    const totalParticipants = this.calculateTotalParticipants(data.participants)
    const participants = {
      groups: data.participants,
      total: totalParticipants
    };
    return(
      <Board>
        <div className={"registration-panel"}>
          <div className={"registration-panel__heading-group"}>
            <div className={"registrations-panel__heading"}>{"Registrations Approved"}</div>
            <span className={"registrations-panel__status"}>Increase of <strong>+11.1%</strong> in last 7 days</span>
          </div>
          <div className={"registrations-panel__content"}>
            <div className={"registrations-panel__approved-participants"}>
              <div className={"registrations-panel__approved-participants-number"}>{totalParticipants}</div>
              <div className={"registrations-panel__approved-participants-text"}>{"Total Approved Participants"}</div>
            </div>
            <div className={"registrations-panel__graph-bar"}>
              <GraphBar participants={participants} />
            </div>
            <div className={"registrations-panel__participants-details"}>
              <ToggleItems 
                participants={participants}
                heading={"Reg. Open"}
                type={"registration"}
                onToggle={onToggleRegistration}
              />
            </div>
          </div>
        </div>
      </Board>
    );
  }
}

export default RegistrationsPanel;