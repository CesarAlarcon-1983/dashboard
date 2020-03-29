import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import './switch-button.scss';

const SwitchButton = props => {
    return(
        <div className={"switch-button"}>
            <input className={"switch-button__input"} type={"checkbox"} id={props.id} checked={props.checked}></input>
            <label className={"switch-button__label"} for={props.id} onClick={props.onChange}>
                <span className={"switch-button__status-icon switch-button__status-icon--on"}><CheckIcon /></span>
                <span className={"switch-button__status-icon switch-button__status-icon--off"}><CloseIcon /></span>
            </label>
        </div>
    );
  }
  
  export default SwitchButton;