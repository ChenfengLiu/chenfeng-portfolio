import React, { Component } from "react";
import * as firebase from 'firebase';
import classes from '../../stylesheets/lib/Form.css';

class Form extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    canClick: true
  };

  change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    //user can only send one MESSAGE
    this.setState({canClick: !this.state.canClick});

    //reference notes collection
    var notesRef = firebase.database().ref('notes');

    //save new note
    var newNoteRef = notesRef.push();
    newNoteRef.set({
      titile: this.state.name + " ||| " + this.state.email,
      body: this.state.subject + " ||| " + this.state.message
    });
    console.log(this.state.canClick);

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    this.props.onChange({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  render() {
    return (
      <article>
        <form className={classes.contactForm}>
          <p className={classes.contactName}>
            <label>NAME *</label>
            <input
              name="name"
              value={this.state.name}
              onChange={e => this.change(e)}
            />
          </p>

          <p className={classes.contactEmail}>
            <label>EMAIL *</label>
            <input
              name="email"
              value={this.state.email}
              onChange={e => this.change(e)}
            />
          </p>

          <p className={classes.contactSubject}>
            <label>SUBJECT</label>
            <input
              name="subject"
              value={this.state.subject}
              onChange={e => this.change(e)}
            />
          </p>
          <p className={classes.contactMessage}>
            <label>MESSAGE</label>
            <textarea
              name="message"
              rows="4"
              value={this.state.message}
              onChange={e => this.change(e)}
            />
          </p>
          {(this.state.canClick) ?
            <a className="button button-dark" onClick={e => this.onSubmit(e)}>SEND MESSAGE</a> :
            <a className="button button-accent disable">MESSAGE SENT</a>
          }

        </form>
      </article>
    );
  }
}

export default  Form;
