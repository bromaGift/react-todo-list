import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {title} = this.props;
        
        return (
           <li className="list-group-item text-capitalize bg-danger d-flex justify-content-between my-2">
                <h5>{title}</h5>
           </li>
        )
    }
}
