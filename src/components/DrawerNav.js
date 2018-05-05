import React, { Component } from 'react'

class DrawerNav extends Component {
  openNavFun () {
    this.props.openNav()
  }
  render() {
    return (
      <div className="mdui-drawer" id="left-drawer">
        <ul className="mdui-list">
          <li className="mdui-list-item mdui-ripple">
            <i className="mdui-list-item-icon mdui-icon material-icons">move_to_inbox</i>
            <div className="mdui-list-item-content">Inbox</div>
          </li>
          <li className="mdui-list-item mdui-ripple">
            <i className="mdui-list-item-icon mdui-icon material-icons">star</i>
            <div className="mdui-list-item-content">Starred</div>
          </li>
          <li className="mdui-list-item mdui-ripple">
            <i className="mdui-list-item-icon mdui-icon material-icons">send</i>
            <div className="mdui-list-item-content">Sent mail</div>
          </li>
          <li className="mdui-list-item mdui-ripple">
            <i className="mdui-list-item-icon mdui-icon material-icons">drafts</i>
            <div className="mdui-list-item-content">Drafts</div>
          </li>
          <li className="mdui-subheader">Subheader</li>
          <li className="mdui-list-item mdui-ripple">
            <i className="mdui-list-item-icon mdui-icon material-icons">email</i>
            <div className="mdui-list-item-content">All mail</div>
          </li>
          <li className="mdui-list-item mdui-ripple">
            <i className="mdui-list-item-icon mdui-icon material-icons">delete</i>
            <div className="mdui-list-item-content">Trash</div>
          </li>
          <li className="mdui-list-item mdui-ripple">
            <i className="mdui-list-item-icon mdui-icon material-icons">error</i>
            <div className="mdui-list-item-content">Spam</div>
          </li>
        </ul>
      </div>
    )
  }
}

export default DrawerNav


