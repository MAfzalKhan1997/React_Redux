import React, { Component } from "react";
import { updateUser } from "./Redux/Actions/authActions";
import { connect } from "react-redux";
// import { dispatch } from "rxjs/internal/observable/range";

class Child extends Component {
  state = {};

  componentDidMount() {
    console.log("props", this.props);
    this.props.updateUser({ name: "Muhammad Afzal Khan", Age: "21" });
  }

  static getDerivedStateFromProps(props) {
    console.log(props.user);
    return null;
  }

  render() {
    console.log("child render");
    return <div />;
  }
}

const mapStateToProps = state => {
  console.log("Redux State", state);
  return {
    user: state.authReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Child);
