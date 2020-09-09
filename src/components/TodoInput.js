import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit} = this.props
       
        return (
            <div className="card card-body my-4">
               <form onSubmit={handleSubmit}>
                    <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-warning text-white">
                            <i className="fas fa-edit" />
                        </div>
                    </div>
                    <input type="text" className="form-control text-capitalize" placeholder="add a todo item"
                        value={item} onChange={handleChange}
                 />
                    </div>
                    <button type="submit"
                     className={"btn btn-block btn-warning text-capitalize mt-3"}>
                            add item
                    </button>
               </form>
            </div>
        )
    }
}
