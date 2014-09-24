/**
 * @jsx React.DOM
 */
 'use strict';

var React         = require('react/addons');

var Helpers       = require('../utils/Helpers');

var cx            = React.addons.classSet;

var AudioControlBar = React.createClass({

  getDefaultProps: function() {
    return {
      currentTime: 0,
      duration: 0
    };
  },

  renderTimePassed: function() {
    var timePassed = this.props.currentAudio.currentTime;
    var formattedTimePassed = Helpers.formatSecondsAsTime(timePassed);

    return (
      <span className="time-passed">{formattedTimePassed}</span>
    );
  },

  renderTimeLeft: function() {
    var timeLeft = this.props.duration - this.props.currentAudio.currentTime;
    var formattedTimeLeft = Helpers.formatSecondsAsTime(timeLeft);

    return (
      <span className="time-left">{formattedTimeLeft}</span>
    );
  },

  renderProgressFill: function() {
    var fillValue = this.props.currentTime/this.props.duration;

    return {
      'background': '-webkit-gradient(linear, left top, right top, color-stop(' + fillValue + ',rgba(255,255,255,1)), color-stop(' + fillValue + ',rgba(255,255,255,0)))'
    };

    // $slider.css('background', '-moz-linear-gradient(top,  rgba(255,255,255,1) ' + fillValue + ', rgba(255,255,255,0) ' + fillValue + ')')
    // .css('background', '-webkit-gradient(linear, left top, right top, color-stop(' + fillValue + ',rgba(255,255,255,1)), color-stop(' + fillValue + ',rgba(255,255,255,0)))')
    // .css('background', '-webkit-linear-gradient(top,  rgba(255,255,255,1) ' + fillValue + ',rgba(255,255,255,0) ' + fillValue + ')')
    // .css('background', '-o-linear-gradient(top,  rgba(255,255,255,1) ' + fillValue + ',rgba(255,255,255,0) ' + fillValue + ')')
    // .css('background', '-ms-linear-gradient(top,  rgba(255,255,255,1) ' + fillValue + ',rgba(255,255,255,0) ' + fillValue + ')');
  },

  renderVolumeFill: function() {
    var fillValue = this.props.volume/1;

    return {
      'background': '-webkit-gradient(linear, left top, right top, color-stop(' + fillValue + ',rgba(255,255,255,1)), color-stop(' + fillValue + ',rgba(255,255,255,0)))'
    };
  },

  updateProgress: function(evt) {
    var newTime = evt.target.value;

    this.props.updateProgress(newTime);
  },

  updateVolume: function(evt) {
    var newVolume = evt.target.value;

    this.props.updateVolume(newVolume);
  },

  render: function() {
    var playPauseClasses = cx({
      'fa': true,
      'fa-pause': !this.props.currentAudio.paused,
      'fa-play': this.props.currentAudio.paused
    });
    var repeatClasses = cx({
      'fa': true,
      'fa-refresh': true,
      'active': this.props.repeat
    });
    var shuffleClasses = cx({
      'fa': true,
      'fa-random': true,
      'active': this.props.shuffle
    });

    return (
      <div className="control-bar">

        <div className="playback-container">
          <div className="backward-container">
            <i className="fa fa-backward" onClick={this.props.lastTrack}></i>
          </div>
          <div className="play-pause-container">
            <i className={playPauseClasses} onClick={this.props.togglePlay}></i>
          </div>
          <div className="forward-container">
            <i className="fa fa-forward" onClick={this.props.nextTrack}></i>
          </div>
        </div>

        <div className="scrubber-container">
          {this.renderTimePassed()}
          <input ref="seek"
                 name="seek"
                 className="seek-scrubber"
                 style={this.renderProgressFill()}
                 type="range"
                 value={this.props.currentAudio.currentTime}
                 max={this.props.duration}
                 onChange={this.updateProgress} />
          {this.renderTimeLeft()}
        </div>

        <div className="globals-container">
          <div className="volume-container">
            <i className="fa fa-volume-up"></i>
            <input ref="volume"
                   name="volume"
                   className="volume-scrubber"
                   style={this.renderVolumeFill()}
                   type="range"
                   value={this.props.volume}
                   max="1"
                   step="0.1"
                   onChange={this.updateVolume} />
          </div>
          <div className="repeat-container">
            <i className={repeatClasses} onClick={this.props.toggleRepeat}></i>
          </div>
          <div className="shuffle-container">
            <i className={shuffleClasses} onClick={this.props.toggleShuffle}></i>
          </div>
        </div>

      </div>
    );
  }

});

module.exports = AudioControlBar;