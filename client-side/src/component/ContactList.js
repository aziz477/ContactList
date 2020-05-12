import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class ContactList extends Component {

    state={
        contactList:[]
    };

    componentDidMount() {
        this.getContactList()
    }

    getContactList = () => {
        axios.get("/contact_list")
            .then(res => this.setState({ contactList: res.data }))
            .catch(err => console.error(err))
    };

    deleteContact=(id)=>{

        axios.delete(`/delete_contact/${id}`);
        this.getContactList();

    };


    render() {

        const { contactList } = this.state;
        console.log(contactList);
        return (
            <div className="contactPage">
                {contactList.map(contact=>
                    <div className="card-container">
                        <li>{contact.name}</li>
                        <li>{contact.email}</li>
                        <li>{contact.phone}</li>
                        <div>
                            <button className="btn btn-danger" onClick={()=>this.deleteContact(contact._id)}>delete</button>
                        <Link to={`/update_contact/${contact._id}`} classeName="btn btn-success" >Update</Link>
                        </div>
                    </div>
                )}

            </div>

        );
    }
}

export default ContactList;