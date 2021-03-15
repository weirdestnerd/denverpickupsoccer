import Logo from './logo.png';
import FacebookLogo from './fb_icon.svg';
import { DateTime, Settings } from 'luxon'
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import {api} from 'services/api';

Settings.defaultZoneName = 'America/Denver'

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
                                            <p className="subtitle is-size-5-mobile">{contact || 'N/A'}</p>
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

const HeadingBanner = ({ text }) => {
  return <h1 className="is-size-2 is-size-4-mobile has-background-white-ter has-text-left p-4 m-1 is-capitalized">{text}</h1>
}

const FilterByDayOfWeek = ({ filterByDay, setFilterByDay }) => {
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const selectDay = (day) => {
    setFilterByDay(day)
  }

  const unselectDay = () => {
    setFilterByDay(null)
  }

  const toggleButton = (e) => {
    const selectedDay = e.target.value
    if (selectedDay === filterByDay) return unselectDay()
    return selectDay(selectedDay)
  }

  const renderButtonForDays = () => {
    return (
        DAYS.map((day, index) =>
            <button
                className={classNames('button day-filter is-rounded mx-1', { 'is-primary': day === filterByDay})}
                onClick={toggleButton}
                value={day}
                key={index}
            >
              {day}
            </button>
        )
    )
  }

  return (
      <>
        <hr className='horizontal-line'/>
        <section className="is-horizontal-scrollable centered">
          {renderButtonForDays()}
        </section>
        <hr className='horizontal-line'/>
      </>
  )
}

