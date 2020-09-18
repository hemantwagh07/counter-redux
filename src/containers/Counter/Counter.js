import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map((result) => (
                        <li key={result.key} onClick={() => this.props.onDeleteResult(result.key)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (stateFromRedux) => {
    return {
        ctr: stateFromRedux.counter,
        storedResults: stateFromRedux.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddCounter: () => dispatch({ type: 'ADD', payload: { value: 5 } }),
        onSubtractCounter: () => dispatch({ type: 'SUBTRACT', payload: { value: 5 } }),
        onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
        onDeleteResult: (key) => dispatch({ type: 'DELETE_RESULT', payload: { idtoDelete: key } }),// Getting a key as paramenter passed from UI(Where we are calling a function) and sending it as payload to reducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);