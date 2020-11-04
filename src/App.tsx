import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ReducerState } from "./interfaces/index";
import * as appActions from "./store/actions/index";

interface AppProps {
  App: ReducerState;
  getToDoList: Function;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  console.log(props);

  return (
    <div>
      <button onClick={() => props.getToDoList()}>d</button>
    </div>
  );
};

const mapStateToProps = (state: ReducerState) => {
  return {
    App: state,
  };
};

const mapDispathToProps = (dispatch: Dispatch) => {
  return bindActionCreators(appActions, dispatch);
};

export default connect(mapStateToProps, mapDispathToProps)(App);