const App = () => {
  const PICKUPS = [
      {
          field: 'Village Park',
          address: '6161 S Jasper Way, Centennial, CO, 80016',
          time: '12:00 pm',
          day: 'Sunday',
          contact: 'Jordan W. Alves'
      },
      {
          field: 'Inifinity Park',
          address: '4599 E Tennessee Ave, Denver, CO, 80246',
          time: '5:30 pm',
          day: 'Friday',
          contact: 'Edgar Barajas',
      },
      {
          field: 'Village Greens Park',
          address: '9501 E Union Ave, Englewood, CO, 80111',
          time: '2:00 pm',
          day: 'Saturday',
          contact: 'George Young',
      },
      {
          field: 'Village Greens Park',
          address: '9501 E Union Ave, Englewood, CO, 80111',
          time: '12:00 pm',
          day: 'Thursday',
          contact: 'Raul Belman',
          hidden: true,
      },
      {
          field: 'Village Greens Park',
          address: '9501 E Union Ave, Englewood, CO, 80111',
          time: '12:00 pm',
          day: 'Tuesday',
          contact: 'Raul Belman',
          hidden: true,
      },
      {
          field: 'Village Greens Park',
          address: '9501 E Union Ave, Englewood, CO, 80111',
          time: '12:00 pm',
          day: 'Friday',
          contact: 'Raul Belman',
          hidden: true,
      },
      {
          field: 'Village Greens Park',
          address: '9501 E Union Ave, Englewood, CO, 80111',
          time: '1:00 pm',
          day: 'Sunday',
          contact: '',
      },
      {
          field: 'Cranmer Park',
          address: '4300 E Third Ave, Denver, CO, 80220',
          time: '10:00 am',
          day: 'Sunday',
          contact: 'Christopher Wood',
      },
      {
          field: 'Garfield Lake Park',
          address: '3600 W Mississippi Ave, Denver, CO, 80219',
          time: '11:00 am',
          day: 'Saturday',
          contact: 'Ben Medina',
      },
      {
          field: 'Garfield Lake Park',
          address: '3600 W Mississippi Ave, Denver, CO, 80219',
          time: '4:30 pm',
          day: 'Friday',
          contact: 'Aric Peterson',
      },
      {
          field: 'Barnum Park',
          address: '360 Hooker St, Denver, CO, 80219',
          time: '8:30 am',
          day: 'Saturday',
          contact: 'Grant Wilhelmson',
      },
      {
          field: 'Tierra Park',
          address: '14601 E Jewell Ave, Aurora, CO 80012',
          time: '9:00 am',
          day: 'Saturday',
          contact: 'Sergio David Lopez',
      },
      {
          field: 'Village Park',
          address: '6161 S Jasper Way, Centennial, CO, 80016',
          time: '12:00 pm',
          day: 'Saturday',
          contact: 'Zim Green',
      },
      {
          field: 'Garfield Lake Park',
          address: '3600 W Mississippi Ave, Denver, CO, 80219',
          time: '12:00 pm',
          day: 'Sunday',
          contact: 'Cody Peyton',
      },
      {
          field: 'City Park',
          address: '2001 Colorado Blvd, Denver, CO, 80205',
          time: '5:30 pm',
          day: 'Tuesday',
          contact: 'Tasia Poinsatte',
      },
      {
          field: 'Barnum East Park',
          address: '500 Federal Blvd, Denver, CO, 80219',
          time: '8:00 am',
          day: 'Saturday',
          contact: 'Grant Wilhelmson',
      },
      {
          field: 'Barnum East Park',
          address: '500 Federal Blvd, Denver, CO, 80219',
          time: '9:00 am',
          day: 'Sunday',
          contact: 'Grant Wilhelmson',
      },
      {
          field: 'City Park',
          address: '2001 Colorado Blvd, Denver, CO, 80205',
          time: '5:00 pm',
          day: 'Monday',
          contact: '',
      },
      {
          field: 'City Park',
          address: '2001 Colorado Blvd, Denver, CO, 80205',
          time: '5:00 pm',
          day: 'Wednesday',
          contact: '',
      },
      {
          field: 'City Park',
          address: '2001 Colorado Blvd, Denver, CO, 80205',
          time: '5:00 pm',
          day: 'Friday',
          contact: '',
      },
      {
          field: 'Broomfield Commons Williams Field ',
          address: '13200 Sheridan Blvd, Broomfield, CO, 80020',
          time: '9:00 am',
          day: 'Saturday',
          contact: 'Luis Ramos, Logan Ross',
      },
      {
          field: 'Aspen View Academy',
          address: '2131 Low Meadow Blvd Castle Rock, CO, 80109',
          time: '9:00 am',
          day: 'Saturday',
          contact: '',
      },
]
  const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const [filterByDay, setFilterByDay] = useState(null)

  useEffect(() => {
    api()
    .then(console.log)
    .catch(console.error)
  })

  const comparePickupsByDaysOfTheWeek = (firstPickup, secondPickup) => {
    const firstDay = firstPickup.day
    const secondDay = secondPickup.day
    // The next two line would make sure that Saturday is before Sunday.
    // In the case where we want to sort three pickups that are on [Friday, Saturday, Sunday],
    // we compare first two and result with Friday before Saturday. Then we compare the next two
    // and we should get Saturday before Sunday. Without the next two lines, the default
    // comparison that's based on the index of days in WEEKDAYS would result in Sunday before Saturday.
    if (firstDay === 'Saturday' && secondDay === 'Sunday') return -1
    if (firstDay === 'Sunday' && secondDay === 'Saturday') return 1
    return WEEKDAYS.indexOf(firstDay) - WEEKDAYS.indexOf(secondDay)
  }

  const renderPickupsByDayOfTheWeek = (weekday) => {
    const pickupsHappeningOnDay = PICKUPS.filter(pickup => (pickup.day === weekday) && !pickup.hidden)
    if (pickupsHappeningOnDay.length === 0) return <p>No pickups</p>
    return pickupsHappeningOnDay.map(pickup => <PickupCard field={pickup.field} address={pickup.address} time={pickup.time} day={pickup.day} contact={pickup.contact}/>)
  }

  const renderPickupsNotHappeningOnDays = (weekdays) => {
    const pickupsNotHappeningOnDays = PICKUPS.sort(comparePickupsByDaysOfTheWeek).filter(pickup => !weekdays.includes(pickup.day) && !pickup.hidden)
    if (pickupsNotHappeningOnDays.length === 0) return <p>No pickups</p>
    return pickupsNotHappeningOnDays.map(pickup => <PickupCard field={pickup.field} address={pickup.address} time={pickup.time} day={pickup.day} contact={pickup.contact}/>)
  }

  const renderPickups = (filterByDay) => {
    const today = WEEKDAYS[DateTime.local().weekday]
    const tomorrow = WEEKDAYS[DateTime.local().plus({ days: 1 }).weekday]

    if (filterByDay) {
      return (
          <>
            <HeadingBanner text={`Showing pickups for ${filterByDay}`}/>
            <section className="container section">
              <div className="columns is-multiline is-mobile">
                {renderPickupsByDayOfTheWeek(filterByDay)}
              </div>
            </section>
          </>
      )
    }

    return (
        <>
          <HeadingBanner text="Happening today"/>
          <section className="container section">
            <div className="columns is-multiline is-mobile">
                {renderPickupsByDayOfTheWeek(today)}
            </div>
          </section>
          <HeadingBanner text="Happening tomorrow"/>
          <section className="container section">
            <div className="columns is-multiline is-mobile">
                {renderPickupsByDayOfTheWeek(tomorrow)}
            </div>
          </section>
          <HeadingBanner text="Happening other days"/>
          <section className="container section">
            <div className="columns is-multiline is-mobile">
                {renderPickupsNotHappeningOnDays([today, tomorrow])}
            </div>
          </section>
        </>
    )
  }

  return (
      <div className="has-text-centered landing">
        <Navbar/>

        <FilterByDayOfWeek filterByDay={filterByDay} setFilterByDay={setFilterByDay} />

        {renderPickups(filterByDay)}

        <Footer />
      </div>
  )
}

export default App;