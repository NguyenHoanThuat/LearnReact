class NewP extends React.Component {

    render() {
        return(
            <div>
                <img src={this.props.src}/>
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
        this.state.mang.push({srcHinh: "image/hinh-1.jpg", noiDung: "Hello Coder"});
        this.setState(this.state);
    }

    state = {
        mang: [
            {srcHinh: "image/hinh-1.jpg", noiDung: "Hello Coder"},
            {srcHinh: "image/hinh-2.jpg", noiDung: "Hello Coder-X"},
            {srcHinh: "image/hinh-3.jpg", noiDung: "Hello Coder-Tokyo"}
        ]
    }

    render() {
        return(
            <div>
                <button onClick={this.add}> Thêm mới</button>

                {
                    this.state.mang.map((note, index) => {
                        return <NewP key={index} src={note.srcHinh}> {note.noiDung}</NewP>
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
