import Logo from './logo.png'

const Navbar = () => {
  return <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/#">
        <img src={Logo}
             alt="logo" width="150"
             height="30" />
      </a>
    </div>
  </nav>
}

const PickupCard = ({ field, day, time, address, contact }) => {
    return (
        <div className="column is-full">
            <div className="card">
                <header className="card-header has-text-centered">
                    <p className="card-header-title is-capitalized">
                        {field}
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <section>
                            <div className="container">
                                <nav className="level is-mobile">
                                    <div className="level-item has-text-centered">
                                        <div>
                                            <p className="heading">Day</p>
                                            <p className="subtitle capitalize is-size-5-mobile">{day}</p>
                                        </div>
                                    </div>
                                    <div className="level-item has-text-centered">
                                        <div>
                                            <p className="heading">Time</p>
                                            <p className="subtitle is-size-5-mobile">{time}</p>
                                        </div>
                                    </div>
                                    <div className="level-item has-text-centered">
                                        <div>
                                            <p className="heading">Contact</p>
                                            <p className="subtitle is-size-5-mobile">{contact}</p>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </section>
                        <hr className='horizontal-line'/>
                        <section className="">
                            <p className="has-text-left is-size-5">Address: {address}</p>
                        </section>
                    </div>
                </div>
                {/*<footer className="card-footer">*/}
                {/*    <a href="#" className="card-footer-item">Request Change</a>*/}
                {/*</footer>*/}
            </div>
        </div>
    )
}

const Footer = () => {
    return <footer className='footer'>
        <div className='has-text-centered'>
            <p>
                <strong>Made by </strong>
                <a href='https://linkedin.com/in/oludavid' target='_blank' rel="noopener noreferrer nofollow">
                    <span className='has-text-success'>Olu</span>
                </a>
            </p>
        </div>
    </footer>
}

const App = () => {
  return (
      <div className="has-text-centered landing">
        <Navbar/>

          <div className="notification is-warning">
              More updates to come: <strong>filter by</strong> day, time, field, or neighbourhood, <strong>sort by</strong> day or time, <strong>add new pickup</strong>, <strong>change pickup time</strong>, and more!
          </div>

        <div className="header container">
            <div className="columns is-multiline is-mobile">
                <PickupCard field={'village greens park'} day={'Saturday'} time={'8am'} address={'2131 Low Meadow Blvd Castle Rock, CO  80109'} contact={'Grant Wilhelmson'}/>
                <PickupCard field={'village greens park'} day={'Saturday'} time={'8am'} address={'2131 Low Meadow Blvd Castle Rock, CO  80109'} contact={'Grant Wilhelmson'}/>
                <PickupCard field={'village greens park'} day={'Saturday'} time={'8am'} address={'2131 Low Meadow Blvd Castle Rock, CO  80109'} contact={'Grant Wilhelmson'}/>
                <PickupCard field={'village greens park'} day={'Saturday'} time={'8am'} address={'2131 Low Meadow Blvd Castle Rock, CO  80109'} contact={'Grant Wilhelmson'}/>
                <PickupCard field={'village greens park'} day={'Saturday'} time={'8am'} address={'2131 Low Meadow Blvd Castle Rock, CO  80109'} contact={'Grant Wilhelmson'}/>
                <PickupCard field={'village greens park'} day={'Saturday'} time={'8am'} address={'2131 Low Meadow Blvd Castle Rock, CO  80109'} contact={'Grant Wilhelmson'}/>
            </div>
        </div>

        <Footer />
      </div>
  )
}

export default App;
