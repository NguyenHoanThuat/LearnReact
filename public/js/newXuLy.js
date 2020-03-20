class NewP extends React.Component {

    render() {
        return(
            <div>
                <p> {this.props.children}</p>
            </div>
        )
    }
}

class NewH1 extends React.Component {

    constructor(props) {
        super(props)
        this.add = this.add.bind(this);
    }

    add() {
        this.state.mang.push('NodeJs');
        this.setState(this.state);
    }

    state = {
        mang: ['Hello', 'Hi', 'Ahihi']
    }

    render() {
        return(
            <div>
                <button onClick={this.add}> Thêm mới</button>

                {
                    this.state.mang.map((note, index) => {
                        return <NewP key={index}> {note}</NewP>
                    })
                }
            </div>
        )
    }
}


const root = document.getElementById('root');

const Div = <div>
    <NewH1 />
    
</div>

ReactDOM.render(Div, root);
