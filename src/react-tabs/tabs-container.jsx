import React from 'react'

class TabsContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="tabs-content" dangerouslySetInnerHTML={{__html: [this.props.content]}}></div>
        )
    }
}

export default TabsContainer