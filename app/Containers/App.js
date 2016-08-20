import React from 'react'
import Helmet from 'react-helmet'

import 'sanitize.css/sanitize.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import NavBar from './NavBar'

import styles from './Styles/AppStyle.css'

function App (props) {
  return (
    <MuiThemeProvider styles={styles.global}>
      <div>
        <Helmet
          titleTemplate='%s - PayPal App'
          defaultTitle='Delimiter Search'
          meta={[
            { name: 'description', content: 'Search for locale delimiters' }
          ]}
        />
        <NavBar {...props} />
        {React.Children.toArray(props.children)}
      </div>
    </MuiThemeProvider>
  )
}

App.propTypes = {
  children: React.PropTypes.node
}

export default App
