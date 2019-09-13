
// TODO:
// 1. Create image component which zooms on click
// 2. Responsiveness
//   2.1. Make Table Fixed Width with overflow
//   2.2. Make text left aligned 


import React, { Component } from 'react';
import Portfolio from '../Components/Portfolio';

import './assets/scss/Home.scss';

import img1 from './assets/images/unity-certification.png';
import img2 from './assets/images/green-belt-certification.png';

export class Home extends Component {
    constructor() {
        super()
        this.myRef = React.createRef();
        this.state = {
            data: []
        }
    }

    scroll(ref) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    componentDidMount() {
        let table = fetch("https://api.github.com/users/ksc3899/repos")
            .then(res => res.json())
            .then(json => this.setState({ data: json }))
        return table;
    }

    render() {
        return (
            <React.Fragment>
                <section className="landing">
                    <div className="dark-overlay dark-overlay-gradient">
                        <div className="landing-inner container">
                            <h1 className="x-large my-3">Sai Charan Kommana</h1>
                            <p className="lead">Inquisitive. Innovative. Curious. </p>


                            <div className="arrow-nav">
                                <p className="arrow-nav-text">Read More</p>
                                <button onClick={() => { this.scroll(this.myRef) }} className="arrow-btn">
                                    <div className="down-arrow"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container my-work"  ref={this.myRef}>
                    <h1 className="large py-5">My Work</h1>
                    <p className="quote">Blessed with an inquisitive mind, innovation has always been my cup of tea. I have performed several research and innovation projects in fields of Mathematics and Game Development. A man with utmost dedication and focus towards his goals, I always am curiously looking forward to learning new things such as technologies and ways of life.</p>
                    <table className="table py-5">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Language</th>
                            </tr>
                        </thead>
                        <tbody ref="github_table_body">
                            {this.state.data.map(el => (
                                <tr key={el.id}>
                                    <td>
                                        <a href={el.html_url}>
                                            {el.name}
                                        </a>
                                    </td>
                                    <td>{el.description}</td>
                                    <td>{el.language}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="container-fluid">
                    <Portfolio
                        theme="dark"
                        img={img1}
                        title="Unity Certified Associate Game Developer."
                        text="Unity is one of the most in-demand tech skills and has one of the highest forecasted growth rates, at over 35% over the next two years. Special recognition awards at Megathon'17 and Megathon '18"
                        textOn="left"
                    />
                    <Portfolio
                        // theme="dark"
                        img={img2}
                        title="Lean Six Sigma - Green Belt Certified Professional"
                        text="A certified Lean Six Sigma Green Belt is a professional who is well versed in the core to advanced elements of Lean Six Sigma Methodology, who leads improvement projects and serves as a team member as a part of more complex improvement projects lead by a Certified Black Belt professional."
                        textOn="right"
                    />
                </div>
            </React.Fragment>

        )
    }
}

export default Home
