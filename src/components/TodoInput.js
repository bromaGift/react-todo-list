import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props
       
        return (
            <div className="card card-body my-4">
               <form onSubmit={handleSubmit}>
                    <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-info text-white">
                            <i className="fas fa-edit" />
                        </div>
                    </div>
                    <input type="text" className="form-control text-capitalize" placeholder="add a todo item"
                        value={item} onChange={handleChange}
                 />
                    </div>
                    <button type="submit"
                     className={
                         editItem ? "btn btn-block btn-success mt-3 text-capitalize" :
                         "btn btn-block btn-info text-capitalize mt-3"
                     }>
                    {editItem ? 'edit item' : 'add item'}
                    </button>
               </form>
            </div>
        )
    }
}
