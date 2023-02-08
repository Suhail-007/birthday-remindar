import React, { useState } from 'react';
import data from './data';
import List from './components/List';

function App() {
  const [usersList, setUsersList] = useState(data);

  function clearAll() {
    setUsersList([]);
  }

  const renderList = () => {
    if (usersList.length) {
      return <List usersList={data} />
    } else {
      return <h4>List cleared.!</h4>
    }
  }

  return (
    <>
    <main>
      <div className='container'>
        <h3>5 Birthday Todays</h3> 
        {renderList()}
        <button onClick={clearAll}>Clear All</button>
      </div>
    </main>
  </>
  )
}

export default App;