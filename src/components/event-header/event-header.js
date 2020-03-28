
import React from 'react';
import Board from '../board/board';
import AccountCircleIcon from '@material-ui/icons/AccountCircleOutlined';
import './event-header.scss';

class EventHeader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            targetted: 'heartbeat',
            eventData: this.props.EventData,
        }
    }

    componentDidMount() {
        // this.setState({eventData: })
    }

    // daysBarUpdater() {
    //     const today = new Date;
    //     const daysRamaining = today.getDate();
    //     console.log(daysRamaining);
    // }

    render() {
        return(
            <Board>
                <div className={"event-header"}>
                    <div className={"event-header__heading"}>
                        <div className={"event-header__logo"}>
                            <img src={this.state.eventData.logo} alt={"logo"}></img>
                        </div>
                        <div className={"event-header__information"}>
                            <h2 className={"event-header__title"}>{this.state.eventData.title}</h2>
                            <div className={"event-header__location"}>{this.state.eventData.location}</div>
                        </div>
                    </div>
                    <div className={"event-header__participants"}>
                        <div className={"event-header__participants-count"}>
                            <div className={"event-header__participants-icon"}>
                                <AccountCircleIcon />
                            </div>
                            <div className={"event-header__participants-group"}>
                                <div className={"event-header__participants-number"}>{this.state.eventData.participants}</div>
                                <span className={"event-header__participants-text"}>{"Total Participants"}</span>
                            </div>
                        </div>
                        <div className={"event-header__remaining-days"}>
                            <div className={"event-header__remaining-days__bar"}></div>
                            <div className={"event-header__remaining-days__title"}>{"Time Until Event"}</div>
                            <div className={"event-header__remaining-days__days"}>{"5d"}</div>

                        </div>
                    </div>
                </div>
            </Board>
        );
    }
}

export default EventHeader;