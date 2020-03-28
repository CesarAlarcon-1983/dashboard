import React from 'react';
import './board.scss';

export default props => {
    return(
        <div className="board">
            { props.children }
        </div>
    );
}