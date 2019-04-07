import React,  { Component } from 'react';

class ContactCard extends Component {
    
    render() {

        return (
            <div className="contact-card">
                <img src="{this.props.contact.imgUrl}" alt="" srcSet="" />
                <h3>{this.props.contact.name}</h3>
                <h3>{this.props.answer}</h3>
                <input type="checkbox" name="" id="{this.props.contact.id}" checked={this.props.contact.checked} onChange={this.onChangeHandler}/>
                <p>Phone: {this.props.contact.phone}</p>
                <p>Email: {this.props.contact.email}</p>
            </div>
        )
    }

    onChangeHandler() {
        console.log('chankde');
    }
}

export default ContactCard

