const e = React.createElement;


class TestButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  getLike(Name){
    return e(
      'button',
      { onClick: () => this.setState({ liked: !this.state.liked }) },
      Name
    );
  }

  render() {
    if (this.state.liked) {
      return this.getLike('You liked this yep!');
    }
    else {
      return this.getLike('Like');
    }
  }
}

const domContainer = document.querySelector('#test_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(TestButton));