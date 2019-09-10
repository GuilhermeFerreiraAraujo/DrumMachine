import React from 'react';
import './App.scss';
import DrumPad from './Components/DrumPad'


const audios = [{
  id: 'Q',
  description: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  id: 'W',
  description: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  id: 'E',
  description: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  id: 'A',
  description: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  id: 'S',
  description: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  id: 'D',
  description: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  id: 'Z',
  description: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  id: 'X',
  description: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  id: 'C',
  description: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    };

    this.callback = this.callback.bind(this);
  }

  callback(name){
    this.setState({
      display: name
    });
  }

  render() {

    const drumPads = audios.map(x => <DrumPad audioKey={x.id} 
                    callback={this.callback} 
                    audioUrl={x.url}
                    description={x.description}/> );

    return (
      <div className="App">
       
        <div id='drum-machine'>
          <div className='flexContainer'>

            <div className='displayContainer'>
              <p id="display">{this.state.display}</p>
            </div>

            <div className='padContainer'>
              {drumPads}
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
