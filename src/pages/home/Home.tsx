import SearchBar from '../../widgets/searchBar/SearchBar';
import CardList from '../../widgets/cardList/CardList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [itemList, setItemList] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    return () => {
      fetch(
        'https://api.unsplash.com//search/photos?query=moscow&client_id=_5QFGOFSoW2PbJhc0W0nrJlaWaj8DDpmpigU7FAnB8k'
      )
        .then((response) => response.json())
        .then((data) => setItemList(data.results));
    };
  }, [query]);

  return (
    <main className="main">
      <SearchBar />
      <CardList itemList={itemList} />
    </main>
  );
};

export default Home;
