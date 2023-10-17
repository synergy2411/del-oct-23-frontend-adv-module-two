import { Component } from "react";

const Hoc = (OtherComp) => {
  class EnhancedComponent extends Component {
    state = {
      counter: 0,
    };

    increaseCounter = () => this.setState({ counter: this.state.counter + 1 });
    render() {
      return (
        <OtherComp
          counter={this.state.counter}
          increaseCounter={this.increaseCounter}
        />
      );
    }
  }

  return EnhancedComponent;
};

export default Hoc;
