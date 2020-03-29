
import React from 'react';
import Board from '../board/board';
import AccountCircleIcon from '@material-ui/icons/AccountCircleOutlined';
import './event-header.scss';

class EventHeader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
    }

    formatDate(date) {
        const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];

        const eventDate = new Date(date);
        const eventMonth = eventDate.getMonth();
        const eventDay = eventDate.getDate();
        const eventYear = eventDate.getFullYear();
        const formattedDate = `${monthNames[eventMonth + 1]} ${eventDay} '${eventYear.toString().substr(-2, 2)}`;

        return (formattedDate)
    }

    calculateTotalParticipants(data) {
        const participantsQuantityArray = []

        for(let i = 0; i < data.length; i++) {
            participantsQuantityArray.push(data[i].quantity);
        }

        const totalParticipants = participantsQuantityArray.reduce((a, b) => a + b);
    
        return totalParticipants;
    }
        
    render() {
        const { logo, title, location, date, participants } = this.props.data;

        const formattedDate = this.formatDate(date);
        const totalParticipants = this.calculateTotalParticipants(participants)

        return(
            <Board>
                <div className={"event-header"}>
                    <div className={"event-header__heading"}>
                        <div className={"event-header__logo"}>
                            <img src={logo} alt={"logo"}></img>
                        </div>
                        <div className={"event-header__information"}>
                            <h2 className={"event-header__title"}>{title}</h2>
                            <div className={"event-header__location"}>{`${location}, ${formattedDate}`}</div>
                        </div>
                    </div>
                    <div className={"event-header__participants"}>
                        <div className={"event-header__participants-count"}>
                            <div className={"event-header__participants-icon"}>
                                <AccountCircleIcon />
                            </div>
                            <div className={"event-header__participants-group"}>
                                <div className={"event-header__participants-number"}>{totalParticipants}</div>
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