import React, { useState, useRef } from 'react'
import { Container, Header, Menu } from 'semantic-ui-react'
import './SideNav.scss'

const SideNav = () => {
  //Managing the state of Side Nav Tabbing between by setting the active item
  // const [active, setActive] = useState({ activeItem: 'Quick Start' })
  // const handleItemClick = (e, { name }) => setActive({ activeItem: name })

  //Applying scrolling to places of the page
  const scrollToPlay = ref => window.scrollTo(0, ref.current.offsetTop)
  const play = useRef()
  const quick = useRef()
  const refer = useRef()

  return (
    <div className="side-nav">
      <Menu size="massive" pointing vertical className="side-nav-items">
        <Menu.Item name="API" />
        <Menu.Item name="Quick Start" onClick={() => scrollToPlay(quick)} />
        <Menu.Item name="Playground" onClick={() => scrollToPlay(play)} />
        <Menu.Item name="Reference" onClick={() => scrollToPlay(refer)} />
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
        <section className="articles-examples" ref={quick}>
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
        <section className="articles-examples" ref={play}>
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
        <section className="articles-examples" ref={refer}>
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
