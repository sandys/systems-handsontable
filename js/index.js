import React from 'react';
import {render} from 'react';
import moment from 'moment';
import {default as Handsontable} from 'handsontable/handsontable';
import { Router, Route, Link, Redirect,IndexRoute } from 'react-router';


export default class Index extends React.Component {

  
componentDidMount(){
        const $hot = React.findDOMNode(this.refs.spreadsheet);
        var that = this;


            const options = {
              minSpareRows: 1,
              rowHeaders: true,
              colHeaders: true,
              contextMenu: true,
              formulas: true,
              manualColumnResize: true};
             this.hot = new Handsontable.Core($hot, options);
             this.hot.init();
  }


  render(){
     return this.props.children;
  }
}
  render(
		
		  <div>
		<div ref="spreadsheet"></div>
      <div id="done">{return moment().utc()  + "Z" } </div> ,document.querySelector('.app')
	  </div>

  );
