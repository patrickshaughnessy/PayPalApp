import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  _toggleDrawer = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  _handleLocationChange = (location) => {
    const { changeRoute } = this.props
    changeRoute(location)
    this._toggleDrawer()
  }

  render () {
    const { open } = this.state
    return (
      <div>
        <AppBar
          title='PayPal App'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          onLeftIconButtonTouchTap={this._toggleDrawer}
        />
        <Drawer
          open={open}
          docked={false}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem
            style={{WebkitAppearance: 'none'}}
            onTouchTap={() => this._handleLocationChange('/')}
            primaryText='Home' />
        </Drawer>
      </div>
    )
  }
}

NavBar.propTypes = {
  changeRoute: React.PropTypes.func
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
