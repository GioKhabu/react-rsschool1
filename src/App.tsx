import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header/header';
import Items from './components/Items/Items';
import NotFound from './components/NotFound/NotFound';
import Pagination from './components/Pagination/Pagination';
import useLocalStorage from './hooks/useLocalStorage';
import { ApiItem, Item } from './interfaces/interfaces';
import { search } from './utils/utils';

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');
  const [currentPage, setCurrentPage] = useState(1); // Track current page number
  const [totalPages, setTotalPages] = useState(1); // Track total pages

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

  useEffect(() => {
    const fetchItemsByPage = async () => {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${searchTerm}&page=${currentPage}`
      );
      const data = await response.json();
      setItems(
        data.results.map((item: ApiItem) => ({
          name: item.name,
          birthYear: item.birth_year || '',
          eyeColor: item.eye_color || '',
          skinColor: item.skin_color || '',
          gender: item.gender || '',
          hairColor: item.hair_color || '',
          height: item.height || '',
          mass: item.mass || '',
        }))
      );
      setTotalPages(Math.ceil(data.count / 10)); // Assuming 10 items per page
    };

    fetchItemsByPage();
  }, [currentPage, searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset page to 1 when performing a new search
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ErrorBoundary>
      <div className="main-wrapper">
        <div style={{ height: '20%' }}>
          <Header onSearch={handleSearch} searchTerm={searchTerm} />
        </div>
        <div className="items-wrapper" style={{ height: '80%' }}>
          <Items items={items} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
