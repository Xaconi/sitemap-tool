import React, { Component } from 'react'

// Components
import { TestComponent } from '../TestComponent'

export class BodyComponent extends Component {
    render () {
        return (
            <div>
                <TestComponent />
                <p>BodyComponent</p>
            </div>
        )
    }
}