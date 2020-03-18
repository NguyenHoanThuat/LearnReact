class KhoaPham extends React.Component{
  render(){
    return <h1 className = "mau-vang"> Khoa Pham React </h1>
  };
};

class NewH2 extends React.Component {
  render() {
    return <h2> Hello, Coder-x</h2>
  };
};

class NewImg extends React.Component {
  render() {
    return <img src="/image/anh-dep-3.jpg"/>
  }
}


  
const Div = <div>
    <KhoaPham />
    <NewH2 />
    <NewImg />
  </div>

const root = document.getElementById('root');

ReactDOM.render(Div, root);
