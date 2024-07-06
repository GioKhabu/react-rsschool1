import { Component } from 'react';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import ErrorBoundary from './components/ErrorBoundary';
import { search } from './utils/utils';
import { StarState } from './interfaces/interfaces';
import './App.css'



class App extends Component<{}, StarState> {
  constructor(props: {}) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    this.handleSearch('');
  }

  handleSearch = async (term: string) => {
    const items = await search(term);
    this.setState({ items });
  };

  render() {
    return (
      <ErrorBoundary>
        <div className='main-wrapper'>
          <div style={{ height: '20%' }}>
            <Header onSearch={this.handleSearch} />
          </div>
          <div className='items-wrapper' style={{ height: '80%' }}>
            <Items items={this.state.items} />
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
