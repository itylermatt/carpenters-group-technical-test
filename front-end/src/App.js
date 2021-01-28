import {Fragment} from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import BookingsTable from './components/bookingsTable/bookingsTable';
import CreateBookingsTable from './components/createBookingsTable/create-bookings-table';
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import EditBookingsTable from './components/editBookingsTable/editBookingsTable';

function App() {
  return (
    <Fragment>
        <Router>
            <NavBar />
            <Switch>
                <Route exact path={'/'} component={BookingsTable} />
                <Route exact path={'/create-booking'} component={CreateBookingsTable} />
                <Route exact path={'/edit-booking'} component={EditBookingsTable} />
            </Switch>
        </Router>
    </Fragment>
  );
}

export default App;
