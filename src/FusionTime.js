import React, { Component } from 'react';

export default class FusionTime extends Component {

  constructor(props) {
    super(props);
    this.chartConfig = {};
    this.chartDiv = null;
    this.chart = null;
  }

  componentDidMount() {
    this.setChartConfig(this.chartDiv, this.props);
    if (!this.chart) {
      this.renderTsChart();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setChartConfig(this.chartDiv, nextProps);
      this.renderTsChart();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setChartConfig(this.chartDiv, this.props);
      this.renderTsChart();
    }
  }

  componentWillUnmount() {
    this.chart.dispose();
  }


  setChartConfig(renderAt, attrs) {
    this.chartConfig = {
      type: 'timeseries',
      plottype: 'line',
      renderAt,
      width: attrs.width,
      height: attrs.height,
      dataFormat: 'json',
      containerBackgroundOpacity: 0,
      dataSource: {
        chart: attrs.chart,
        extensions: attrs.extensions,
      },
    };
  }

  renderTsChart() {
    this.chart = new FusionCharts(this.chartConfig);
    this.chart.render();
  }


  render() {
    return (< div ref={(c) => { this.chartDiv = c; }} / >);
  }
}
