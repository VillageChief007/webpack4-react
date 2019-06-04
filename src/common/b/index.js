import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.scss';

export default class B extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  setInProp() {
    this.setState((preState) => ({ show: !preState.show }));
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.setInProp.bind(this)}>
        Click to Enter
        </button>
        <CSSTransition in={this.state.show} timeout={200} unmountOnExit classNames="my-node">
          <div>
            {"I'll receive my-node-* classes"}
          </div>
        </CSSTransition>
      </div>
    );
  }
}
