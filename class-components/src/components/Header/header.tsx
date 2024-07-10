import React, { Component } from 'react';
import './header.css';

interface Props {
  searchTerm: string;
  onSearch: (term: string) => void;
  onSearchTermChange: (term: string) => void;
}

class Header extends Component<Props> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onSearchTermChange(event.target.value);
  };

  handleSearch = () => {
    const trimmedTerm = this.props.searchTerm.trim();
    this.props.onSearch(trimmedTerm);
  };

  render() {
    return (
      <div className="header-wrapper">
        <input
          type="text"
          value={this.props.searchTerm}
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Header;
