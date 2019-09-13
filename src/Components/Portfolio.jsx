import React, { Component } from 'react'
import './assets/scss/Portfolio.scss'

export class Portfolio extends Component {
    constructor(props) {
        super(props);

        const styles = {
            backgroundImage: `url(${props.img})`,
            height: "15rem",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
        }

        this.state = {
            title: props.title,
            text: props.text,
            classes: props.theme,
            styles: styles,
            textOn: props.textOn,
            img: props.img
        }
    }

    getHTML = () => {
        let sec;
        if (this.state.textOn === "left") {
            sec = (
                <div className={this.state.classes}>
                    <div className="container section">
                        <div className="row">
                            <div className="col-sm-12 col-md-9 p-5">
                                <h1>{this.state.title}</h1>
                                <p>{this.state.text}</p>
                            </div>
                            <div className="col-sm-0 col">
                                <div className="portfolio-image" style={this.state.styles}></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            sec = (
                <div className={this.state.classes}>
                    <div className="container section">
                        <div className="row">
                            <div className="col">
                                <div className="portfolio-image" style={this.state.styles}>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-9 p-5">
                                <h1>{this.state.title}</h1>
                                <p>{this.state.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return sec;
    }


    render() {
        return (
            <React.Fragment>
                {this.getHTML()}
            </React.Fragment>
        )
    }
}

export default Portfolio
