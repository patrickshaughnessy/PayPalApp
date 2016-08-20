import React from 'react'
import Helmet from 'react-helmet'

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
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
          titleTemplate='%s - Interview App'
          defaultTitle='Coding House Interview App'
          meta={[
            { name: 'description', content: 'A baby front end for the Coding House Interview Mobile App' }
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
