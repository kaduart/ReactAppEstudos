import React from 'react';
import Routes from './routes';

import './styles.css';

import Header from './components/Header';
import Main from './pages/main';

// function App() {
//   return (
//     <div className="App">
//       <h1>OI!</h1>
//     </div>
//   );
// }

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);


export default App;
