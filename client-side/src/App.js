import React from 'react';
import './App.css';
import ContactList from "./component/ContactList";
import AddContact from "./component/AddContact";
import {Route} from 'react-router-dom';
import Home from "./component/Home";
import {BrowserRouter} from 'react-router-dom';
import UpdateContact from "./component/UpdateContact";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <header>
                <Route  path={'/'} component={Home}/>
                <Route  excact path={'/ContactList'} component={ContactList} />
                <Route  exact  path={'/AddContact'} component={AddContact}/>
                <Route  exact  path={'/update_contact/:id'} component={UpdateContact}/>

            </header>

        </BrowserRouter>

    </div>
  );
}

export default App;
