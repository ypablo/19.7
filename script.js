

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			txt: ""
		}
		this.handleClick = () => {
			const number = Math.floor(Math.random() * 10)
			this.setState({
				txt: this.state.txt + number
			})
		}
	}
	
	render() {
		return (
			<div>
				<button className="bt" onClick={this.handleClick.bind(this)}>{this.props.btnTitle}</button>
				<h1>{this.state.txt}</h1>
			</div>
		)
	}
}

ReactDOM.render(<App btnTitle="add digit" />, document.getElementById("app1"))

//-------------------------------------------------//

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count:0,
			result: 0
		}
	}

	handleMathClick(type, number) {
		if(type === "sub") {	
			this.setState(prevState =>({
				count: prevState.count + 1,
				result: prevState.result - number
			}))
		} else if (type === "reset"){
			this.setState(prevState => ({
				count: prevState.count + 1,
				result: 0
			}))
		} else if (type === "add"){
			this.setState(prevState => ({
				count: prevState.count + 1,
				result: prevState.result + number
			}))
		}
	}

	render() {
		return (
		<div>	
			<button onClick={this.handleMathClick.bind(this,"sub", 1)}>-1</button>
			<button onClick={() => this.handleMathClick("reset")}>RESET</button>
			<button onClick={() => this.handleMathClick("add", 1)}>+1</button>
			<h1>Clicks number: {this.state.count}</h1>
			<h1>Result: {this.state.result}</h1>
		</div>	
		)
	}

}

ReactDOM.render(<Counter />, document.getElementById("app2"))


/*
let template = (<div><h1>Decision</h1></div>);
let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
*/

/////////////////////////////////////////////////
/*



class Stopwatch extends React.Component {
	

	render() {
		return (
			<div>
				
			</div>
		)
	}
}
ReactDOM.render(<Stopwatch />, document.getElementById('app3'));
*/






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

