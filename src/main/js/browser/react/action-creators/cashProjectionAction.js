import { GET_CASH_PROJECTION, LOAD_CASH_PROJECTION } from '../constants';
import { updateProposedAmount, generateRows } from '../utils';

const client = require('./client');

const createCashProjection = ( cashProjection ) => {
//	console.log('createdHoldings....', holdings)
	return {
		type: LOAD_CASH_PROJECTION,
		cashProjection
	}
}

const getCashProjection = () => {
//	console.log('createdHoldings....', holdings)
	return {
		type: GET_CASH_PROJECTION,
	}
}

const loadCashProjection = ( ) => ( dispatch ) => {
	
	client({ method: 'GET', path: '/api/projectedCashes' })
		.done(response => {
			dispatch( createCashProjection( response.entity._embedded.projectedCashes ))
	});
}

const updateCashProjection = ( updatedRowsArr, updatedData ) => ( dispatch ) => {
	dispatch( createCashProjection( updatedData ) )
}

const getRows = () => ( dispatch ) => {
	dispatch( getCashProjection() )
}

export { loadCashProjection, updateCashProjection, getRows };