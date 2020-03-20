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

class NewImage extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                hinh: 1
            }
    }

    next = () => {
        if(this.state.hinh === 5){
            this.setState(5)
        }
        this.state.hinh  = parseInt(this.state.hinh) + 1;
        this.setState(this.state);
    }

    prev = () => {
        if(this.state.hinh === 1){
            this.setState(1)
        }
        this.state.hinh = parseInt(this.state.hinh) - 1;
        this.setState(this.state)
    }

    render() {
        return(
            <div className="imgLove">
                <img src={"/image/hinh-" + this.state.hinh + ".jpg"}/>
                <hr />
                <button onClick={this.prev}>Quay Lại</button>
                <button onClick={this.next}>Tiếp theo</button>
            </div>
        )
    }
}


class NewForward extends React.Component {
    constructor(props) {
        super(props)
            this.changImage =  this.changImage.bind(this);
    }

    state = {
        hinh: 1,
    }
    
    changImage() {
        let num_hinh = parseInt(this.state.hinh) + 1;
        if(num_hinh == 6) {
            num_hinh =1;
        }
        this.setState({hinh: num_hinh});
    }

    render() {
        return(
            <div>
                <img src={"/image/hinh-" + this.state.hinh + ".jpg"} />
            </div>
        )
    }

    componentDidMount() {
        setInterval(this.changImage, 2000);
    }
}

const Div = <div>
    <NewFile />
    <NewImage />
    <NewForward />
</div>

const root = document.getElementById('root');

ReactDOM.render(Div, root);
