'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
let template = (<div><h1>Decision</h1></div>);
let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
*/

var Stopwatch = function (_React$Components) {
	_inherits(Stopwatch, _React$Components);

	function Stopwatch() {
		_classCallCheck(this, Stopwatch);

		return _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).apply(this, arguments));
	}

	_createClass(Stopwatch, [{
		key: 'render',
		value: function render() {}
	}]);

	return Stopwatch;
}(React.Components);

var jsx = React.createElement(
	'div',
	null,
	React.createElement(Stopwatch, null)
);

ReactDOM.render(jsx, document.getElementById('app'));

/*
class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }
	
	reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
		this.print();
    }
	
	print() {
        this.display.innerText = this.format(this.times);
	}
	
	format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}
	
	start() {
    if (!this.running) {
        this.running = true;
        this.watch = setInterval(() => this.step(), 10);
		}
	}
	
	step() {
		if (!this.running) return;
		this.calculate();
		this.print();
	}
	calculate() {
		this.times.miliseconds += 1;
		if (this.times.miliseconds >= 100) {
			this.times.seconds += 1;
			this.times.miliseconds = 0;
		}
		if (this.times.seconds >= 60) {
			this.times.minutes += 1;
			this.times.seconds = 0;
		}
	}
	
	stop() {
		this.running = false;
		clearInterval(this.watch);
	}
}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

const stopwatch = new Stopwatch(
document.querySelector('.stopwatch'));

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.reset());
*/
