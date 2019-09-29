import React, { Component, createContext } from 'react';

const Context = createContext();

const { Provider, Consumer: DataConsumer } = Context;

class DataProvider extends Component {
  state = {};
  actions = {
    setPos: pos => {
      console.log('setPos', pos);
      this.setState({ pos });
    },
    setData: data => this.setState({ data }),
    setInputType: type => this.setState({ type }),
    setPlaceList: (placeList, type) => this.setState({ placeList, type }),
  };

  render() {
    const { state, actions } = this;
    const value = { state, actions };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

function withData(WrappedComponent) {
  return function withData(props) {
    return (
      <DataConsumer>
        {({ state, actions }) => (
          <WrappedComponent {...{ ...state, ...actions, ...props }} />
        )}
      </DataConsumer>
    );
  };
}

export { DataProvider, DataConsumer, withData };
