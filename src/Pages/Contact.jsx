import React, { Component } from 'react'
import './assets/scss/Contact.scss'

export class Contact extends Component {
    state = {
        name: "",
    }

    handleChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleClick = (e) => {
        alert(`Message Sent, ${this.state.name}`);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container contact-container">
                    <h2>Send me an Email</h2>

                    <div className="form-group">

                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                className="form-control" 
                                placeholder="" 
                                aria-describedby="helpId" 
                                onChange={this.handleChange}
                            />
                            <br />
                        </div>

                        <div className="field">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                className="form-control"
                                placeholder="" 
                                aria-describedby="helpId" 
                            />
                            <br />
                        </div>

                        <div className="field">
                            <label htmlFor="reason">Reason</label>
                            <select className="form-control" name="reason" id="reason">
                                <option>Just to say Hi</option>
                                <option>Freelance Work</option>
                                <option>Job Oppurtunity</option>
                                <option>Collaboration</option>
                                <option>Other</option>
                            </select>
                            <br />
                        </div>

                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" name="message" id="message" rows="3" />
                            <br />
                        </div>

                        <div className="field">
                            <div className="field"></div>
                            <button type="submit" className="btn btn-secondary" onClick={this.handleClick}>Send</button>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default Contact
