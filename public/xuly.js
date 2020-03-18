class KhoaPham extends React.Component{
  render(){
    return <h1 className = "mau-vang"> Hello, {this.props.ten}</h1>
  };
};

class NewH2 extends React.Component {
  render() {
  return <h2> Hello, {this.props.ten}</h2>
  };
};

class NewImg extends React.Component {
  render() {
    return <img src="/image/anh-dep-3.jpg"/>
  }
}


  
const Div = <div>
    <KhoaPham ten="Nguyen Hoan Thuat"/>
    <NewH2 ten="Nguyen Hoan Bao"/>
    <NewImg />
  </div>

const root = document.getElementById('root');

ReactDOM.render(Div, root);
