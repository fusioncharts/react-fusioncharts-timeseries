import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Prism from 'prismjs';
import FusionTimeSeries from '../../src/FusionTimeSeries';
import tsData from './data/datarepo';

window.jQuery = $;
window.bootstrap = require('bootstrap');
window.ReactDOM = ReactDOM;

const Snippet = () => {
  return (
    <pre>
    <code className="language-javascript">
    import React from 'react';
    import ReactDOM from 'react-dom';
    import FusionTimeSeries from 'FusionTimeSeries';
    var fcDataSource = &#123;
     // config goes here
    &#125;
    ReactDOM.render( &lt; FusionTimeSeries width = "850" height = "450" &#123; ...fcDataSource &#125; /&gt;, document.getElementById('chart-container'));
    </code>
    </pre>
  );
}

class ListComponent extends React.Component {
  constructor(props){
    super(props);
    this.charts = Object.keys(tsData);
    this.tsData = tsData;
    this.state = {
      fcDataSource: {}
    }
  }
  clickHandle(item) {

    this.setState({
      fcDataSource: this.tsData[item].data
    })
  }
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
              <FusionTimeSeries width="850" height="450" { ...this.state.fcDataSource }/>
            </div>
          <div id="code-listing">
          <ul className="nav nav-tabs">
            <li className="active">
              <a href="#javascript_code" data-toggle="tab">Javascript</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="javascript_code" className="tab-pane fade in active">
            <Snippet />
          </div>
       </div>
      </div>
    </div>
 </div>
    );
  }
}

ReactDOM.render(<ListComponent />, document.getElementById('demos'))
