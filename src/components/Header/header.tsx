import React, { useEffect, useState } from 'react';
import './header.css';

interface Props {
  onSearch: (term: string) => void;
  searchTerm: string;
}

const Header: React.FC<Props> = ({ onSearch, searchTerm }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState('');

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const trimmedTerm = localSearchTerm.trim();
    onSearch(trimmedTerm);
  };

  return (
    <div className="header-wrapper">
      <input
        type="text"
        value={localSearchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Header;
