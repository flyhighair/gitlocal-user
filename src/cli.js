const {h, render, Component, Color} = require('ink');

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            i: 0
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                i: this.state.i + 1
            });
        }, 1000);
    }

    componentWillMount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <Color green>
                {this.state.i} tests passed
            </Color>
        );
    }
}

render(<Counter/>);
