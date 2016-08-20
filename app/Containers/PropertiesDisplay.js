import React, { Component } from 'react'
import { connect } from 'react-redux'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Toggle from 'material-ui/Toggle'

import Actions from '../Actions/Creators'

import styles from './Styles/PropertiesDisplayStyle.css'

class PropertiesDisplay extends Component {

  _changeProperty = (e, i, value) => {
    const { changeProperty } = this.props
    changeProperty(value)
  }

  _toggleDedup = () => {

  }

  _renderPropertiesSelect = () => {
    const { properties, viewing } = this.props
    return (
      <SelectField
        className={styles.select}
        onChange={this._changeProperty}
        value={viewing}
      >
        {properties.map((property, i) =>
          <MenuItem
            style={{'WebkitAppearance': 'none'}}
            key={property + '_' + i}
            value={property}
            primaryText={property}
            label={property}
          />
        )}
      </SelectField>
    )
  }

  render () {
    const { properties, toggleDedupView } = this.props
    if (!properties.length) {
      return (
        <div className={styles.container}>
          <h3 className={styles.info}>Locale info will display here</h3>
        </div>
      )
    } else {
      return (
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <h4 style={{textDecoration: 'underline'}}>Viewing:</h4>
            {this._renderPropertiesSelect()}
          </div>
          <div className={styles.innerContainer}>
            <h4 style={{textDecoration: 'underline'}}>Options:</h4>
            <div style={{maxWidth: 250}}>
              <Toggle
                label='Dedup'
                labelPosition='left'
                onToggle={() => toggleDedupView()}
              />
            </div>
          </div>
        </div>
      )
    }
  }
}

PropertiesDisplay.propTypes = {

}

const mapStateToProps = (state) => {
  return {
    viewing: state.locales.viewing,
    properties: state.locales.properties
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeProperty: (property) => dispatch(Actions.changeProperty(property)),
    toggleDedupView: () => dispatch(Actions.toggleDedupView())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesDisplay)
