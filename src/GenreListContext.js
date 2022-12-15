import {createContext, useState} from 'react';

export const GenreListContext = createContext();

export const GenreListContextProvider = ({ children }) => {
    const [genreList, setGenreList] = useState([]);
  
    return (
      <GenreListContext.Provider value={{genreList, setGenreList,}}>
        {children}
      </GenreListContext.Provider>

    );
};