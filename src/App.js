import Navbar from './components/Navbar';
import HeadingBanner from './components/HeadingBanner';
import PickupCard from './components/PickupCard';
import Footer from './components/Footer';
import { DateTime, Settings } from 'luxon'

Settings.defaultZoneName = 'America/Denver'

const App = () => {
    const PICKUPS = [
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
          day: 'Monday',
          contact: '',
      },
      {
          field: 'City Park',
          address: '2001 Colorado Blvd, Denver, CO, 80205',
          time: '5pm,',
          day: 'Wednesday',
          contact: '',
      },
      {
          field: 'City Park',
          address: '2001 Colorado Blvd, Denver, CO, 80205',
          time: '5pm,',
          day: 'Friday',
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
    const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

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
      const pickupsHappeningOnDay = PICKUPS.filter(pickup => pickup.day === weekday)
      if (pickupsHappeningOnDay.length === 0) return <p>No pickups</p>
      return pickupsHappeningOnDay.map(pickup => <PickupCard field={pickup.field} address={pickup.address} time={pickup.time} day={pickup.day} contact={pickup.contact}/>)
    }

    const renderPickupsNotHappeningOnDays = (weekdays) => {
      const pickupsNotHappeningOnDays = PICKUPS.sort(comparePickupsByDaysOfTheWeek).filter(pickup => !weekdays.includes(pickup.day))
      if (pickupsNotHappeningOnDays.length === 0) return <p>No pickups</p>
      return pickupsNotHappeningOnDays.map(pickup => <PickupCard field={pickup.field} address={pickup.address} time={pickup.time} day={pickup.day} contact={pickup.contact}/>)
    }

    const renderPickups = () => {
      const today = WEEKDAYS[DateTime.local().weekday]
      const tomorrow = WEEKDAYS[DateTime.local().plus({ days: 1 }).weekday]

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

        {renderPickups()}

        <Footer />
      </div>
  )
}

export default App;
