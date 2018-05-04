import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addReminder } from '../actions'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      text: ''
    }
  }
  
  addReminder() {
    this.props.addReminder(this.state.text)
  }

  rendReminders() {
    const { reminders } = this.props
    return (
      reminders.map(reminder => {
        return (
          <div key={reminder.id} className="mdui-card mdui-m-t-2">
            <div className="mdui-card-content">
              <p>{ reminder.text }</p>
              <p>time</p>
            </div>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div className="mdui-container">
        <div className="mdui-col-sm-6 mdui-col-xs-12">
          <div className="mdui-typo">
            <h1>h1 标题 heading</h1>
          </div>
          <div className="mdui-textfield">
            <input 
              className="mdui-textfield-input" 
              type="text" 
              placeholder="User Name" 
              defaultValue={ this.state.text }
              onChange={ (event) => this.setState({text: event.target.value}) }/>
          </div>
          <button 
            className="mdui-btn mdui-btn-raised mdui-ripple mdui-color-deep-purple"
            onClick={ () => this.addReminder() }>
            Button
          </button>
          { this.rendReminders() }
        </div>
        
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    reminders: state
  }
}


export default connect(mapStateToProps, {addReminder})(App);
