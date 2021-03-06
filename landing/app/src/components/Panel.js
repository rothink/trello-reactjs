import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards'
import { connect } from 'react-redux'
import CardActions from './../actions/CardActions'
import InputEditable from './InputEditable';

class Panel extends Component {
	static propTypes = {
		createCard: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props)
		
		this.handleCreateCard = this.handleCreateCard.bind(this)
	}

	handleCreateCard() {
		this.props.createCard()
	}

	render() {
		const { cards, panel } = this.props 
		
		return (
			<div className="col-md-3">
				<div className="panel panel-default">
					<div className="panel-heading">
						<InputEditable 
							id={ panel.id }
							edit={ panel.edit }
							text={ panel.text }
							editPanel = {this.props.editPanel}
						/>
					</div>
					<div className="panel-body">
						<Cards 
							cards={ cards }
							clickToEdit={ this.props.editCard }
							editCard ={ this.props.editCard }
							removeCard = {this.props.removeCard}
						/>
					</div>
					<div className="panel-footer">
						<button className="btn btn-primary" onClick={this.handleCreateCard}>
							<i className="ion-plus-round"></i> Card
						</button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		cards: state.cards
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        createCard: () => dispatch(CardActions.createCard('New Task')),
        editCard: (id, value) => {
			const edited = {id, edit: true}
			
			if(!value) {
				edited.edit = true
			} else {
				edited.edit = false
				edited.text = value
			}

            dispatch(CardActions.editCard(edited))
		},
		removeCard: (id) =>  {
			dispatch(CardActions.removeCard(id))
		}  
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel)