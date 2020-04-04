import React, {Component} from 'react';

export default function Card(props){
    return(
        <div className={props.filteredBy === props.title ? "card card--active": "card"} onClick={props.onClick} style={props.width?{width:props.width} : {width:'100%'}}>
            <h6 className="card__title">{props.title}</h6>
            <hr className="card__divider"/>
            <h2 className="card__value">{props.value}</h2>
        </div>
    )
}
