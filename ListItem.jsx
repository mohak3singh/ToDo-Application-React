import React from 'react';

function ListItem(props){
    return(
        <li className="all-list" key={props.index}>
        <span>{props.taskVal}</span>
        <button className="list-btn" onClick={() => {
            props.removeTask(props.taskVal);
        }}>X</button>
        </li>
    );
}
export default ListItem;