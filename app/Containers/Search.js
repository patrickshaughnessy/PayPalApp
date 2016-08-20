import React, { Component } from 'react'
import { connect } from 'react-redux'

import Actions from '../Actions/Creators'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import styles from './Styles/SearchStyle.css'

class Search extends Component {

  constructor (props) {
    super(props)
    this.state = {
      property: 'quotationStart'
    }
  }

  _onSubmit = () => {
    const { requestLocales } = this.props
    requestLocales(this.state)
    this.setState({ property: '' })
  }

  render () {
    const { property } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h1 className={styles.title}>Search For A Locale Property</h1>
        </div>
        <div className={styles.innerContainer}>
          <TextField
            value={property}
            onChange={(e) => this.setState({ property: e.target.value })}
            onKeyDown={(e) => e.keyCode === 13 && property.length && this._onSubmit()}
            floatingLabelText='Enter a property name'
          />
          <RaisedButton
            label='Search'
            primary
            onClick={() => property.length && this._onSubmit()}
          />
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  viewing: React.PropTypes.string,
  requestLocales: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    viewing: state.locales.viewing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestLocales: (property) => dispatch(Actions.requestLocales(property))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
