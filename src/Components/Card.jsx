import React, { Component } from 'react'
import './assets/scss/Card.scss'

export class Card extends Component {
    constructor(props) {
        super(props)

        const styles = {
            backgroundImage: `url(${props.img})`,
        }

        // console.log(props.img)

        this.state = {
            title: props.title,
            description: props.description,
            link: props.link,
            imgStyles: styles,
        }
    }

    render() {
        let {title, description, link, imgStyles} = this.state;

        if (link) {
            title = (
                <a href={link}>{title}</a> 
                );
        } 

        return (

            <React.Fragment>
                <div className="card">
                    <div className="card-container container">
                        <div className="card-title m-4">
                            <h1>{title}</h1>
                        </div>
                        <div className="card-image m-4" style={imgStyles}></div>
                        <div className="card-lead m-4">
                            {description}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Card
