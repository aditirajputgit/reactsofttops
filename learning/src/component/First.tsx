import { Component } from "react";

class First extends Component {
  first2() {
    return (
      <>
        <h1>This is second</h1>
        <h1>thik h </h1>
      </>
    );
  }
  first3 = () => {
    <h1>okk</h1>;
  };

  render() {
    let a = this.first2();
    return (
      <>
        <h1>Hello ji </h1>
        {this.first2()}
        {a}
      </>
    );
  }
}

export default First;
