import React, { createContext, useState } from 'react';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState('');
  const [respoName, setRespoName] = useState('');

  const getRepos = () => {
    const API = `https://api.github.com/search/repositories?q=${inputValue}`;
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error('Nie udało się wczytać danych');
      })
      .then((response) => response.json())
      .then((data) => {
        setRespoName(inputValue);
        setError(false);
        setInputValue('');
        setData(data.items);
        setTotalCount(data.total_count);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  return (
    <StoreContext.Provider value={{ inputValue, setInputValue, getRepos, error, data, totalCount, respoName }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
