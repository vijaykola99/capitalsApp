import {useState} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

const Capitals = () => {
  const [country, setCountry] = useState(countryAndCapitalsList[0].country)
  const onChangeCapital = event => {
    setCountry(event.target.value)
  }
  return (
    <div className="app-background">
      <div className="countries-background">
        <h1 className="heading">Countries And Capitals</h1>
        <select
          className="select"
          value={country.Capitals}
          onChange={onChangeCapital}
        >
          {countryAndCapitalsList.map(eachItem => (
            <option value={eachItem.country} key={eachItem.id}>
              {eachItem.capitalDisplayText}
            </option>
          ))}
        </select>
        <span className="span">is capital of which country?</span>
        <p className="country-name">{country}</p>
      </div>
    </div>
  )
}
export default Capitals
