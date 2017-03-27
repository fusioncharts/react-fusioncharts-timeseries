import React, {
  Component
}
from 'react';
//
// require('./lib/fusioncharts');
// require('./lib/fusioncharts.timeseries.js');
// require('./lib/data-aggregator-es5.js');
// require('./lib/growth-analyser-es5.js');
// require('./lib/date-range-chooser-es5.js');
// require('./lib/standard-period-selector-es5.js');

import cloneDeep from 'lodash/cloneDeep';


class FusionTimeSeries extends Component {
  constructor(props) {
    super(props);

    this.dataSource = {};

    this.dataSource.chart = cloneDeep(props.chart);
    this.dataSource.extensions = cloneDeep(props.extensions);

    this.chart = null;

    this.chartConfig = {
      type: "timeseries",
			plottype: "line",
	    renderAt: null ,
			width: this.props.width,
			height: this.props.height,
			dataFormat: "json",
			containerBackgroundOpacity: 0,
      dataSource: cloneDeep(this.dataSource)
    }
  }

  componentDidMount() {
    this.chartConfig.renderAt = this.refs.fcTimeChart;
    console.log(this);
    this.chart = new FusionCharts(this.chartConfig);
    this.chart.render();
  }

  componentWillUnmount() {
    this.chart && this.chart.dispose();
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {

    return (< div
        ref="fcTimeChart"
      />
    );
  }
}

export default FusionTimeSeries;
