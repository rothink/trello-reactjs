import React, { Component } from 'react'

class InputEditable extends Component {
    constructor(props) {
        super(props)

        this.handleClickToEdit = this.handleClickToEdit.bind(this)
        this.handleEditCard = this.handleEditCard.bind(this)
        this.handleRemoveCard = this.handleRemoveCard.bind(this)
    }

    handleClickToEdit() {
        const {id} = this.props
        this.props.clickToEdit(id)
    }

    renderEditable() {
        return (
            <div>
                <input type="text" 
                    className="form-control" 
                    defaultValue = {this.props.text}
                    onBlur = {this.handleEditCard}
                    onKeyPress = {this.handleEditCard}
                />
            </div>
        )
    }

    handleRemoveCard(e) {
        const {id} = this.props
        this.props.removeCard(id)
    }

    handleEditCard(e) {

        if(e.type === 'keypress' && e.key !== 'Enter') {
            return;
        }

        const text = e.target.value
        const {id} = this.props

        if(text.trim().length) {
            this.props.editCard(id, text)
        }
    }

    renderText() {
        return (
            <div>
                <div className="col-xs-10 col-md-10">
                    <input type="text" 
                        className="form-control" 
                        defaultValue = {this.props.text}
                        onClick={this.handleClickToEdit}
                        readOnly
                    />
                </div>
                <div className="col-xs-2 col-md-2">
                    <i className="ion-trash-b" onClick = {this.handleRemoveCard}></i>
                </div>
            </div>
        )
    }

    render() {

        if(this.props.edit) {
            return this.renderEditable()
        }

        return this.renderText()
    }

}

export default InputEditable