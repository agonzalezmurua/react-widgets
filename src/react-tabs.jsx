import React from 'react'
import ReactDOM from 'react-dom'
// Importing React component
import TabsWrapper from './react-tabs/tabs-wrapper.jsx'

// Base function and parameter initialization for each doc element containing the react-tab class
function ReactTabs() {
    // Searches for every element with the class react-tab
    const containers = document.getElementsByClassName('react-tab')
    if (containers.length != 0) {
        Array.from(containers).forEach( (TabRoot) => {
            const container = TabRoot.cloneNode(true)
            ReactDOM.render(
                <TabsWrapper container={ container }/>
                , TabRoot
            )
        });
    }
}

export { ReactTabs }