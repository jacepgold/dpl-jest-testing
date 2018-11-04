import React from 'react';
import { connect } from 'react-redux';

class MyComponent extends React.Component {
  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <div>{user.name} is {user.age}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: { name: 'Dave', age: 36 } }
}

export default connect(mapStateToProps)(MyComponent);

