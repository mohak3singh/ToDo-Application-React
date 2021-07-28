import React from 'react';
import ListItem from './ListItem';
import './index.css';

function List(props){
    return(
        <div>
        <ul className="list-tag">
        <h2 className="heading2">All your tasks are here :-  </h2>
        {
            props.tasks.map((el,index)=>{
                return <ListItem removeTask = {props.removeTaskHandler} key={index} taskVal = {el}/>
            })
        }
        </ul>
        </div>
    );
}
export default List;