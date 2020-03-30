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

  calculateTotalParticipants(participants) {
    const participantsQuantity = participants.map(participant => participant.quantity);
  
    return participantsQuantity.reduce((a, b) => a + b);
  }

  getParticipantsGroups(participants) {
    return (participants.map(participant => ({type: participant.type})));
  }

  render() {
    const { data, onToggleSchedule } = this.props;
    const totalParticipants = this.calculateTotalParticipants(data.participants)

    return(
      <Board>
        <div className={"meetings-panel"}>
          <div className={"meetings-panel__heading-group"}>
            <div className={"meetings-panel__heading"}>{"Meetings"}</div>
            <div className={"meetings-panel__status"}>Increase of <span>+11.1%</span> in last 7 days</div>
          </div>
          <div className={"meetings-panel__content"}>
            <div className={"meetings-panel__participants"}>
              <div className={"meetings-panel__approved-participants"}>
                <div className={"meetings-panel__approved-participants-number"}>{totalParticipants}</div>
                <div className={"meetings-panel__approved-participants-label"}>{"Confirmed"}</div>
              </div>
              <div className={"meetings-panel__pending-participants"}>
                <div className={"meetings-panel__pending-participants-number"}>{"150"}</div>
                <div className={"meetings-panel__pending-participants-label"}>{"Pending"}</div>
              </div>
            </div>
            <div className={"meetings-panel__participants-details"}>
              <ToggleItems
                participants={this.getParticipantsGroups(data.participants)}
                heading={"Ability to schedule"}
                type={"meetings"}
                onToggle={onToggleSchedule}
              />
            </div>
          </div>
        </div>
      </Board>
    );
  }
}

export default MeetingPanel;