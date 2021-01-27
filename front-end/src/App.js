import {Fragment} from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import BookingsTable from './components/bookingsTable/bookingsTable';

function App() {
  return (
    <Fragment>
      <NavBar />
      <BookingsTable />
    </Fragment>
  );
}

export default App;
