import React from 'react'
import ReactDOM from 'react-dom'
import TabsWrapper from './tabs-wrapper.jsx'

// Base function and parameter initialization for each doc element containing the react-tab class
function ReactTabs() {
    // Searches for every element with the class react-tab
    const containers = document.getElementsByClassName('react-tab')
    if (containers.length != 0) {
        Array.from(containers).forEach( (TabRoot) => {
            // Copy of the content of the container
            const fatherContainer = TabRoot.cloneNode(true)
            // Initialization of the component
            ReactDOM.render(
                <TabsWrapper title = {fatherContainer.attributes['title'].nodeValue} fatherContainer = {fatherContainer}/>
                , TabRoot
            )
        });
    }
}

export { ReactTabs }