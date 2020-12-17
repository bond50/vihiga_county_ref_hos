import React, {Component} from 'react'
import {Accordion, Menu} from 'semantic-ui-react'
import {
    about,
    contact,
    covid,
    logo,
    media,
    services,
    tenders,
    training
} from "../../desktop/navigationItems/links/links";


export default class AccordionExampleMenu extends Component {
    state = {activeIndex: 0}
    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index
        this.setState({activeIndex: newIndex})
    }

    render() {
        const {activeIndex} = this.state
        const {handleSidebarHide} = this.props

        return (
            <Accordion as={Menu} vertical fluid secondary inverted size='huge'>
                {logo(handleSidebarHide)}
                <Menu.Item as='a'>
                    <Accordion.Title
                        active={activeIndex === 0}
                        content='About Us'
                        index={0}
                        onClick={this.handleClick}
                    />
                    <Accordion.Content active={activeIndex === 0}>
                        <Menu.Menu>
                            {about(handleSidebarHide)}
                        </Menu.Menu>
                    </Accordion.Content>
                </Menu.Item>
                <Menu.Item as='a'>
                    <Accordion.Title
                        active={activeIndex === 1}
                        content='Services'
                        index={1}
                        onClick={this.handleClick}
                    />
                    <Accordion.Content active={activeIndex === 1} content={services(handleSidebarHide)}/>
                </Menu.Item>
                <Menu.Item as='a'>
                    <Accordion.Title
                        active={activeIndex === 2}
                        content='Media'
                        index={2}
                        onClick={this.handleClick}
                    />
                    <Accordion.Content active={activeIndex === 2} content={media(handleSidebarHide)}/>
                </Menu.Item>
                {contact(handleSidebarHide)}
                {tenders(handleSidebarHide)}
                {training(handleSidebarHide)}

                <Menu.Item as='a'>
                    <Accordion.Title
                        active={activeIndex === 3}
                        content='Covid'
                        index={3}
                        onClick={this.handleClick}
                        inverted
                    />
                    <Accordion.Content active={activeIndex === 3} content={covid(handleSidebarHide)}/>
                </Menu.Item>
            </Accordion>
        )
    }
}


