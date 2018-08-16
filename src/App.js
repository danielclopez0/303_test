import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { fetchData } from './actions/303';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { data, fetching } = this.props.wireCutter;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the test</h1>
        </header>
        { fetching &&
          <p className="App-intro">Loading...</p>
        }
        { data && data.length > 0 &&
          data.map(item => {
            return <p className="App-intro" key={item.id} dangerouslySetInnerHTML={{__html: item.content.rendered}} />;
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
 wireCutter: state.reducer303,
})

const mapDispatchToProps = dispatch => ({
 fetchData: () => dispatch(fetchData())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
