import React from 'react';
import Board from '../board/board';
import GraphBar from '../graph-bar/graph-bar';
import './registrations-panel.scss';

class RegistrationsPanel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
  }

  calculateTotalParticipants(data) {
    const dataValues = Object.values(data);
    const totalParticipants = dataValues.reduce((a, b) => a + b);

    return totalParticipants;
  }

  render() {
    const { participants } = this.props.data;
    const totalParticipants = this.calculateTotalParticipants(participants)
    return(
      <Board>
        <div className={"registration-panel"}>
          <div className={"registrations-panel__heading"}></div>
          <div className={"registrations-panel__content"}>
            <div className={"registrations-panel__status"}>Increase of <span>+11.1%</span> in last 7 days</div>
            <div className={"registrations-panel__approved-participants"}>
              <div className={"registrations-panel__approved-participants-number"}>{totalParticipants}</div>
              <div className={"registrations-panel__approved-participants-text"}>{"Total Approved Participants"}</div>
              <div className={"registrations-panel__approved-participants-graph-bar"}>
                <GraphBar participants={participants} />
              </div>
            </div>
            <div className={"registrations-panel__participants-details"}></div>
          </div>
        </div>
      </Board>
    );
  }
}

export default RegistrationsPanel;