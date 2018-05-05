import React, { Component } from 'react'
import DrawerNav from './DrawerNav'

class Header extends Component {
  openNav = () => {
    console.log(333)
  }

  render() {
    return (
      <React.Fragment>
        <div className="mdui-appbar header">
          <div className="mdui-toolbar mdui-color-deep-purple">
            <a className="mdui-btn mdui-btn-icon"><i className="mdui-icon material-icons" mdui-drawer="{target: '#left-drawer'}" onClick={ this.openNav }>menu</i></a>
            <a className="mdui-typo-title">Title</a>
            <div className="mdui-toolbar-spacer"></div>
            <a className="mdui-btn mdui-btn-icon"><i className="mdui-icon material-icons">search</i></a>
            <a className="mdui-btn mdui-btn-icon"><i className="mdui-icon material-icons">refresh</i></a>
            <a className="mdui-btn mdui-btn-icon"><i className="mdui-icon material-icons">more_vert</i></a>
          </div>
        </div>
        <DrawerNav openNav={this.openNav} />
      </React.Fragment>
    )
  }
}
export default Header