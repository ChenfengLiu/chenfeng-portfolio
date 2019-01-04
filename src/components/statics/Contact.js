import React, { Component } from 'react';
import Banner from '../lib/banner/Banner';
import Form from '../lib/Form';
// import '../../stylesheets/pages/Contact.css';

class Contact extends Component {
  state = {
    fields: {}
  };

  onChange = (updatedValue) => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <div>
        <div className="contact-banner">
          <Banner title={"get in touch"}
            subTitle={"send a message"}
            image={"watch-factory.png"}/>
        </div>
        <div className="contact-content">
          <h3>Drop a line below</h3>
          <p>Please feel free to send me a message anytime.</p>
          <div className="form-body">
            <Form onChange={fields => this.onChange(fields)} />

            {/*
              <p>{JSON.stringify(this.state.fields, null, 2)}</p>
            */}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
