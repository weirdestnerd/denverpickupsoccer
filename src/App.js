import Logo from './logo.png';
import FacebookLogo from './fb_icon.svg';

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
    return <footer className='footer level'>
        <div className='level-item has-text-centered'>
            <p>
                <strong>Made by </strong>
                <a href='https://linkedin.com/in/oludavid' target='_blank' rel="noopener noreferrer nofollow">
                    <span className='has-text-success'>Olu </span>
                </a>
		&
		<a href='https://linkedin.com/in/mnaparstek' target='_blank' rel="noopener noreferrer nofollow">
                    <span className='has-text-success'> Martin</span>
                </a>
            </p>
        </div>
        <div className='level-item has-text-centered'>
            <a href="https://www.facebook.com/groups/denverpickupsoccer/?__cft__[0]=AZV9jHuReRSAM-1Lkx50LDVO_vG2l3k4ietNdFSJGJEmQDOV6U3uSZRlmobsUQjOCaFj9_BjxbtXM1K734fDT5Us8DyZcjgJ1U3c17g8q2lIkvT2qyTjvW1K7Vx-ecMPk2kfttwQQiG3W_qYIRz7i_LXD5Lb9Z5pqWFbktUGjmA7o_2hCXHrYW3ThbmWv_IkOOA&amp;__tn__=-UC%2CP-R">
                For More Games Follow: Denver Pick-Up Soccer 
                <img className="facebook_icon" src={FacebookLogo} alt='Facebook Icon' />
            </a>
            {/* <span className="icon"><i className="fab fa-facebook-square fa-lg"></i></span> */}
        </div>
    </footer>
}

const App = () => {
  const pickups = [
      {
          field: 'Village Park',
          address: '6161 S Jasper Way, Centennial, C0 80016',
          time: '12pm',
          day: 'Sunday',
          contact: 'Jordan W. Alves'
      },
      {
          field: 'Inifinity Park',
          address: '4599 E Tennessee Ave',
          time: '5:30pm',
          day: 'Friday',
          contact: 'Edgar Barajas',
      },
      {
          field: 'Village Greens Park',
          address: '9501 E Union Ave, Englewood, CO  80111',
          time: '2pm',
          day: 'Saturday',
          contact: 'George Young',
      },
      {
          field: 'Village Greens Park',
          address: '9501 E Union Ave, Englewood, CO  80111',
          time: '12pm',
          day: 'Thursday',
          contact: 'Raul Belman',
      },
      {
          field: 'Village Greens Park',
          address: '9501 E Union Ave, Englewood, CO  80111',
          time: '12pm',
          day: 'Tuesday',
          contact: 'Raul Belman',
      },
      {
          field: 'Village Greens Park',
          address: '9501 E Union Ave, Englewood, CO  80111',
          time: '12pm',
          day: 'Friday',
          contact: 'Raul Belman',
      },
      {
          field: 'Village Greens Park',
          address: '9501 E Union Ave, Englewood, CO  80111',
          time: '1pm',
          day: 'Sunday',
          contact: '',
      },
      {
          field: 'Cranmer Park',
          address: '4300 E Third Ave, Denver, CO 80220',
          time: '10am',
          day: 'Sunday',
          contact: 'Christopher Wood',
      },
      {
          field: 'Garfield Lake Park',
          address: '3600 W Mississippi ave, denver, CO, 80219',
          time: '11am',
          day: 'Saturday',
          contact: 'Ben Medina',
      },
      {
          field: 'Garfield Lake Park',
          address: '3600 W Mississippi ave, denver, CO, 80219',
          time: '4:30pm',
          day: 'Friday',
          contact: 'Aric Peterson',
      },
      {
          field: 'Barnum Park',
          address: '360 Hooker St, Denver, CO  80219 United States',
          time: '8:30am',
          day: 'Saturday',
          contact: 'Grant Wilhelmson',
      },
      {
          field: 'Tierra Park',
          address: '14601 E Jewell ave, Aurora, CO 80012',
          time: '9am',
          day: 'Saturday',
          contact: 'Sergio David Lopez',
      },
      {
          field: 'Village Park',
          address: '6161 S Jasper Way, Centennial, C0 80016',
          time: '12pm',
          day: 'Saturday',
          contact: 'Zim Green',
      },
      {
          field: 'Garfield Lake Park',
          address: '3600 W Mississippi ave, denver, CO, 80219',
          time: '12pm',
          day: 'Sunday',
          contact: 'Cody Peyton',
      },
      {
          field: 'City Park',
          address: '2001 Colorado Blvd, Denver, CO, 80205',
          time: '5:30pm',
          day: 'Tuesday',
          contact: 'Tasia Poinsatte',
      },
      {
          field: 'Barnum East Park',
          address: '500 Federal Blvd',
          time: '8am',
          day: 'Saturday',
          contact: 'Grant Wilhelmson',
      },
      {
          field: 'Barnum East Park',
          address: '500 Federal Blvd',
          time: '9am',
          day: 'Sunday',
          contact: 'Grant Wilhelmson',
      },
      {
          field: 'City Park',
          address: '2001 Colorado Blvd, Denver, CO, 80205',
          time: '5pm,',
          day: 'MWF',
          contact: '',
      },
      {
          field: 'Broomfield Commons Williams Field ',
          address: '13200 Sheridan Blvd, Broomfield, CO  80020',
          time: '9am',
          day: 'Saturday',
          contact: 'Luis Ramos, Logan Ross',
      },
      {
          field: 'Aspen View Academy',
          address: '2131 Low Meadow Blvd Castle Rock, CO  80109 ',
          time: '9am',
          day: 'Saturday',
          contact: '',
      },
  ]
  return (
      <div className="has-text-centered landing">
        <Navbar/>

          <div className="notification is-warning">
              More updates to come: <strong>filter by</strong> day, time, field, or neighbourhood, <strong>sort by</strong> day or time, <strong>add new pickup</strong>, <strong>change pickup time</strong>, and more!
          </div>

        <div className="header container">
            <div className="columns is-multiline is-mobile">
                { pickups.map(pickup => <PickupCard field={pickup.field} address={pickup.address} time={pickup.time} day={pickup.day} contact={pickup.contact}/>) }
            </div>
        </div>

        <Footer />
      </div>
  )
}

export default App;
