import React, {
  Component
}
from 'react';

import cloneDeep from 'lodash/cloneDeep';

export default class FusionTime extends Component {

  constructor(props) {
    super(props);
    this.chartConfig = {}
    this.chart;
  }

  // Set the config for the timeseries chart
  _setChartConfig(renderAt, attrs) {
    this.chartConfig =  {
        type: "timeseries",
  			plottype: "line",
  	    renderAt: renderAt ,
  			width: attrs.width,
  			height: attrs.height,
  			dataFormat: "json",
  			containerBackgroundOpacity: 0,
        dataSource: {
          chart: cloneDeep(attrs.chart),
          extensions: cloneDeep(attrs.extensions)
        }
      };
  }

  _renderTsChart(){
    this.chart = new FusionCharts(this.chartConfig);
    this.chart.render();
  }

  componentDidMount() {
    this._setChartConfig(this.refs.fcTimeChart, this.props);
    if (!this.chart) {
      this._renderTsChart();
    }
  }

  componentWillUnmount() {
    this.chart && this.chart.dispose();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this._setChartConfig(this.refs.fcTimeChart, nextProps);
      this._renderTsChart();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this._setChartConfig(this.refs.fcTimeChart, this.props);
      this._renderTsChart();
    }
  }

  render() {
    return (< div ref="fcTimeChart"/>);
  }
}
