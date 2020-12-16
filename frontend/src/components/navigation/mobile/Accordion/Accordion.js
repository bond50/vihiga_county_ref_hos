import React, {Component} from 'react'
import {Accordion, Form, Menu, Dropdown} from 'semantic-ui-react'
import {about, contact, covid, media, services, tenders, training} from "../../desktop/navigationItems/links/links";


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

        return (
            <Accordion as={Menu} vertical fluid secondary inverted>
                <Menu.Item>
                    <Accordion.Title
                        active={activeIndex === 0}
                        content='About Us'
                        index={0}
                        onClick={this.handleClick}
                    />
                    <Accordion.Content active={activeIndex === 0}>
                           <Dropdown.Menu>
                               {about()}
                           </Dropdown.Menu>
                    </Accordion.Content>
                </Menu.Item>
                <Menu.Item>
                    <Accordion.Title
                        active={activeIndex === 1}
                        content='Services'
                        index={1}
                        onClick={this.handleClick}
                    />
                    <Accordion.Content active={activeIndex === 1} content={services()}/>
                </Menu.Item>
                <Menu.Item>
                    <Accordion.Title
                        active={activeIndex === 2}
                        content='Media'
                        index={2}
                        onClick={this.handleClick}
                    />
                    <Accordion.Content active={activeIndex === 2} content={media()}/>
                </Menu.Item>

                 <Menu.Item>
                    <Accordion.Title
                        active={activeIndex === 3}
                        content='Covid'
                        index={3}
                        onClick={this.handleClick}
                    />
                    <Accordion.Content active={activeIndex === 3} content={covid()}/>
                </Menu.Item>
            </Accordion>
        )
    }
}


