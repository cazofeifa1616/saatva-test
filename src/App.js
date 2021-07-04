import { useState } from 'react';
import './App.css';
import Header from './components/header'
import Main from './components/main'
import data from './assets/mocks/data.json'

function App() {
  const [mattresses] = useState(data)

  const [selectedMattress, setSelectedMattress] = useState(1)

  const [cartCount, setCartCount] = useState(0)

  return (
    <div className="app">
      <Header cartCount={cartCount}></Header>
      <Main
        mattresses={mattresses.mattresses}
        selectedMattress={selectedMattress}
        cartCount={cartCount}
        setSelectedMattress={setSelectedMattress}
        setCartCount={setCartCount}>
      </Main>
    </div>
  );
}

export default App;
