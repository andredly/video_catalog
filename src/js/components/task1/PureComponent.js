import React from 'react';

class PureComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
    };
  }

  render() {
    return <div className = "alert alert-secondary">{`${this.state.title} from React.PureComponent`}</div>;
  }
}

export default PureComponent;
