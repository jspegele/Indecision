class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
        {
          this.state.visibility ? 'Hide Details' : 'Show Details'
        }
        </button>
        {this.state.visibility  && <p>Here are some details</p>}
    </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visible = true;

// const toggleVisibility = () => {
//   visible = !visible;
//   render();
// }

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//       {
//         visible ? 'Hide Details' : 'Show Details'
//       }
//       </button>
//       {visible  && <p>Here are some details</p>}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();