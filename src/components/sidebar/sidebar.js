
import React from 'react';
import Board from '../board/board';
import MailIcon from '@material-ui/icons/MailOutline';
import NearMeIcon from '@material-ui/icons/NearMeOutlined';
import CircleIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import PencilIcon from '@material-ui/icons/CreateOutlined';
import StarIcon from '@material-ui/icons/StarBorderOutlined';
import EventIcon from '@material-ui/icons/DeleteOutlineOutlined';
import AssistantIcon from '@material-ui/icons/ErrorOutlineOutlined';
import './sidebar.scss';
import '../board/board.scss';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            targetted: 'heartbeat'
        }
    }

    targettedItem(item) {
        this.setState({ targetted: item });
    }

    render() {
        return(
            <Board>
                <div className={"sidebar"}>
                    <ul className={"sidebar__list"}>
                        <li className={this.state.targetted === 'heartbeat' ? 'sidebar__item -active' : 'sidebar__item'}
                            onClick={() => {this.targettedItem('heartbeat')}}
                        >
                            <div className={"sidebar__icon"}>
                                <MailIcon />
                            </div>
                            <span className={"sidebar__item-text"}>Event Heartbeat</span>
                        </li>
                        <li className={this.state.targetted === 'registration' ? 'sidebar__item -active' : 'sidebar__item'}
                            onClick={() => {this.targettedItem('registration')}}
                        >
                            <div className={"sidebar__icon"}>
                                <NearMeIcon />
                            </div>
                            <span className={"sidebar__item-text"}>Registrations</span>
                        </li>
                        <li className={"sidebar__item sidebar__item--subicon"}>
                            <div className={"sidebar__subicon"}>
                                <CircleIcon style={{ color: '#F5bd1f', 'font-size': '12px' }}/>
                            </div>
                            <span className={"sidebar__item-text"}>To Approve</span>
                        </li>
                        <li className={"sidebar__item sidebar__item--subicon"}>
                            <div className={"sidebar__subicon"}>
                                <CircleIcon style={{ color: '#008000', 'font-size': '12px' }}/>
                            </div>
                            <span className={"sidebar__item-text"}>Approved</span>
                        </li>
                        <li className={this.state.targetted === 'agenda' ? 'sidebar__item -active' : 'sidebar__item'}
                            onClick={() => {this.targettedItem('agenda')}}
                        >
                            <div className={"sidebar__icon"}>
                                <PencilIcon />
                            </div>
                            <span className={"sidebar__item-text"}>Agenda</span>
                        </li>
                        <li className={this.state.targetted === 'matchmaker' ? 'sidebar__item -active' : 'sidebar__item'}
                            onClick={() => {this.targettedItem('matchmaker')}}
                        >
                            <div className={"sidebar__icon"}>
                                <StarIcon />
                            </div>
                            <span className={"sidebar__item-text"}>Matchmaker</span>
                        </li>
                        <li className={this.state.targetted === 'event' ? 'sidebar__item -active' : 'sidebar__item'}
                            onClick={() => {this.targettedItem('event')}}
                        >
                            <div className={"sidebar__icon"}>
                                <EventIcon />
                            </div>
                            <span className={"sidebar__item-text"}>Event Website</span>
                        </li>
                        <li className={this.state.targetted === 'assistant' ? 'sidebar__item -active' : 'sidebar__item'}
                            onClick={() => {this.targettedItem('assistant')}}
                        >
                            <div className={"sidebar__icon"}>
                                <AssistantIcon />
                            </div>
                            <span className={"sidebar__item-text"}>Assistant</span>
                        </li>
                    </ul>
                    <a className={"sidebar__button"} href={"/"}>Go Back to Other Events</a>
                </div>
            </Board>
        );
    }
}

export default Sidebar;