import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";



class UpdateContact extends Component {

    state={
      contact:{}
    };
    componentDidMount() {
        this.getTargetContact();
    }

    getTargetContact=()=>{

        axios.get(`/contact_list/${this.props.params.id}`).then(res=>this.setState({contact:res.data}));

    };



    render() {
        const{name,email,phone}=this.state.contact;
        return (
            <div>
                <div className="updateForms">
                    <input value={name} onChange={event=> this.setState({contact:{...this.state.contact,name:event.atarget.value}})} placeholder="name..." type="form-control" name="name"/>
                    <input value={email} onChange={event=> this.setState({contact:{...this.state.contact,name:event.atarget.value}})}  placeholder="email..." type="form-control" name="email"/>
                    <input value={phone} onChange={event=> this.setState({contact:{...this.state.contact,name:event.atarget.value}})} placeholder="phone..." type="form-control" name="phone"/>
                    <Link to="/update">
                        <button onClick={()=>{axios.put(`/update_contact/${this.props.match.params.id}`, { name, email, phone })}} >
                            Edit Contact
                        </button>
                    </Link>

                </div>
            </div>
        );
    }
}

export default UpdateContact;