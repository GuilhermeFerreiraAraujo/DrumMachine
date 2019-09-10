import React from 'react';

class DrumPad extends React.Component {
    
    constructor(props){
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
        this.handlerKeyDown = this.handlerKeyDown.bind(this);

        document.addEventListener('keydown', this.handlerKeyDown);

    }

    handlerKeyDown(evt){
        if (this.props.audioKey === evt.key.toUpperCase()){
            this.handlerClick();
        }
    }

    handlerClick(){
        const audio = document.getElementById(this.props.audioKey);
        audio.currentTime = 0;
        audio.play();
        this.props.callback(this.props.description.replace('-', ' '));
    }

    render() {
        return (
            <div className={'drum-pad-' + this.props.audioKey}>
                <button id={this.props.description} className="drum-pad pad-button" onClick={this.handlerClick}>{this.props.audioKey}
                <audio className="clip" id={this.props.audioKey} src={this.props.audioUrl} />

                </button>
            </div>
        );
    }
}

export default DrumPad;
