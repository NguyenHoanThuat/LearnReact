class KhoaPham extends React.Component{
  layThongTin() {
    alert("Nguyễn Hoàn Thuật")
  }    
  render(){
    return <div>
      <h1 className = "mau-vang"> Hello, {this.props.ten}</h1>
      <p>{this.props.children}</p>

      <button onClick={this.layThongTin}>Thông tin khóa học</button>
    </div>
      
  };
};

class NewH2 extends React.Component {
  layThongTin() {
    alert("Nguyễn Hoàn Bão")
  }    
  render() {
  return <div>
    <h2> Hello, {this.props.ten}</h2>
    <p>{this.props.children}</p>

    <button onClick={this.layThongTin}>Thông tin khóa học</button>
  </div>
  };
};

class NewImg extends React.Component {
  render() {
    return <img src="/image/anh-dep-3.jpg"/>
  }
}



  
const Div = <div>
    <KhoaPham ten="Nguyen Hoan Thuat">Khoa hoc React</KhoaPham>
    <NewH2 ten="Nguyen Hoan Bao">Khoa hoc NodeJs</NewH2>
    <NewImg />
  </div>

const root = document.getElementById('root');

ReactDOM.render(Div, root);
