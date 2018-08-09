import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    // console.log(event.target.value)
    // console.log(this.state.filters.type);
    this.setState({
      filters: {
        type: event.target.value
      }
    })
    // console.log(this.state);
  }

  onFindPetsClick = () => {
    // console.log("find me da pets pls")
    // console.log(this.state.filters.type);
    if (this.state.filters.type === "cat") {
      fetch('/api/pets?type=cat')
      .then(r => r.json())
      // .then(petData => console.log(petData))
      .then(petData => this.setState({pets: petData }))
    } else if (this.state.filters.type === "dog") {
      fetch('/api/pets?type=dog')
      .then(r => r.json())
      // .then(petData => console.log(petData))
      .then(petData => this.setState({pets: petData }))
    } else if (this.state.filters.type === "micropig"){
      fetch('/api/pets?type=micropig')
      .then(r => r.json())
      // .then(petData => console.log(petData))
      .then(petData => this.setState({pets: petData }))
    } else if (this.state.filters.type === "all"){
      fetch('/api/pets')
      .then(r => r.json())
      // .then(petData => console.log(petData))
      .then(petData => this.setState({pets: petData }))
    }
  }

  onAdoptPet = (id) => {
    // console.log('i love pets! i\'m in adoptpet');
    this.state.pets.find(pet => pet.id === id).isAdopted = true
    this.setState({
      pets: this.state.pets
    })
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
