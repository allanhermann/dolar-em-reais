import React, { Component } from 'react'

export default class Circle extends Component {
    render() {
        return (
            <div hidden>
                <svg width="310" height="310" viewBox="0 0 310 310" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.2" cx="155" cy="159" r="50" stroke="#008B57" stroke-width="4" />
                    <circle opacity="0.2" cx="155" cy="155" r="153" stroke="#008B57" stroke-width="4" />
                    <circle opacity="0.7" cx="154.5" cy="158.5" r="104.5" stroke="#008B57" stroke-width="4" />
                    <circle cx="155" cy="159" r="18" fill="#00AB63" />
                </svg>
            </div>
        )
    }
}