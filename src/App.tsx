import { useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import CardSelector from './components/card-selector/card-selector.component';
import MESSAGES from './constants/constants';
import { getData } from './utils/data.utils';

export type Monster = {
  id: string;
  name: string;
  email: string;
  username: string;
  selectedMonster: string;
}

const App = () => {
  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [selectedMonster, setSelectedMonster] = useState("1");
  
  useEffect(()=>{
    const fetchData = async () => {
      const data = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(data);
    }
    fetchData();
  },[]);

  useEffect(()=>{
    const newFilteredMonsters=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    setFilteredMonsters(newFilteredMonsters);
  },[monsters,searchField])
  
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>):void=>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
  const handleChange = (event: ChangeEvent<HTMLSelectElement>):void => {
    setSelectedMonster(event.target.value)
    console.log("APP.tSX: ",selectedMonster)
  }


  return[
    <div key={'AppCaller'} className="App">
        <h1 className='app-title'>Monsters</h1>
        <div className='search-select-container'>
          <SearchBox
            className='monsters-search-box'
            onChangeHandler={onSearchChange}
            placeholder={MESSAGES.MESSAGE_SEARCHBOX}
          />
          <CardSelector
            className='card-selector-drop'
            onChangeHandler={handleChange}
          />
        </div>
        <CardList 
          monsters={filteredMonsters}
          selectedMonster={selectedMonster}
        />
      </div>
  ]
}

export default App;