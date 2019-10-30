import React, { useState } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import './SideNav.scss'

const SidebarExampleDimmed = () => {
  const [visible, setVisible] = useState({ visible: true })

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Press to toggle menu</button>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <br />
          <Menu.Item as="a">
            <strong>API</strong>
          </Menu.Item>
          <Menu.Item as="a">Quick Start</Menu.Item>
          <Menu.Item as="a">Playground</Menu.Item>
          <Menu.Item as="a">Reference</Menu.Item>
          <br />
          <Menu.Item as="a">
            <strong>Table</strong>
          </Menu.Item>
          <Menu.Item as="a">Quick Start</Menu.Item>
          <Menu.Item as="a">Reference</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>
            <Header as="h3">Application Content</Header>
            <div className="space">BIG SPACE</div>
            <Image src="/images/wireframe/paragraph.png" />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}

export default SidebarExampleDimmed
