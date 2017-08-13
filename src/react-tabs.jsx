import React from 'react'
import ReactDOM from 'react-dom'
// Importing React component
import TabsContainer from './react-tabs/tabs-container.jsx'

// Constructor
const ContainerConstructor = (container) => {
    // Get sub container
    const content = container.firstChild()
    const tabTittle = container.tabTittle

    console.log('kkck')
    // Render function for each container
    // React.render(
    //     <TabsContainer tabContent="{content}" tabTittle="{tabTittle}"/>
    //     , container
    // )
}

// Base function and parameter initialization for each doc element containing the react-tab class
function ReactTabs() {
    // Searches for every element with the class react-tab
    const containers = document.getElementsByClassName('react-tab')
    if (containers.length != 0) {
        containers.forEach( (container) => {
            switch (container) {
                // Evaluating valid tags for consistency, if not valid then the construction is ignored
                case container.tagName !== 'div' || container.tagName !== 'section':
                    Console.warn('Asigned container is not a valid element, ignoring...', container)
                    return;
                case !container.children || container.children.length > 1:
                    Console.warn('No content element detected, attempting to construct', container)
                    break;
                default:
                    break;
            }
            // Initates the construction of each element
            ContainerConstructor(container)
        });
    }
}

export { ReactTabs }