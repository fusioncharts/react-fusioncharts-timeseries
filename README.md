### [Demos and Documentation](http://fusioncharts.github.io/react-fusiontime-xt/)

## Introduction

FusionCharts Suite XT is a front-end, JavaScript-based, comprehensive collection of 90+ charts and  1000+ maps. This includes basic and complex charts like the column and bar charts, pie and doughnut charts, treemap, heatmap, logarithmic charts, and so on; gauges like the angular gauge, bulb gauge, thermometer gauge, and so on; and maps for all continents, major countries, and all US states.

The **react-fusiontime-xt** plugin, along with FusionCharts Suite XT, lets you add interactive JavaScript charts and graphs to your web and mobile applications using only a single ReactJS component.

This article outlines the steps to be executed for rendering charts using the **react-fusiontime-xt** plugin.

#### Step 1: Install **fusiontime-xt**, **react**, **react-dom**, and **react-fusiontime-xt** npm package
Execute the commands below in the terminal to install **fusioncharts**, **react**, **react-dom**, and **react-fusiontime-xt** node modules.

```sh
npm install react --save
npm install react-dom --save
npm install fusioncharts --save
npm install react-fusiontime-xt --save

# or single line
npm install react react-dom fusioncharts react-fusiontime-xt --save
```

#### Step 2: Add the HTML container element for rendering the chart

In your HTML, find the section where you wish to render the chart place a `<div>` for the FusionCharts to be rendered.

`<div id='chart-container'></div>`

#### Step 3: Import react-fusiontime-xt package from npm

Import **react**, **react-dom**, **fusioncharts**, and **react-fusiontime-xt** modules, in this order, through npm. In your JavaScript code, define an object that consists of all the configurations and their values, required to render FusionCharts.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import FusionTime from 'react-fusiontime-xt';

var fcDataSource = {
 ...
}
ReactDOM.render( <FusionTime width = "850" height = "450" { ...fcDataSource } />, document.getElementById('chart-container'));

```

#### Step 4: Pass the configurations required for FusionTime and render the chart
##### FusionTime plugin for **react** can be used in two ways:
1. Use the **FusionTime** component directly in **ReactDOM** to render the chart. The configurations are passed as props of the component.
2. Create multiple **FusionTime** component inside your custom defined component to render individual charts. This way you would be able to hold the state in your custom component and will be able to perform various activities using the component’s lifecycle hooks.

##### Method 1:
Render the chart in the **React** application for a standalone chart, we can choose to make a component class or directly render the chart with the **FusionTime** component class. The object containing the chart configuration properties are passed to the **FusionCharts** component as props, as shown below:

```javascript
ReactDOM.render(
    <FusionTime {...chartConfigs} />,
    document.getElementById('chart-container')
);
```

##### Method 2:
Create a custom MyApp component to render the chart as shown below:

```javascript
class MyApp extends React.Component {
    // Rest of the React Component Code
    constructor(props) {
      super(props);
      this.state = {
        fcDataSource1: {},
        fcDataSource2: {}
      }
    }

    render() {
        return (
          <div>
            <FusionTime width = "850" height = "450" { ...this.state.fcDataSource1 } />
            <FusionTime width = "450" height = "300" { ...this.state.fcDataSource2 } />
          </div>
        );
    }
}

ReactDOM.render(
    <MyApp />,
    document.getElementById('chart-container')
);
```

While it is recommended to create an object, with the configuration properties, and passing the values defined.
Your chart should now render when the page is loaded.

### Licensing
React-FusionCharts is open-source and distributed under the terms of the MIT/X11 License. You will still need to download and include FusionCharts in your page. This project provides no direct functionality. You can [Download an evaluation](http://fusioncharts.com/download/). You will still need to purchase a FusionCharts license to use in a commercial environment (FusionCharts is [free for non-commercial and personal use](http://www.fusioncharts.com/download/free/)) .
