import React, { Component } from 'react';
import CountriesData from '../countries.json'

class Countries extends Component{

  state = {
    countries: CountriesData
  };


  render(){
    return( this.state.countries.map((item, key) =>{
      return(
        <div className='col-xs-5 col-md-2' key={key}>
        <li className='list-group-item list-group-item-action active mb-1'><Link to='/countries'>{item.name.common}</Link></li>
        </div>
      )
    })
    )
  }
}

export default Countries
