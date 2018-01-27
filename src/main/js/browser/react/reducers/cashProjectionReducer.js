import { GET_CASH_PROJECTION, LOAD_CASH_PROJECTION } from '../constants';

const initState = { }

const cashProjectionReducer = (state = initState, action) => {

	switch( action.type ){
		case GET_CASH_PROJECTION:
			return Object.assign({}, state)
			
		case LOAD_CASH_PROJECTION:
//			console.log('..............holdings Reducer, action.holdings', action.holdings)
			return Object.assign({}, state, { rows: action.cashProjection })
	}
	return state;
}

export default cashProjectionReducer;