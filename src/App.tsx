import React from 'react';
import './App.scss';
import Content from './components/Content';
import Banner from './components/Banner';

function App() {
  return (
    <div className='Page'>
        <Banner />
        <Content />
    </div>
  );
}

export default App;
