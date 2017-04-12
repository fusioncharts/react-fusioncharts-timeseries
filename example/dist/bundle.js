require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-fusiontime-xt":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var FusionTime = (function (_Component) {
  _inherits(FusionTime, _Component);

  function FusionTime(props) {
    _classCallCheck(this, FusionTime);

    _get(Object.getPrototypeOf(FusionTime.prototype), 'constructor', this).call(this, props);
    this.chartConfig = {};
    this.chartDiv = null;
    this.chart = null;
  }

  _createClass(FusionTime, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setChartConfig(this.chartDiv, this.props);
      if (!this.chart) {
        this.renderTsChart();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps !== this.props) {
        this.setChartConfig(this.chartDiv, nextProps);
        this.renderTsChart();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.setChartConfig(this.chartDiv, this.props);
        this.renderTsChart();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.chart.dispose();
    }
  }, {
    key: 'setChartConfig',
    value: function setChartConfig(renderAt, attrs) {
      this.chartConfig = {
        type: 'timeseries',
        plottype: 'line',
        renderAt: renderAt,
        width: attrs.width,
        height: attrs.height,
        dataFormat: 'json',
        containerBackgroundOpacity: 0,
        dataSource: {
          chart: attrs.chart,
          extensions: attrs.extensions
        }
      };
    }
  }, {
    key: 'renderTsChart',
    value: function renderTsChart() {
      this.chart = new FusionCharts(this.chartConfig);
      this.chart.render();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      return _react2['default'].createElement('div', { ref: function (c) {
          _this.chartDiv = c;
        } });
    }
  }]);

  return FusionTime;
})(_react.Component);

exports['default'] = FusionTime;
module.exports = exports['default'];

},{"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2FuZGVlcGFjaGFyeWEvV29ya3MuT2ZmaWNlL0FwcGxpY2F0aW9uL3JlYWN0LWZ1c2lvbnRpbWUteHQvc3JjL0Z1c2lvblRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FpQyxPQUFPOzs7O0lBRW5CLFVBQVU7WUFBVixVQUFVOztBQUVsQixXQUZRLFVBQVUsQ0FFakIsS0FBSyxFQUFFOzBCQUZBLFVBQVU7O0FBRzNCLCtCQUhpQixVQUFVLDZDQUdyQixLQUFLLEVBQUU7QUFDYixRQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN0QixRQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixRQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztHQUNuQjs7ZUFQa0IsVUFBVTs7V0FTWiw2QkFBRztBQUNsQixVQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9DLFVBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2YsWUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO09BQ3RCO0tBQ0Y7OztXQUV3QixtQ0FBQyxTQUFTLEVBQUU7QUFDbkMsVUFBSSxTQUFTLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtBQUM1QixZQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDOUMsWUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO09BQ3RCO0tBQ0Y7OztXQUVpQiw0QkFBQyxTQUFTLEVBQUU7QUFDNUIsVUFBSSxTQUFTLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtBQUM1QixZQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9DLFlBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztPQUN0QjtLQUNGOzs7V0FFbUIsZ0NBQUc7QUFDckIsVUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN0Qjs7O1dBR2Esd0JBQUMsUUFBUSxFQUFFLEtBQUssRUFBRTtBQUM5QixVQUFJLENBQUMsV0FBVyxHQUFHO0FBQ2pCLFlBQUksRUFBRSxZQUFZO0FBQ2xCLGdCQUFRLEVBQUUsTUFBTTtBQUNoQixnQkFBUSxFQUFSLFFBQVE7QUFDUixhQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7QUFDbEIsY0FBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO0FBQ3BCLGtCQUFVLEVBQUUsTUFBTTtBQUNsQixrQ0FBMEIsRUFBRSxDQUFDO0FBQzdCLGtCQUFVLEVBQUU7QUFDVixlQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7QUFDbEIsb0JBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtTQUM3QjtPQUNGLENBQUM7S0FDSDs7O1dBRVkseUJBQUc7QUFDZCxVQUFJLENBQUMsS0FBSyxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNoRCxVQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3JCOzs7V0FHSyxrQkFBRzs7O0FBQ1AsYUFBUSwwQ0FBTSxHQUFHLEVBQUUsVUFBQyxDQUFDLEVBQUs7QUFBRSxnQkFBSyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQUUsQUFBQyxHQUFJLENBQUU7S0FDeEQ7OztTQTNEa0IsVUFBVTs7O3FCQUFWLFVBQVUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVzaW9uVGltZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jaGFydENvbmZpZyA9IHt9O1xuICAgIHRoaXMuY2hhcnREaXYgPSBudWxsO1xuICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRDaGFydENvbmZpZyh0aGlzLmNoYXJ0RGl2LCB0aGlzLnByb3BzKTtcbiAgICBpZiAoIXRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMucmVuZGVyVHNDaGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xuICAgICAgdGhpcy5zZXRDaGFydENvbmZpZyh0aGlzLmNoYXJ0RGl2LCBuZXh0UHJvcHMpO1xuICAgICAgdGhpcy5yZW5kZXJUc0NoYXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmIChwcmV2UHJvcHMgIT09IHRoaXMucHJvcHMpIHtcbiAgICAgIHRoaXMuc2V0Q2hhcnRDb25maWcodGhpcy5jaGFydERpdiwgdGhpcy5wcm9wcyk7XG4gICAgICB0aGlzLnJlbmRlclRzQ2hhcnQoKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNoYXJ0LmRpc3Bvc2UoKTtcbiAgfVxuXG5cbiAgc2V0Q2hhcnRDb25maWcocmVuZGVyQXQsIGF0dHJzKSB7XG4gICAgdGhpcy5jaGFydENvbmZpZyA9IHtcbiAgICAgIHR5cGU6ICd0aW1lc2VyaWVzJyxcbiAgICAgIHBsb3R0eXBlOiAnbGluZScsXG4gICAgICByZW5kZXJBdCxcbiAgICAgIHdpZHRoOiBhdHRycy53aWR0aCxcbiAgICAgIGhlaWdodDogYXR0cnMuaGVpZ2h0LFxuICAgICAgZGF0YUZvcm1hdDogJ2pzb24nLFxuICAgICAgY29udGFpbmVyQmFja2dyb3VuZE9wYWNpdHk6IDAsXG4gICAgICBkYXRhU291cmNlOiB7XG4gICAgICAgIGNoYXJ0OiBhdHRycy5jaGFydCxcbiAgICAgICAgZXh0ZW5zaW9uczogYXR0cnMuZXh0ZW5zaW9ucyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlclRzQ2hhcnQoKSB7XG4gICAgdGhpcy5jaGFydCA9IG5ldyBGdXNpb25DaGFydHModGhpcy5jaGFydENvbmZpZyk7XG4gICAgdGhpcy5jaGFydC5yZW5kZXIoKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPCBkaXYgcmVmPXsoYykgPT4geyB0aGlzLmNoYXJ0RGl2ID0gYzsgfX0gLyA+KTtcbiAgfVxufVxuIl19
