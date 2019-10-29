import React, { useState } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const SidebarExampleDimmed = () => {
  const [visible, setVisible] = useState({ visible: false })

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
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={visible}>
          <Segment basic>
            <Header as="h3">Application Content</Header>
            <Image src="/images/wireframe/paragraph.png" />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}

export default SidebarExampleDimmed
