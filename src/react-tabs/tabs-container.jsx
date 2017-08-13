import React from 'react'

class TabsContainer extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <span>{props.tabTitle}</span>
        )
    }
}