import React from 'react'
import TabsContainer from './tabs-container.jsx'

class TabsWrapper extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const containers = this.processContainer(this.props.container)
        return (
            <div>
                <h1>Container Holder!</h1>
                { containers }
            </div>
        )
    }

    processContainer(father) {
        const containers = new Array()

        for(var i = 0; i < father.children.length; i++) {
            const container = father.children[i]
            console.log(container)
            // Evaluating valid tags for consistency, if not valid then the construction is ignored
            if (container.tagName !== 'DIV' && container.tagName !== 'SECTION') {
                console.warn('Asigned container is not a valid element, ignoring...', container)
                continue;
            } 
            if (container.children.length === 0){
                console.warn('No child content element detected in container, rendering with no content', container)
            }

            // Get sub container
            let content = container.firstElementChild == null ? '' : container.firstElementChild
            let tabTitle = container.attributes['tabs-title'].nodeValue

            containers.push(<TabsContainer key = {i} title={tabTitle} content={content.innerHTML}/>)
        }

        return containers
    }
}

export default TabsWrapper