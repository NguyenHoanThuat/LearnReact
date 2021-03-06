function getName(name) {
  alert(name);
}

class KhoaPham extends React.Component {
  constructor(props) {
    super(props)
      this.state = {tongHocVien: this.props.tongHocVien}
  } 
  render(){
    return <div>
      <h1 className = "mau-vang"> Hello, {this.props.ten}</h1>
      <p>{this.props.children}</p>

      <h2>So hoc vien: {this.state.tongHocVien}</h2>

      <button onClick={() => {getName('Hello ' + this.props.ten)}}>Thông tin khóa học</button>
      <button onClick={() => {
        this.state.tongHocVien = parseInt(this.state.tongHocVien) + 1;
        this.setState(this.state)}}>Thêm học viên</button>
    </div>
      
  };
};

class NewH2 extends React.Component {   
  constructor(props) {
    super(props)
      this.state = {tongHocVien: this.props.tongHocVien}
  }
  render() {
  return <div>
    <h2> Hello, {this.props.ten}</h2>
    <p>{this.props.children}</p>

    <h2>SO hoc vien: {this.state.tongHocVien}</h2>

    <button onClick={() => {getName('Hello ' + this.props.ten)}}>Thông tin khóa học</button>
    <button onClick={() => {
      this.state.tongHocVien = parseInt(this.state.tongHocVien) + 1;
      this.setState(this.state)
    }}>Thêm học viên</button>
  </div>
  };
};

class NewImg extends React.Component {
  render() {
    return <img src="/image/anh-dep-3.jpg"/>
  }
};

class NewInput extends React.Component {
  constructor(props) {
    super(props)
      this.myRef = React.createRef();
  }

  show = () => {
    const text = this.myRef.current.value;
    alert(text);
  }

  render() {
    return <div>
      <input type="text" ref={this.myRef}/>
      <button onClick={this.show}>hiển thị</button>
    </div>
  }
};

const Div = <div>
    <NewInput />
    <KhoaPham ten="Nguyễn Hoàn Thuật" tongHocVien="10">Khoa hoc React</KhoaPham>
    <NewH2 ten="Nguyễn Hoàn Bão" tongHocVien="20">Khoa hoc NodeJs</NewH2>
    <NewImg />
  </div>

const root = document.getElementById('root');

ReactDOM.render(Div, root);
