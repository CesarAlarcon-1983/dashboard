import React from 'react';
import Board from '../board/board';
import './registrations-panel.scss';

class RegistrationsPanel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      eventData: this.props.EventData,
    }
  }

  componentDidMount() {
  }

  render() {
    return(
      <Board>
        <div className={"registration-panel"}>
          <div className={"registrations-panel__heading"}></div>
          <div className={"registrations-panel__content"}>
            <div className={"registrations-panel__status"}>Increase of <span>+11.1%</span> in last 7 days</div>
            <div className={"registrations-panel__approved-participants"}>
              <div className={"registrations-panel__approved-participants-number"}>{this.state.eventData.registrationsApproved}</div>
              <div className={"registrations-panel__approved-participants-text"}>{"Total Approved Participants"}</div>
              <div className={"registrations-panel__approved-participants-bars"}>
                <span className={"registrations-panel__approved-participants-bar"}></span>
                <span className={"registrations-panel__approved-participants-bar"}></span>
                <span className={"registrations-panel__approved-participants-bar"}></span>
                <span className={"registrations-panel__approved-participants-bar"}></span>
                <span className={"registrations-panel__approved-participants-bar"}></span>
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