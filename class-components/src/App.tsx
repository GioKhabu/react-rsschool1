import { Component } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header/header';
import Items from './components/Items/Items';
import { Item, StarState } from './interfaces/interfaces';
import { search } from './utils/utils';

class App extends Component<Record<string, never>, StarState> {
  constructor(props: Record<string, never>) {
    super(props);
    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    this.state = { items: [], searchTerm: savedSearchTerm };
  }

  componentDidMount() {
    this.handleSearch(this.state.searchTerm);
  }

  handleSearch = async (term: string) => {
    const items: Item[] = await search(term);
    this.setState({ items, searchTerm: term });
    localStorage.setItem('searchTerm', term);
  };

  handleSearchTermChange = (term: string) => {
    this.setState({ searchTerm: term });
  };

  render() {
    const { items, searchTerm } = this.state;
    return (
      <ErrorBoundary>
        <div className="main-wrapper">
          <div style={{ height: '20%' }}>
            <Header
              searchTerm={searchTerm}
              onSearch={this.handleSearch}
              onSearchTermChange={this.handleSearchTermChange}
            />
          </div>
          <div className="items-wrapper" style={{ height: '80%' }}>
            <Items items={items} />
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
