import React from 'react';
import SwitchButton from '../switch-button/switch-button';
import CircleIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import './toggle-items.scss';

function generateToggleItems(props) {
  const { participants, type, onToggle } = props;
  
  console.log(participants);
  
  const formattedParticipants = participants.groups ? participants.groups : participants;

  const toggleItemStructure = formattedParticipants.map((participant, index) => {
    const participantsPercentage = Math.round((participant.quantity/participants.total)*100);
    
    return(
      <div className={"toggle-items__item"} key={index}>
        <div className={"toggle-items__item__detail"}>
          <div className={`toggle-items__item__bullet toggle-items__item__bullet--${participant.type}`}><CircleIcon /></div>
          <div className={"toggle-items__item__name"}>{participant.type}</div>
        </div>
        {participant.quantity && <div className={"toggle-items__item__statistics"}>
          <div className={"toggle-items__item__quantity"}>{participant.quantity}</div>
          <div className={"toggle-items__item__percentage"}>{participantsPercentage + "%"}</div>
        </div>}
        <div className={"toggle-items__item__switch"}>
          <SwitchButton
            checked={participant.isRegistrationOpen}
            id={type + '-' + participant.type}
            onChange={() => {onToggle(participant.type)}}
          />
        </div>
      </div>
    );
  })

  return toggleItemStructure;
}


const ToggleItems = props => {
  const { heading } = props;

  return(
    <div className="toggle-items">
      <div className="toggle-items__heading">{heading}</div>
      {generateToggleItems(props)}
    </div>
  );
}

export default ToggleItems;