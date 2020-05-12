import React from 'react';
import {Link,} from 'react-router-dom';

function Home()  {

        return (
            <div className="nav_home">

                <Link classeName="btn links" to="/Contactlist">Contact</Link>
                <Link classeName="btn links" to="/addcontact">Add contact</Link>

            </div>
        );
    }


export default Home;