import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { loadCashProjection } from '../action-creators/cashProjectionAction';
import ContentContainer from './ContentContainer';
import store from '../store';
import reactDataGrid from '../packages/react-data-grid';
import reactDataGridAddons from '../packages/react-data-grid-addons';


const ReactDOM = require('react-dom');

const Promise = require('es6-promise-promise');


class App extends Component{
	constructor( props ){
		super( props );
	}

	componentDidMount() {
		store.dispatch( loadCashProjection() );
	}
	
	render(){
     
		return(
			<div className="container-fluid">
				<Nav />
				<div style={ { marginTop: '70px' }}>
					<div className="row">
						<div className="col-sm-10">
							<ContentContainer/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default App;

//			<table>
//				<tbody>
//					<tr>
//						<th>Date</th>
//						<th>Desc 1</th>
//						<th>Desc 2</th>
//						<th>LASDTF</th>
//						<th>LATFINSI</th>
//						<th>LATFHY</th>
//						<th>LASDHYM</th>
//						<th>NTL</th>
//						<th>LAAMTTF</th>
//						<th>CA</th>
//						<th>NY</th>
//						<th>NJ</th>
//					</tr>
//					{projectedCashes}
//				</tbody>
//			</table>


//			<tr>
//				<td>{this.props.projectedCash.date}</td>
//				<td>{this.props.projectedCash.desc1}</td>
//				<td>{this.props.projectedCash.desc2}</td>
//				<td>{this.props.projectedCash.lasdtf}</td>
//				<td>{this.props.projectedCash.latfinsi}</td>
//				<td>{this.props.projectedCash.latfhy}</td>
//				<td>{this.props.projectedCash.lasdhym}</td>
//				<td>{this.props.projectedCash.ntl}</td>
//				<td>{this.props.projectedCash.laamttf}</td>
//				<td>{this.props.projectedCash.ca}</td>
//				<td>{this.props.projectedCash.ny}</td>
//				<td>{this.props.projectedCash.nj}</td>
//			</tr>



