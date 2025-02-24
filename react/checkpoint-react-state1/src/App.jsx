import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personne: {
        fullName: "Lyes lizom",
        bio: "Ancien developpeur",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwyN5HVaK_ir8yTg6ZeRm5TjzddpOM3Ji1w&s",
        profession: "Grand developpeur",
      },
      showProfile: false,
      startTime: Date.now(), 
    };

    this.toggleProfile = this.toggleProfile.bind(this);
  }

  
  toggleProfile() {
    this.setState(prevState => ({
      showProfile: !prevState.showProfile,
    }));
  }


  getElapsedTime() {
    const elapsed = Math.floor((Date.now() - this.state.startTime) / 1000);
    return elapsed;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.forceUpdate(), 1000); 
  }

  componentWillUnmount() {
    clearInterval(this.timerID); 
  }

  render() {
    const { personne, showProfile } = this.state;

    return (
      <div className="App">
        <h1>WSH!!!, {personne.fullName}!</h1>

        <button onClick={this.toggleProfile}>
          {showProfile ? "Khebi l profil" : "Weri l profil"}
        </button>

        {showProfile && (
          <div className="profile">
            <img src={personne.imgSrc} alt="Bill gates" />
            <h2>{personne.profession}</h2>
            <p>{personne.bio}</p>
          </div>
        )}

        <p>Lwe9t demara 3andou: {this.getElapsedTime()} secondes.</p>
      </div>
    );
  }
}

export default App;
