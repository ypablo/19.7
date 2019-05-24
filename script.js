

function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

class Stopwatch extends React.Component {

	constructor(props) {
		super(props);
		this.running = false;
		this.display = props.display;
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
		this.display = this.format(this.times);
	}

	format() {
		return `${pad0(this.times.minutes)}:${pad0(this.times.seconds)}:${pad0(Math.floor(this.times.miliseconds))}`
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


	render() {
		return (
			<div>
				<nav className="controls">
					<a href="#" className="button" id="start" onClick={this.start.bind(this)}>Start</a>
					<a href="#" className="button" id="stop" onClick={this.stop.bind(this)}>Stop</a>
				</nav>
				<div className="stopwatch">{this.display}</div>
				<ul className="results">
					<a href="#" className="button" id="reset" onClick={this.reset.bind(this)}>Reset</a>
				</ul>
			</div>
		)
	}
}


ReactDOM.render(<Stopwatch />, document.getElementById('app3'));




