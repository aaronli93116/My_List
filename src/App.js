import React, { Component } from "react";
import ListElement from "./Components/listElement";
import { connect } from "react-redux";
import * as actions from "./Actions";
import "./styles.css";

class App extends Component {
  removeEle = id => {
    this.props.removeEle(id);
  };
  addEle = id => {
    this.props.addEle(id);
  };
  render() {
    return (
      <div className="App">
        <h1>Netflix</h1>
        <h2>My List</h2>
        <ul className="List">
          {this.props.mylist.map((ele, index) => {
            return (
              <li className="Show" key={ele.id}>
                <div>
                  <ListElement ele={ele} />
                  <button
                    className="btn1"
                    onClick={() => this.removeEle(index)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <h2>My Recommend</h2>
        <ul className="List">
          {this.props.recommendations.map((ele, index) => {
            return (
              <li className="Show" key={ele.id}>
                <div>
                  <ListElement ele={ele} />
                  <button className="btn2" onClick={() => this.addEle(index)}>
                    ADD
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mylist: state.mylist,
    recommendations: state.recommendations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeEle: id => {
      dispatch(actions.removeEle(id));
    },
    addEle: id => {
      dispatch(actions.addEle(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
