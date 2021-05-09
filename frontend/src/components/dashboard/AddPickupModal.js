import React, { useState } from 'react';
import HeadingBanner from 'components/HeadingBanner';
import { createPickup } from 'services/organizers';
import Alert from 'components/notification/Alert';
import HorizontalForm from 'components/form/HorizontalForm';
import TextField from 'components/form/TextField';
import DropdownField from 'components/form/DropdownField';
import ButtonField from 'components/form/ButtonField';
import Modal from 'components/modal/Modal';
import HelperText from 'components/form/HelperText';

const AddPickupModal = ({ setShowAddPickupModal, organizerId }) => {
  const COLORADO_CITIES = ['Acres Green', 'Aguilar', 'Air Force Academy', 'Akron', 'Alamosa', 'Alamosa East', 'Allenspark', 'Alma', 'Antonito', 'Applewood', 'Arboles', 'Aristocrat Ranchettes', 'Arriba', 'Arvada', 'Aspen', 'Aspen Park', 'Atwood', 'Ault', 'Aurora', 'Avon', 'Avondale', 'Basalt', 'Battlement Mesa', 'Bayfield', 'Bennett', 'Berkley', 'Berthoud', 'Bethune', 'Beulah Valley', 'Black Forest', 'Black Hawk', 'Blanca', 'Blue River', 'Bonanza', 'Boone', 'Boulder', 'Bow Mar', 'Branson', 'Breckenridge', 'Brighton', 'Brookside', 'Broomfield', 'Brush', 'Buena Vista', 'Burlington', 'Byers', 'Calhan', 'Campion', 'Campo', 'Canon City', 'Carbondale', 'Carriage Club', 'Cascade-Chipita Park', 'Castle Pines', 'Castle Rock', 'Castlewood', 'Cedaredge', 'Center', 'Central City', 'Cheraw', 'Cherry Hills Village', 'Cheyenne Wells', 'Cimarron Hills', 'Clifton', 'Coal Creek', 'Coal Creek', 'Cokedale', 'Collbran', 'Colorado City', 'Colorado Springs', 'Columbine', 'Columbine Valley', 'Commerce City', 'Cortez', 'Cottonwood', 'Craig', 'Crawford', 'Creede', 'Crested Butte', 'Crestone', 'Cripple Creek', 'Crook', 'Crowley', 'Dacono', 'De Beque', 'Deer Trail', 'Del Norte', 'Delta', 'Denver', 'Derby', 'Dillon', 'Dinosaur', 'Dolores', 'Dove Creek', 'Downieville-Lawson-Dumont', 'Durango', 'Eads', 'Eagle', 'Eagle-Vail', 'East Pleasant View', 'Eaton', 'Eckley', 'Edgewater', 'Edwards', 'Eldora', 'Eldorado Springs', 'Elizabeth', 'El Jebel', 'Empire', 'Englewood', 'Erie', 'Estes Park', 'Evans', 'Evergreen', 'Fairplay', 'Federal Heights', 'Firestone', 'Flagler', 'Fleming', 'Florence', 'Fort Carson', 'Fort Collins', 'Fort Garland', 'Fort Lupton', 'Fort Morgan', 'Fountain', 'Fowler', 'Foxfield', 'Franktown', 'Fraser', 'Frederick', 'Frisco', 'Fruita', 'Fruitvale', 'Garden City', 'Genesee', 'Genoa', 'Georgetown', 'Gilcrest', 'Glendale', 'Gleneagle', 'Glenwood Springs', 'Golden', 'Gold Hill', 'Granada', 'Granby', 'Grand Junction', 'Grand Lake', 'Grand View Estates', 'Greeley', 'Green Mountain Falls', 'Greenwood Village', 'Grover', 'Gunbarrel', 'Gunnison', 'Gypsum', 'Hartman', 'Haswell', 'Haxtun', 'Hayden', 'Heritage Hills', 'Highlands Ranch', 'Hillrose', 'Holly', 'Holyoke', 'Hooper', 'Hotchkiss', 'Hot Sulphur Springs', 'Hudson', 'Hugo', 'Idaho Springs', 'Ignacio', 'Iliff', 'Indian Hills', 'Jamestown', 'Johnstown', 'Julesburg', 'Keenesburg', 'Ken Caryl', 'Kersey', 'Keystone', 'Kim', 'Kiowa', 'Kit Carson', 'Kittredge', 'Kremmling', 'Lafayette', 'La Jara', 'La Junta', 'Lake City', 'Lakeside', 'Lakewood', 'Lamar', 'Laporte', 'Larkspur', 'La Salle', 'Las Animas', 'La Veta', 'Leadville', 'Leadville North', 'Limon', 'Lincoln Park', 'Littleton', 'Lochbuie', 'Loghill Village', 'Log Lane Village', 'Lone Tree', 'Longmont', 'Louisville', 'Louviers', 'Loveland', 'Lyons', 'Manassa', 'Mancos', 'Manitou Springs', 'Manzanola', 'Marble', 'Mead', 'Meeker', 'Meridian', 'Merino', 'Milliken', 'Minturn', 'Moffat', 'Monte Vista', 'Montezuma', 'Montrose', 'Monument', 'Morrison', 'Mountain View', 'Mountain Village', 'Mount Crested Butte', 'Naturita', 'Nederland', 'New Castle', 'Niwot', 'Northglenn', 'North Washington', 'Norwood', 'Nucla', 'Nunn', 'Oak Creek', 'Olathe', 'Olney Springs', 'Ophir', 'Orchard City', 'Orchard Mesa', 'Ordway', 'Otis', 'Ouray', 'Ovid', 'Padroni', 'Pagosa Springs', 'Palisade', 'Palmer Lake', 'Paoli', 'Paonia', 'Parachute', 'Parker', 'Peetz', 'Penrose', 'Perry Park', 'Pierce', 'Pitkin', 'Platteville', 'Poncha Springs', 'Ponderosa Park', 'Pritchett', 'Pueblo', 'Pueblo West', 'Ramah', 'Rangely', 'Raymer', 'Red Cliff', 'Red Feather Lakes', 'Redlands', 'Rico', 'Ridgway', 'Rifle', 'Rockvale', 'Rocky Ford', 'Romeo', 'Roxborough Park', 'Rye', 'Saguache', 'St. Mary\'s', 'Salida', 'Salt Creek', 'Sanford', 'San Luis', 'Sawpit', 'Security-Widefield', 'Sedalia', 'Sedgwick', 'Seibert', 'Severance', 'Sheridan', 'Sheridan Lake', 'Sherrelwood', 'Silt', 'Silver Cliff', 'Silver Plume', 'Silverthorne', 'Silverton', 'Simla', 'Snowmass Village', 'South Fork', 'Southglenn', 'Springfield', 'Starkville', 'Steamboat Springs', 'Sterling', 'Stonegate', 'Strasburg', 'Stratmoor', 'Stratton', 'Sugar City', 'Superior', 'Swink', 'Tabernash', 'Telluride', 'The Pinery', 'Thornton', 'Timnath', 'Todd Creek', 'Towaoc', 'Trinidad', 'Twin Lakes', 'Two Buttes', 'Vail', 'Victor', 'Vilas', 'Vona', 'Walden', 'Walsenburg', 'Walsh', 'Ward', 'Welby', 'Wellington', 'Westcliffe', 'Westcreek', 'Westminster', 'West Pleasant View', 'Wheat Ridge', 'Wiggins', 'Wiley', 'Williamsburg', 'Windsor', 'Winter Park', 'Woodland Park', 'Woodmoor', 'Wray', 'Yampa', 'Yuma']
  const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const [fieldName, setFieldName] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [city, setCity] = useState(COLORADO_CITIES[0])
  const [zip, setZip] = useState('')
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [am, setAm] = useState(true)
  const [day, setDay] = useState(DAYS_OF_WEEK[0])

  const [isFieldNameValid, setIsFieldNameValid] = useState(true)
  const [isStreetAddressValid, setIsStreetAddressValid] = useState(true)
  const [isZipValid, setIsZipValid] = useState(true)
  const [isHourValid, setIsHourValid] = useState(true)
  const [isMinuteValid, setIsMinuteValid] = useState(true)

  const [submitSuccess, setSubmitSuccess] = useState(null)
  const [submitError, setSubmitError] = useState(null)

  const alphaNumericSpaceRegex = new RegExp(/^[\w\s]+$/)
  const nonNumericRegex = new RegExp(/\D/)
  const nonZeroPositiveNumericRegex = new RegExp(/[\D0]/)

  // an array of int 1 - 12
  const hourOptions = Array(12).fill(0).map((_, i) => i + 1)
  const minuteOptions = ['00', '15', '30', '45']

  const validateAlphaNumericSpace = (value, setter) => {
    if (value.trim() !== '') return setter(alphaNumericSpaceRegex.test(value))
    setter(true)
  }

  const validateZip = (zipValue) => {
    if (zipValue.trim() !== '') {
      const zipAsInt = parseInt(zipValue)
      // Got these zip boundary numbers (80001 - 81658) from http://www.structnet.com/instructions/zip_min_max_by_state.html
      if (
          zipValue.length !== 5 ||
          isNaN(zipAsInt) ||
          zipAsInt < 80001 ||
          zipAsInt > 81658
      )
        return setIsZipValid(false)
    }
    setIsZipValid(true)
  }

  const validateHourCannotBeZero = (value, setter) => {
    if (value.trim() !== '') return setter(!nonZeroPositiveNumericRegex.test(value))
    setter(true)
  }

  const validateMinute = (value, setter) => {
    if (value.trim() !== '') return setter(value !== '0')
    setter(true)
  }

  const allowIntegerOnly = (value, setter) => {
    const newValue = value.toString().replace(nonNumericRegex, '')
    if (setter) setter(newValue)
    return newValue
  }

  const handleFieldNameInput = fieldNameInput => {
    setFieldName(fieldNameInput)
    validateAlphaNumericSpace(fieldNameInput, setIsFieldNameValid)
  }

  const handleAddressInput = streetAddressInput => {
    setStreetAddress(streetAddressInput)
    validateAlphaNumericSpace(streetAddressInput, setIsStreetAddressValid)
  }

  const handleCityInput = cityInput => {
    setCity(cityInput)
  }

  const handleZipInput = zipInput => {
    validateZip(allowIntegerOnly(zipInput, setZip))
  }

  const handleHourInput = hourInput => {
    setHour(hourInput)
    validateHourCannotBeZero(hourInput, setIsHourValid)
  }

  const handleMinuteInput = minuteInput => {
    setMinute(minuteInput)
    validateMinute(minuteInput, setIsMinuteValid)
  }

  const isAllInputValid = () =>
      isFieldNameValid && fieldName.trim() !== '' &&
      isStreetAddressValid && streetAddress.trim() !== '' &&
      isZipValid && zip.trim() !== '' &&
      isHourValid && hour !== 0 &&
      isMinuteValid

  const reset = () => {
    setFieldName('')
    setStreetAddress('')
    setCity(COLORADO_CITIES[0])
    setZip('')
    setHour(0)
    setMinute(0)
    setAm(true)
    setDay(DAYS_OF_WEEK[0])
  }

  const addPickup = () => {
    const pickup = {
      field: fieldName,
      address: {
        street: streetAddress,
        state: 'CO',
        city,
        zip,
      },
      time: {
        hour,
        minute,
        am,
      },
      day,
    }

    createPickup(pickup, organizerId)
        .then(() => {
          reset()
          setSubmitSuccess(true)
        })
        .catch(setSubmitError)
  }

  const renderForm = () => {
    return (
        <>
          <HorizontalForm label="What field do you play on?">
            <TextField
                value={fieldName}
                placeholder="Field name"
                onChangeFn={handleFieldNameInput}
            >
              <HelperText
                  helperText="No special characters allowed"
                  isInputValid={isFieldNameValid}
                  type="danger"
              />
            </TextField>
          </HorizontalForm>

          <HorizontalForm label="Address">
            <TextField
                value={streetAddress}
                placeholder="Street address"
                onChangeFn={handleAddressInput}
            >
              <HelperText
                  helperText="No special characters allowed"
                  isInputValid={isStreetAddressValid}
                  type="danger"
              />
            </TextField>
          </HorizontalForm>

          <HorizontalForm>
            <DropdownField
                value={city}
                onChangeFn={handleCityInput}
                options={COLORADO_CITIES}
            />
            <TextField
                value={zip}
                onChangeFn={handleZipInput}
                isInputValid={isZipValid}
            >
              <HelperText
                  helperText="Invalid zip"
                  isInputValid={isZipValid}
                  type="danger"
              />
              <HelperText
                  isInputValid={!isZipValid}
                  helperText="Between 80001 - 81658"
                  type="info"
              />
            </TextField>
          </HorizontalForm>

          <HorizontalForm label="When do you play?">
            <DropdownField
                value={hour}
                onChangeFn={handleHourInput}
                options={hourOptions}
                placeholder="Hour"
            >
              <HelperText
                  helperText="Incorrect time selected"
                  isInputValid={isHourValid}
                  type="danger"
              />
            </DropdownField>
            <DropdownField
                value={minute}
                onChangeFn={handleMinuteInput}
                options={minuteOptions}
                placeholder="Minute"
            >
              <HelperText
                  helperText="Incorrect time selected"
                  isInputValid={isMinuteValid}
                  type="danger"
              />
            </DropdownField>
            <DropdownField
                value={am ? 'am' : 'pm'}
                onChangeFn={value => setAm(value === 'am')}
                options={['am', 'pm']}
            />
          </HorizontalForm>

          <HorizontalForm>
            <DropdownField
                value={day}
                onChangeFn={setDay}
                options={DAYS_OF_WEEK}
            />
          </HorizontalForm>

          <HorizontalForm>
            <ButtonField text="Add pickup" onClickFn={addPickup} disabled={!isAllInputValid()} />
          </HorizontalForm>

        </>
    )
  }

  const renderSubmitError = () => {
    return submitError && (
        <Alert
            message="There was an issue creating your pickup"
            clearFn={() => setSubmitError(null)}
            type='danger'
        />
    )
  }

  const renderSubmitSuccess = () => {
    return submitSuccess && (
        <Alert
            message="Your pickup is created!!!"
            clearFn={() => setSubmitSuccess(null)}
            type='success'
        />
    )
  }

  return (
      <Modal closeModalFn={() => setShowAddPickupModal(false)}>
        <div className="card">
          <HeadingBanner text="Add new pickup" />
          <div className="card-content">
            <div className="content">
              {renderSubmitError()}
              {renderSubmitSuccess()}
              {renderForm()}
            </div>
          </div>
        </div>
      </Modal>
  )
}

export default AddPickupModal;
