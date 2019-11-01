import React, { useState, useRef } from 'react'
import { Container, Header, Menu } from 'semantic-ui-react'
import './SideNav.scss'

const SideNav = () => {
  const [active, setActive] = useState({ activeItem: 'home' })
  const handleItemClick = (e, { name }) => setActive({ activeItem: name })

  return (
    <div className="side-nav">
      <Menu size="massive" pointing vertical className="side-nav-items">
        <Menu.Item name="API" />
        <Menu.Item
          name="Quick Start"
          active={active.activeItem === 'Quick Start'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Playground"
          active={active.activeItem === 'Playground'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Reference"
          active={active.activeItem === 'Reference'}
          onClick={handleItemClick}
        />
      </Menu>

      <Container fluid className="center-api-column">
        <section className="articles-examples">
          <article className="left-article">
            <Header as="h2">API</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sit commodi, adipisci aliquid itaque id repellat magnam
              ea iste vel optio quas deserunt minima mollitia facilis
              laboriosam, praesentium dignissimos consequuntur?
            </p>
          </article>
          <article className="right-article">
            <Header as="h2">
              Start Acquiring the API from Above in your Profile
            </Header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sit commodi, adipisci aliquid itaque id repellat magnam
              ea iste vel optio quas deserunt minima mollitia facilis
              laboriosam, praesentium dignissimos consequuntur?
            </p>
          </article>
        </section>
        <section className="articles-examples">
          <article className="left-article">
            <Header as="h2">Quick Start</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sit commodi, adipisci aliquid itaque id repellat magnam
              ea iste vel optio quas deserunt minima mollitia facilis
              laboriosam, praesentium dignissimos consequuntur? <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus impedit laborum enim consequatur accusamus id sequi
              labore quos non magni, incidunt tempore reiciendis minus aut
              aliquid doloremque natus dolorem ipsam!
            </p>
          </article>
          <article className="right-article">
            <Header as="h2">Request & Response</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sit commodi, adipisci aliquid itaque id repellat magnam
              ea iste vel optio quas deserunt minima mollitia facilis
              laboriosam, praesentium dignissimos consequuntur?
            </p>
          </article>
        </section>
        <section className="articles-examples">
          <article className="left-article">
            <Header as="h2">Playground</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sit commodi, adipisci aliquid itaque id repellat magnam
              ea iste vel optio quas deserunt minima mollitia facilis
              laboriosam, praesentium dignissimos consequuntur? <br /> Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Maiores
              mollitia, eius porro, incidunt corporis in velit tempore fugiat
              perspiciatis voluptas ex libero expedita atque dignissimos?
              Voluptatem dignissimos vel dolores tenetur.
            </p>
          </article>
          <article className="right-article">
            <Header as="h2">Alternative example of Playground case</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sit commodi, adipisci aliquid itaque id repellat magnam
              ea iste vel optio quas deserunt minima mollitia facilis
              laboriosam, praesentium dignissimos consequuntur?
            </p>
          </article>
        </section>
        <section className="articles-examples">
          <article className="left-article">
            <Header as="h2">Reference</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sit commodi, adipisci aliquid itaque id repellat magnam
              ea iste vel optio quas deserunt minima mollitia facilis
              laboriosam, praesentium dignissimos consequuntur? <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              molestias ut. Similique, facere magni. Pariatur, veritatis nihil
              architecto, laboriosam iusto in autem modi, dignissimos
              perferendis atque cupiditate odio quos sequi.
            </p>
          </article>
          <article className="right-article">
            <Header as="h2">Example of request and Response Image???</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sit commodi, adipisci aliquid itaque id repellat magnam
              ea iste vel optio quas deserunt minima mollitia facilis
              laboriosam, praesentium dignissimos consequuntur?
            </p>
          </article>
        </section>
      </Container>
    </div>
  )
}

export default SideNav
