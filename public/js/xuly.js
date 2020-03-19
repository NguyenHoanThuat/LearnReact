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

    render() {
        return(
            <div class="imgLove">
                <img src={"/image/hinh-" + this.state.hinh + ".jpg"}/>
                <hr />
                <button onClick={ () => {
                    this.state.hinh = parseInt(this.state.hinh) - 1;
                    this.setState(this.state)}}>Quay Lại</button>
                <button onClick={ () => {
                    this.state.hinh = parseInt(this.state.hinh) + 1;
                    this.setState(this.state)}}>Tiếp theo</button>
            </div>
        )
    }
}

const Div = <div>
    <NewFile />
    <NewImage />
</div>

const root = document.getElementById('root');

ReactDOM.render(Div, root);
