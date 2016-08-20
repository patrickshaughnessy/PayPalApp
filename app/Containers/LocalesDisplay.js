import React, { Component } from 'react'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

import {
  Card,
  CardActions,
  CardHeader,
  CardText
} from 'material-ui/Card'

import styles from './Styles/LocalesDisplayStyle.css'

const LocalesDisplay = (props) => {
  const { localesByDelimiter, localesByProperty, viewing, dedup } = props
  if (dedup) {
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h3 style={{textAlign: 'center'}}>Countries By Delimiter:</h3>
        </div>
        <div className={styles.innerContainer}>
          {Object.keys(localesByDelimiter[viewing]).map((delimiter, i) => {
            return (
              <Card key={delimiter}>
                <CardHeader
                  title={delimiter}
                  titleStyle={{fontSize: '300%', textAlign: 'center', marginLeft: '5em'}}
                  actAsExpander
                  showExpandableButton
                />
                <CardText expandable>
                  {localesByDelimiter[viewing][delimiter].map(item => item.locale).join(', ')}
                </CardText>
              </Card>
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h3 style={{textAlign: 'center'}}>Delimiters And Locales:</h3>
        </div>
        <div className={styles.innerContainer}>
          <Table
            selectable={false}
          >
            <TableHeader
              displaySelectAll={false}
            >
              <TableRow>
                <TableHeaderColumn style={{textAlign: 'center'}}>Delimiter</TableHeaderColumn>
                <TableHeaderColumn style={{textAlign: 'center'}}>Locale</TableHeaderColumn>
                <TableHeaderColumn style={{textAlign: 'center'}}>Language</TableHeaderColumn>
                <TableHeaderColumn style={{textAlign: 'center'}}>Country</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              preScanRows={false}
            >
              {localesByProperty[viewing] && localesByProperty[viewing].map((item, i) => {
                return (
                  <TableRow key={item.locale}>
                    <TableRowColumn style={{textAlign: 'center', fontSize: '250%'}}>{item.delimiter}</TableRowColumn>
                    <TableRowColumn style={{textAlign: 'center'}}>{item.locale}</TableRowColumn>
                    <TableRowColumn style={{textAlign: 'center'}}>{item.language}</TableRowColumn>
                    <TableRowColumn style={{textAlign: 'center'}}>{item.country}</TableRowColumn>
                  </TableRow>
                )
              })
              }
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}

LocalesDisplay.propTypes = {
  locales: React.PropTypes.object
}

export default LocalesDisplay
