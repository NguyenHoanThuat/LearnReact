function getName(name) {
  alert(name);
}

class KhoaPham extends React.Component{
  constructor(props) {
    super(props)
      this.state = {tongHocVien: 10}
  } 
  render(){
    return <div>
      <h1 className = "mau-vang"> Hello, {this.props.ten}</h1>
      <p>{this.props.children}</p>

      <h2>So hoc vien: {this.state.tongHocVien}</h2>

      <button onClick={() => {getName('Hello ' + this.props.ten)}}>Thông tin khóa học</button>
      <button onClick={() => this.setState({ tongHocVien: this.state.tongHocVien + 1 })}>Thêm học viên</button>
    </div>
      
  };
};

class NewH2 extends React.Component {   
  render() {
  return <div>
    <h2> Hello, {this.props.ten}</h2>
    <p>{this.props.children}</p>

    <button onClick={() => {getName('Hello ' + this.props.ten)}}>Thông tin khóa học</button>
  </div>
  };
};

class NewImg extends React.Component {
  render() {
    return <img src="/image/anh-dep-3.jpg"/>
  }
}



  
const Div = <div>
    <KhoaPham ten="Nguyễn Hoàn Thuật">Khoa hoc React</KhoaPham>
    <NewH2 ten="Nguyễn Hoàn Bão">Khoa hoc NodeJs</NewH2>
    <NewImg />
  </div>

const root = document.getElementById('root');

ReactDOM.render(Div, root);
