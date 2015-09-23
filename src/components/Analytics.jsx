// var React = require('react')
//
// var Analytics = React.createClass({
//   render: function() {
//     return (
//       <h1>Analytics</h1>
//     )
//   }
// })
//
// module.exports = Analytics

import React from 'react'
import { Highcharts } from 'react-highcharts'

import Store from '../stores/store.jsx'

class Analytics extends React.Component {
  constructor() {
    super()
    
    this.state = {
      movies: Store.getAnalyticsCollection()
    }
  }

  render() {

    var config = {
      title: {
        text: 'Movie Ratings'
      },
      yAxis: {
        title: {
          text: 'IMDB Ratings'
        }
      },
      chart: {
        type: 'column'
      },
      series: [{
        name: 'Movies',
        colorByPoint: true,
        data: movies
      }]
    }

    return (
      <Highcharts config={config} />
    )
  }
}

export default Analytics
