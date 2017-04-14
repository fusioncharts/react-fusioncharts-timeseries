import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Prism from 'prismjs';
import FusionTime from '../../dist/FusionTime';
import tsData from './data/datarepo';

window.jQuery = $;
window.bootstrap = require('bootstrap');
window.ReactDOM = ReactDOM;

class ListComponent extends React.Component {
  constructor(props){
    super(props);
    this.charts = Object.keys(tsData);
    this.tsData = tsData;
    this.state = {
      fcDataSource: {}
    }
  }

  // Toggle between different datasource
  clickHandle(item) {
    this.setState({
      fcDataSource: this.tsData[item].data
    })
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  // Initially render only the first chart
  componentWillMount() {
    this.setState({
      fcDataSource: this.tsData[this.charts[0]].data
    })
  }

  render() {
    const chartStyles = {
      height: "450px",
      minHeight: "450px"
    };
    return (
      <div className="row">
          <div className="col-md-3 tablist" >
            <div className="list-group" role="tablist">
            { this.charts.map((chart, i) => {
                return (
                  <span key={i} className="list-group-item examples" onClick={this.clickHandle.bind(this, chart)}>
                    <h4>{this.tsData[chart].metadata.name}</h4>
                    <p>{this.tsData[chart].metadata.desc}</p>
                  </span>
                );
            })}
            </div>
          </div>
        <div className="col-md-9" >
            <div className="chartts">
              <FusionTime width="850" height="450" { ...this.state.fcDataSource }/>
            </div>
          </div>
        </div>
    );
  }
}

ReactDOM.render(<ListComponent />, document.getElementById('demos'))
