class NewNote extends React.Component {
    render() {
        return(
            <div className="div-note">
                {this.props.children}
            </div>
        )
    }
}


class NewList extends React.Component {

    constructor(porps) {
        super(porps)

        this.addDiv = this.addDiv.bind(this);
        this.send_list = this.send_list.bind(this);
    }

    state = {
        isAddInput: false,
        list: [
            'Hello World',
            'Hello Coder',
            'Hello Coder-Tokyo'
        ]
    }
    addDiv() {
        this.setState(
            {
                isAddInput: !this.state.isAddInput
            }
        )
    }
    send_list(data){

        this.setState(
            {
                list: this.state.list.concat(data)
            }
        )
    }

    render() {
        return(
            <div className="div-list">
                
                <button onClick={this.addDiv}>  Thêm </button>

                {
                    this.state.isAddInput&&
                    <NewInput send_list = {this.send_list}></NewInput>
                }
                
                {
                    this.state.list.map((note, index) => {
                        return <NewNote key={index}> {note}</NewNote>
                    })
                }
                
            </div>
        )
    }
}

class NewInput extends React.Component {

    constructor(porps) {
        super(porps)

        this.send = this.send.bind(this);
    }

    send = () => {
        this.props.send_list(this.refs.txt.value);
    }

    render() {
        return(
            <div  className="div-btn">
                <input type="text" ref="txt" placeholder="Enter your note!" />
                <button onClick={this.send} className="btn-new">Gữi</button>
            </div>
        )
    }
}



const Div = <div>
    <NewList />
</div>



const root = document.getElementById('root');

ReactDOM.render(Div, root);
