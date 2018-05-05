import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="mdui-bottom-nav mdui-bottom-nav-text-auto mdui-color-deep-purple footer">
        <a className="mdui-ripple mdui-ripple-white mdui-bottom-nav-active">
          <i className="mdui-icon material-icons">live_tv</i>
          <label>Movies</label>
        </a>
        <a className="mdui-ripple mdui-ripple-white">
          <i className="mdui-icon material-icons">music_note</i>
          <label>Music</label>
        </a>
        <a className="mdui-ripple mdui-ripple-white">
          <i className="mdui-icon material-icons">book</i>
          <label>Books</label>
        </a>
        <a className="mdui-ripple mdui-ripple-white">
          <i className="mdui-icon material-icons">library_books</i>
          <label>Newsstand</label>
        </a>
      </div>
    )
  }
}

export default Footer