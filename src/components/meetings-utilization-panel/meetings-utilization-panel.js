import React from 'react';
import Board from '../board/board';
import Scale from '../scale/scale';
import './meetings-utilization-panel.scss';

class MeetingsUtilizationPanel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return(
      <Board>
        <div className={"meetings-utilization-panel"}>
          <div className={"meetings-utilization-panel__heading-group"}>
            <div className={"meetings-utilization-panel__heading"}>{"Meetings Utilization"}</div>
          </div>
          <div className={"meetings-utilization-panel__content"}>
            <Scale />
          </div>
        </div>
      </Board>
    );
  }
}

export default MeetingsUtilizationPanel;