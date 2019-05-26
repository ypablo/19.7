

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
		this.state = {
			running: false,
			watch: 0,
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		}

	}

	reset() {
		this.setState({ running: false });
		this.setState({ miliseconds: 0, seconds: 0, minutes: 0 })
	}

	start() {
		if (!this.state.running) {
			this.setState({ running: true });
			this.state.watch = setInterval(() => this.calculate(), 10);
		}
	}

	calculate() {
		this.setState((prevState) => ({ miliseconds: prevState.miliseconds + 1 }));
		if (this.state.miliseconds >= 100) {
			this.setState((prevState) => ({ seconds: prevState.seconds + 1, miliseconds: 0 }));

		}
		if (this.state.seconds >= 60) {
			this.setState((prevState) => ({ minutes: prevState.minutes + 1, seconds: 0 }));
		}
	}

	stop() {
		this.setState({ running: false });
		clearInterval(this.state.watch);
	}

	render() {
		return (
			<div>
				<nav className="controls">
					<a href="#" className="button" id="start" onClick={this.start.bind(this)}>Start</a>
					<a href="#" className="button" id="stop" onClick={this.stop.bind(this)}>Stop</a>
				</nav>
				<div className="stopwatch">{pad0(this.state.minutes)}:{pad0(this.state.seconds)}:{pad0(Math.floor(this.state.miliseconds))}</div>
				<ul className="results">
					<a href="#" className="button" id="reset" onClick={this.reset.bind(this)}>Reset</a>
				</ul>
			</div>
		)
	}
}


ReactDOM.render(<Stopwatch />, document.getElementById('app'));




