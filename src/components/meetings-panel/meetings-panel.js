import React from 'react';
import Board from '../board/board';
import ToggleItems from '../toggle-items/toggle-items';
import './meetings-panel.scss';

class MeetingPanel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
  }

  calculateTotalParticipants(data) {
    const participantsQuantityArray = []
  
    for(let i = 0; i < data.length; i++) {
        participantsQuantityArray.push(data[i].quantity);
    }
  
    const totalParticipants = participantsQuantityArray.reduce((a, b) => a + b);
  
    return totalParticipants;
  }

  getParticipantsLabels(data) {
    const keysArray = [];

    
    for(let i = 0; i < data.length; i++) {
      const key = data[i].type;
      keysArray.push(key)
    }

    return keysArray;
  }

  render() {
    const { participants } = this.props.data;
    const totalParticipants = this.calculateTotalParticipants(participants)

    return(
      <Board>
        <div className={"meetings-panel"}>
          <div className={"meetings-panel__heading"}></div>
          <div className={"meetings-panel__content"}>
            <div className={"meetings-panel__status"}>Increase of <span>+11.1%</span> in last 7 days</div>
            <div className={"meetings-panel__-participants"}>
              <div className={"meetings-panel__participants-approved"}>
                <div className={"meetings-panel__participants-approved-number"}>{totalParticipants}</div>
                <div className={"meetings-panel__participants-approved-label"}>{"Confirmed"}</div>
              </div>
              <div className={"meetings-panel__participants-pending"}>
                <div className={"meetings-panel__participants-pending-number"}>{"150"}</div>
                <div className={"meetings-panel__participants-pending-label"}>{"Pending"}</div>
              </div>
            </div>
            <div className={"meetings-panel__participants-details"}>
              <ToggleItems participants={this.getParticipantsLabels(participants)} heading={"Ability to schedule"} type={"meetings"}/>
            </div>
          </div>
        </div>
      </Board>
    );
  }
}

export default MeetingPanel;