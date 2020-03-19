class NewFile extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                num: 0
            }
    }

    

    render() {
        return(
            <div>
                <h1>Hello, I'm Coder-x</h1>
                <button onClick={ () => {
                    this.state.num = parseInt(this.state.num) + 1;
                    this.setState(this.state)}}>Hello OnClick {this.state.num}</button>
            </div>
        )
    }
}

const Div = <div>
    <NewFile />
</div>

const root = document.getElementById('root');

ReactDOM.render(Div, root);