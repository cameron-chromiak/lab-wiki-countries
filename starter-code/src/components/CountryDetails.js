import React, { Component } from 'react';
import CountriesData from '../countries.json'

class Countries extends Component{

  state = {
    countries: CountriesData
  };


  render(){
    return( this.state.countries.map((item, key) =>{
      return(
        <div key={key}>
            <li>{item.name.common}</li>
        </div>
      )
    })

    )
  }
}

export default Countries
