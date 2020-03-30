import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RemoveIcon from '@material-ui/icons/Remove';
import './scale.scss';

const items = [
  {
    label: "Participants that utilized most meetings slots",
    change: 800,
    percentage: 73,
  },
  {
    label: "Participants that utilized most meetings slots",
    change: -200,
    percentage: 8,
  },
  {
    label: "Participants that utilized most meetings slots",
    change: 100,
    percentage: 19,
  },
  {
    label: "Participants that utilized most meetings slots",
    change: -450,
    percentage: 27,
  }
];

function generateScaleItems(items) {
  const scaleItems = items.map((item, index) => {
    return(
      <div className={"scale"}>
        <div className={"scale__heading"}>
          <div className={"scale__label"}>{item.label}</div>
          <div className={"scale__change-wrapper"}>
            <div className={"scale__change"}>{item.change}</div>
            {item.change > 0 && <div className={item.change > 0 && "scale__arrow scale__arrow--positive"}><ArrowUpwardIcon /></div>}
            {item.change < 0 && <div className={item.change < 0 && "scale__arrow scale__arrow--negative"}><ArrowDownwardIcon /></div>}
            {item.change === 0 && <div className={item.change === 0 && "scale__arrow scale__arrow--neutral"}><RemoveIcon /></div>} 
          </div>
        </div>
        <div className={"scale__bar"}>
          <div className={"scale__bar__percentage"}>{item.percentage + "%"}</div>
          <div className={"scale__bar__wrapper"}>
            <div className={"scale__bar__progress"} style={{width: item.percentage + "%"}}></div>
            <div className={"scale__bar__track"}></div>
          </div>
        </div>
      </div>
    );
  });

  return scaleItems;
}

const Scale = props => {
  return(
    generateScaleItems(items)
  )
}

export default Scale;