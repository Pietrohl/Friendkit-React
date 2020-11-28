'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _close = require('./close.svg');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TRANSITION_TIME = 0;

var ReactFancyBox = function (_Component) {
  _inherits(ReactFancyBox, _Component);

  function ReactFancyBox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactFancyBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactFancyBox.__proto__ || Object.getPrototypeOf(ReactFancyBox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show: false
    }, _this.show = function () {
      _this.setState({
        show: true
      });
      _this.props.onOpen();
    }, _this.handleClickBox = function (event) {
      if (_this.box.contains(event.target)) {
        return;
      }
      _this.close();
    }, _this.close = function () {
      _this.setState({
        show: false
      });
      _this.props.onClose();
    }, _this.renderThumbnail = function () {
      var _this$props = _this.props,
          thumbnail = _this$props.thumbnail,
          image = _this$props.image,
          defaultThumbnailWidth = _this$props.defaultThumbnailWidth,
          defaultThumbnailHeight = _this$props.defaultThumbnailHeight;


      if (!thumbnail) {
        return _react2.default.createElement(
          'div',
          { onClick: _this.show, className: 'thumbnail' },
          _react2.default.createElement('img', {
            style: { width: defaultThumbnailWidth, height: defaultThumbnailHeight, objectFit: 'cover' },
            src: image, alt: 'thumbnail' })
        );
      }

      return _react2.default.createElement(
        'div',
        { onClick: _this.show, className: 'thumbnail' },
        _react2.default.createElement('img', { src: thumbnail, alt: 'thumbnail' })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactFancyBox, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          image = _props.image,
          caption = _props.caption,
          animation = _props.animation,
          showCloseBtn = _props.showCloseBtn;


      var imageStyle = {
        maxHeight: window.innerHeight * 0.7
      };

      return _react2.default.createElement(
        'div',
        { className: 'react-fancybox' },
        this.renderThumbnail(),
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            style: { animationDuration: 1000 },
            transitionName: animation,
            transitionEnterTimeout: TRANSITION_TIME,
            transitionLeaveTimeout: TRANSITION_TIME },
          this.state.show ? _react2.default.createElement(
            'div',
            { onClick: this.handleClickBox, className: 'box' },
            _react2.default.createElement(
              'div',
              { ref: function ref(box) {
                  return _this2.box = box;
                }, className: 'image-box' },
              showCloseBtn && _react2.default.createElement('img', { onClick: this.close, className: 'close-btn', src: _close2.default, alt: 'close' }),
              _react2.default.createElement('img', { style: imageStyle, src: image, alt: 'original' }),
              caption && _react2.default.createElement(
                'div',
                { className: 'caption' },
                caption
              )
            )
          ) : null
        )
      );
    }
  }]);

  return ReactFancyBox;
}(_react.Component);

ReactFancyBox.defaultProps = {
  thumbnail: '',
  image: '',
  defaultThumbnailWidth: 300,
  defaultThumbnailHeight: 250,
  caption: '',
  animation: 'fade',
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  showCloseBtn: true
};

ReactFancyBox.propTypes = {
  thumbnail: _propTypes2.default.string,
  image: _propTypes2.default.string,
  defaultThumbnailWidth: _propTypes2.default.number,
  defaultThumbnailHeight: _propTypes2.default.number,
  caption: _propTypes2.default.string,
  animation: _propTypes2.default.string,
  animationTime: _propTypes2.default.number,
  onOpen: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  showCloseBtn: _propTypes2.default.bool
};

exports.default = ReactFancyBox;