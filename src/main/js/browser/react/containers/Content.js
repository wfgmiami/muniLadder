import React from 'react';
import PropTypes from 'prop-types';
import ReactDataGrid from '../packages/react-data-grid';
import update from 'immutability-helper';
import numeral from 'numeral';
const {dataFields} = require('../dataFields.js');

export default class Content extends React.Component{

	constructor( props ){
		super();
		this.state = {
			rows: [],
			columns:dataFields,
		};

		this.rowGetter = this.rowGetter.bind(this);
		this.getSize = this.getSize.bind(this);
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.rows != this.state.rows){
			const rows = nextProps.rows;
			this.setState({ rows })
		}
	}
	
	getSize(){
		return this.getRows().length;
	}

	getRows(){
		return Selectors.getRows(this.state);
	}

	getRowsAt(index){
		let rows = this.getRows();
		return rows[index];
	}

	rowGetter(index){
		const rows = this.getRows();
		return rows[index];
	}
  
	render(){
		console.log('......in Content state, props', this.state, this.props);
		return(
	  		<ReactDataGrid
	  		columns={this.state.columns}
	  		rowGetter={this.rowGetter}
			rowsCount={this.getSize()}
			minHeight={650} />
		)
	}

}