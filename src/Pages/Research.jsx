import React, { Component } from 'react'
import myData from './data.json'

class Research extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="container" style={{ marginTop: "100px" }}>
                    <h1 className="display-3 my-5">Research Projects</h1>
                    {myData.map(e => (
                        <div className="reaserch-comp my-5" key={e.id}>
                            <h2 className="display-6 my-4">{e.title}</h2>
                            <p className="lead">{e.body}</p>
                            <hr className="my-2"/>
                        </div>
                    ))}
                </div>

            </React.Fragment>
        )
    }
}

export default Research
