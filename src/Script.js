import React from 'react'

export class Script extends React.Component {
    shouldComponentUpdate () {
        return false
    }

    componentDidMount() {
        const { children, ...attrs } = this.props
        const script = document.createElement("script");

        Object.assign(script, attrs)
        if (children) {
            script.innerHTML = children
        }
    
        document.body.appendChild(script);
    }

    render () {
        return null
    }
}
