import React from 'react'

class TabsContainer extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <span>{ this.props.title }</span>
                <div dangerouslySetInnerHTML={{__html: [this.props.content]}}></div>
            </div>
        )
    }
}

export default TabsContainer