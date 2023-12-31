import { Component } from "react";

class ClassBased extends Component {
  state = {
    show: false,
    count: 0,
    todos: [],
  };

  showToggleHandler() {
    this.setState({ show: !this.state.show });
  }

  countClickHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  constructor() {
    super();
    console.log("CONSTRUCTOR");
  }

  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => this.setState({ todos }));
  }

  componentDidUpdate() {
    console.log("COMPONENT DID UPDATE");
  }

  componentWillUnmount() {
    console.log("COMPONENT WILL UNMOUNT");
  }

  //   shouldComponentUpdate() {
  //     const rnd = (Math.random() * 10).toFixed(0);
  //     console.log("SHOULD COMPONENT UPDATE", rnd);
  //     return rnd > 3;
  //   }

  render() {
    console.log("RENDER");
    return (
      <div>
        <h1>Class Based Component renders!</h1>
        <button
          className="btn btn-primary"
          onClick={this.showToggleHandler.bind(this)}
        >
          {this.state.show ? "Hide" : "Show"}
        </button>

        <button onClick={this.countClickHandler} className="btn btn-success">
          {this.state.count}
        </button>
        {this.state.show && <p>This is dynamic paragraph!</p>}

        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassBased;
