import * as ActionTypes from './../constants/ActionTypes'


export default function cards(state = [], action) {
	switch(action.type) {
		case ActionTypes.CREATE_CARD:
			return [
				...state,
				action.payload
			]
        break;
        case ActionTypes.EDIT_CARD:

            return state.map(card => {
                const {id} = action.payload
                if(id === card.id) {
                    return Object.assign({}, card, action.payload)
                }
                return card
            });
		break;
		case ActionTypes.REMOVE_CARD:
		const {id} = action.payload
		console.info(id,' ID');
		return state.filter(card => id !== card.id)
	break;
		default:
			return state
		
	}
}