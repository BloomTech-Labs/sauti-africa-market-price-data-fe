import React, { useState } from 'react'
import {
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Sticky
} from 'semantic-ui-react'
import './SideNav.scss'

const SidebarExampleDimmed = () => {
  const [visible, setVisible] = useState(true)

  return (
    <Sticky>
      <Sidebar.Pushable as={Segment} className="sticky">
        <Sidebar
          as={Menu}
          animation="push"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="wide"
          className="sidebar-items"
        >
          <br />
          <br />
          <Menu.Item as="h3" className="menu-item-position">
            API
          </Menu.Item>
          <Menu.Item as="h5" className="menu-item-position">
            Quick Start
          </Menu.Item>
          <Menu.Item as="h5" className="menu-item-position">
            Playground
          </Menu.Item>
          <Menu.Item as="h5" className="menu-item-position">
            Reference
          </Menu.Item>
          <br />
          <Menu.Item as="h3" className="menu-item-position">
            Table
          </Menu.Item>
          <Menu.Item as="h5" className="menu-item-position">
            Quick Start
          </Menu.Item>
          <Menu.Item as="h5" className="menu-item-position">
            Reference
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={false}>
          <button className="toggle-menu" onClick={() => setVisible(!visible)}>
            Press <br /> to
            <br /> toggle
            <br /> menu
          </button>
          <article>
            <Segment basic className="center-api-page">
              <br />
              <Header as="h2">
                <strong>API</strong>
              </Header>
              <Header as="h3">
                <strong>Quick Start</strong>
              </Header>
              <Header as="h3">
                <strong>Playground</strong>
              </Header>
              <Header as="h3">
                <strong>Reference</strong>
              </Header>
              <br />
              <Header as="h2">
                <strong>TABLE</strong>
              </Header>
              <Header as="h3">
                <strong>Quick Start</strong>
              </Header>
              <Header as="h3">
                <strong>Reference</strong>
              </Header>

              <Image src="/images/wireframe/paragraph.png" />
            </Segment>
          </article>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Sticky>
  )
}

export default SidebarExampleDimmed
