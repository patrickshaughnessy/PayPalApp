import React from 'react'
import Helmet from 'react-helmet'

import 'sanitize.css/sanitize.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import {
  blue500, blue700,
  indigo200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import NavBar from './NavBar'

import styles from './Styles/AppStyle.css'

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: grey400,
    accent1Color: indigo200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: blue500,
    shadowColor: fullBlack
  }
})

function App (props) {
  return (
    <MuiThemeProvider
      styles={styles.global}
      muiTheme={muiTheme}
    >
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
