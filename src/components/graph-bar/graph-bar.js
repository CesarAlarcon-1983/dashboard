import React from 'react';
import './graph-bar.scss';

function generateBars(data) {
  const dataKeys = Object.keys(data);
  const dataValues = Object.values(data);
  const totalParticipants = dataValues.reduce((a, b) => a + b);
  
  console.log(dataKeys);
  const bars = [];
  for(let i = 0; i < dataKeys.length; i++) {
    const barWidth = (dataValues[i]/totalParticipants) * 100;
    
    bars.push(<div className={`graph-bar__bar graph-bar__bar--${dataKeys[i]}`} style={{'width': barWidth + '%'}}></div>);
  }

  return bars;
}


const GraphBar = props => {
  return(
    <div className="graph-bar">
      {generateBars(props.participants)}

    </div>
  );
}

export default GraphBar;