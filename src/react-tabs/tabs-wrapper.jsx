import React from 'react'
import TabsContainer from './tabs-container.jsx'
import TabsNavButton from './tabs-navButton.jsx'

class TabsWrapper extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            indexOfActiveTab : null,
            containers: [],
            navButtons: []
        }

        this.changeIndexOfActiveTab = this.changeIndexOfActiveTab.bind(this)
    }

    componentWillMount() {
        const fatherContainer = this.props.fatherContainer
        let indexOfActiveTab = null
        // Initialization of components
        this.createContainers(fatherContainer)
        .then( (returndata) => {
            if (returndata.containers.length > 0) {
                indexOfActiveTab = 0
            }

            this.setState({ 
                 containers: returndata.containers,
                 navButtons: returndata.navButtons,
                 indexOfActiveTab : indexOfActiveTab
            })
        })
        .catch((err) => {
            console.error(err)
        })
    }

    render() {
        return (
            <div className="tabs-wrapper">
                <div className="tabs-nav-wrapper"v>
                    {this.state.navButtons}
                </div>
                {this.state.containers[this.state.indexOfActiveTab]}
            </div>
        )
    }

    /**
     * Receives a JavaScript DOM element, whose each children is proccesed into a Tab-Container and Tab-NavButton component and then
     * returned as Arrays in a Promise
     * @param {*} father 
     * @return Array
     */
    createContainers(father) {
        const containers = new Array()
        const navButtons = new Array()

        return new Promise((resolve) => {
            // Getting each child element (container)
            for(var i = 0; i < father.children.length; i++) {
                const child = father.children[i]

                // Evaluating valid tags for consistency, if not valid then the construction is ignored
                if (child.tagName !== 'DIV' && child.tagName !== 'SECTION') {
                    console.warn('Container is not an allowed element, ignoring...', child)
                    continue
                } 
                if (child.children.length === 0){
                    console.warn('No childs in container, attempting to render container with no content', child)
                }
                if (child.children.length > 1) {
                    console.warn('More than 1 children detected, only the first one will render in the container', child)
                }

                // Get first children of the container container
                let content = child.firstElementChild == null ? '' : child.firstElementChild
                // Extracting values form tag attribute
                let tabTitle = child.attributes['tabs-title'].nodeValue
                
                // Pushing into the arrays
                containers.push(<TabsContainer key = {i} content={content.innerHTML}/>)
                navButtons.push(<TabsNavButton key = {i} title = {tabTitle} index = {i} clicked = {this.changeIndexOfActiveTab}/>)
            }
            resolve({ containers: containers, navButtons: navButtons})
        })
    }

    /**
     * Changes the index of the current active tab
     * @param {*} index 
     */
    changeIndexOfActiveTab(index) {
        this.setState({ indexOfActiveTab: index })
    }
}

export default TabsWrapper