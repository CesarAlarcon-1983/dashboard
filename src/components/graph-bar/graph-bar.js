import React from 'react';
import './graph-bar.scss';

function generateBars(props) {
  const { participants } = props;
  
  const bars = [];

  for(let i = 0; i < participants.groups.length; i++) {
    const barWidth = (participants.groups[i].quantity/participants.total) * 100;
    
    bars.push(<div className={`graph-bar__bar graph-bar__bar--${participants.groups[i].type}`} style={{'width': barWidth + '%'}}></div>);
  }

  return bars;
}


const GraphBar = props => {
  return(
    <div className="graph-bar">
      {generateBars(props)}

    </div>
  );
}

export default GraphBar;