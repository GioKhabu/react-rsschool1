import React, { useEffect, useState } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header/header';
import Items from './components/Items/Items';
import useLocalStorage from './hooks/useLocalStorage';
import { Item } from './interfaces/interfaces';
import { search } from './utils/utils';

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.trim() === '') {
        const allItems: Item[] = await search('');
        setItems(allItems);
      } else {
        const fetchedItems: Item[] = await search(searchTerm);
        setItems(fetchedItems);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <ErrorBoundary>
      <div className="main-wrapper">
        <div style={{ height: '20%' }}>
          <Header onSearch={handleSearch} searchTerm={searchTerm} />
        </div>
        <div className="items-wrapper" style={{ height: '80%' }}>
          <Items items={items} />{' '}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
