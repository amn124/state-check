import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A brief bio about John Doe.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg',
        profession: 'Musician',
      },
      show: false,
      mountTime: new Date(),
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.forceUpdate(); // Force update to re-render and display the updated time
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div className="profile-container">
        <h1 style={{ color: 'green' }}>MUSICIAN PORTFOLIO</h1>
        <button className="toggle-button" onClick={this.toggleShow}>
          Toggle Profile
        </button>

        {show && (
          <div>
            <h2 style={{ color: 'blue' }}>{person.fullName}</h2>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{person.bio}</p>
            <img src={person.imgSrc} alt="Person" style={{ maxWidth: '100%' }} />
            <p style={{ color: 'red', fontSize: '20px', fontWeight: 'bold' }}>
              Profession: {person.profession}
            </p>
          </div>
        )}

        <p style={{ fontSize: '24px', color: 'purple' }}>
          Time since mount: {Math.floor((new Date() - mountTime) / 1000)} seconds
        </p>
      </div>
    );
  }
}

export default App;





