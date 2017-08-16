import React from 'react'

class TabsNavButton extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        // If not title is given then it renders the index instead
        return (
            <a className="tabs-nav-elem" onClick = {() => { this.props.clicked(this.props.index)}}>
                <span className="tabs-nav-text">{this.props.title ? this.props.title : this.props.index}</span>
            </a>
        )
    }
}

export default TabsNavButton