import React, { Component } from 'react'
import { connect } from 'react-redux'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Toggle from 'material-ui/Toggle'
import FlatButton from 'material-ui/FlatButton'

import Actions from '../Actions/Creators'

import styles from './Styles/PropertiesDisplayStyle.css'

class PropertiesDisplay extends Component {

  _renderPropertiesSelect = () => {
    const { properties, viewing, changeProperty } = this.props
    return (
      <SelectField
        className={styles.select}
        onChange={(e, i, value) => changeProperty(value)}
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
    const { properties, toggleDedupView, viewing, deleteProperty, dedup } = this.props
    if (!properties.length) {
      return null
    } else {
      return (
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <h4 style={{textDecoration: 'underline', alignSelf: 'center'}}>Viewing:</h4>
            {this._renderPropertiesSelect()}
          </div>
          <div className={styles.innerContainer}>
            <h4 style={{textDecoration: 'underline', alignSelf: 'center'}}>Options:</h4>
            <div className={styles.options}>
              <div className={styles.toggle}>
                <Toggle
                  toggled={dedup}
                  label='Dedup'
                  labelPosition='right'
                  onToggle={() => toggleDedupView()}
                />
              </div>
              <div className={styles.button}>
                <FlatButton
                  label='Remove Property'
                  secondary
                  onClick={() => deleteProperty(viewing)}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

PropertiesDisplay.propTypes = {
  viewing: React.PropTypes.string,
  properties: React.PropTypes.array,
  dedup: React.PropTypes.bool,
  changeProperty: React.PropTypes.func,
  toggleDedupView: React.PropTypes.func,
  deleteProperty: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    viewing: state.locales.viewing,
    properties: state.locales.properties,
    dedup: state.locales.dedup
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeProperty: (property) => dispatch(Actions.changeProperty(property)),
    toggleDedupView: () => dispatch(Actions.toggleDedupView()),
    deleteProperty: (property) => dispatch(Actions.deleteProperty(property))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesDisplay)
