import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class AddContact extends Component {
    state={
        name:"",
        email:"",
        phone:""

    };

    componentDidMount() {
    }
    handleChange=(event)=>{
        const {name,value} = event.target;

        this.setState({
            [name]:value
        });

    };

    AddContact=()=>{

   axios.post('/add_contact',this.state)

    };


    render() {
        return (
            <div className="addForms">
                <input onChange={this.handleChange} placeholder="name..." type="form-control" name="name"/>
                <input onChange={this.handleChange} placeholder="email..." type="form-control" name="email"/>
                <input onChange={this.handleChange} placeholder="phone..." type="form-control" name="phone"/>
                <Link to='/'><button onClick={()=>this.AddContact()} className="btn btn-primary">Add Contact</button></Link>

            </div>
        );
    }
}

export default AddContact;