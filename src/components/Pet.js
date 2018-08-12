import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card"
        style={{border: "1px solid #000", margin: "10px", textAlign: "center"}}>
        <div className="content">
          <h3 className="header">
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
            {this.props.pet.name}
          </h3>
          <div className="meta">
            <span className="date">...is a {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight} kg</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">
              Adopt pet
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet

//  < Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />


// {
//   id: '5c142d9e-ea45-4231-8146-cccf71c704c0',
//   type: 'dog',
//   gender: 'male',
//   age: 4,
//   weight: 1,
//   name: 'Trident',
//   isAdopted: false,
// },
