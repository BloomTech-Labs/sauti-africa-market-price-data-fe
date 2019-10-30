import React, { useState } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import './SideNav.scss'

const SidebarExampleDimmed = () => {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Press to toggle menu</button>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="push"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="wide"
        >
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
          <Segment basic>
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
            <div className="space"></div>
            <Image src="/images/wireframe/paragraph.png" />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}

export default SidebarExampleDimmed
