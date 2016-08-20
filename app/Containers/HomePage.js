import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Helmet from 'react-helmet'

import Actions from '../Actions/Creators'

import Search from './Search'
import LocalesDisplay from './LocalesDisplay'
import PropertiesDisplay from './PropertiesDisplay'

import styles from './Styles/HomePageStyle.css'

import CircularProgress from 'material-ui/CircularProgress'

class HomePage extends Component {

  render () {
    const { locales, loading } = this.props
    return (
      <div>
        <Helmet
          title='Home'
          meta={[
            { name: 'description', content: 'Home Page for the PayPal app' }
          ]}
        />
        <div className={styles.container}>
          <Search />
          <PropertiesDisplay />
          {loading ? <CircularProgress size={2} style={{alignSelf: 'center'}} /> : <LocalesDisplay {...locales} />}
        </div>
      </div>
    )
  }
}

HomePage.propTypes = {

}

const mapStateToProps = (state) => {
  return {
    locales: state.locales,
    loading: state.locales.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestLocales: (property) => dispatch(Actions.requestLocales(property))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
