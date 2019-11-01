const countryList = [
  {
    name: 'Uganda',
    abbreviation: 'UGA'
  },
  {
    name: 'Rwanda',
    abbreviation: 'RWA'
  },
  {
    name: 'Tanzania',
    abbreviation: 'TZA'
  },
  {
    name: 'Kenya',
    abbreviation: 'KEN'
  },
  {
    name: 'Burundi',
    abbreviation: 'BDI'
  },
  {
    name: 'DR Congo',
    abbreviation: 'DRC'
  },
  {
    name: 'Malawi',
    abbreviation: 'MWI'
  },
  {
    name: 'South Sudan',
    abbreviation: 'SSD'
  }
]

export const countriesOptions = countryList.map((country, index) => ({
  key: `country-${index}`,
  text: country.name,
  value: country.abbreviation
}))

export const handleCountries = (value, countriesUpdater, queryUpdater) => {
  const countryQuery = value.map((country, index) => {
    if (index > 0) {
      return `&c=${country}`
    } else {
      return `c=${country}`
    }
  })
  countriesUpdater(value)
  queryUpdater(countryQuery.join(''))
}

const currencyList = ['MWK', 'RWF', 'KES', 'UGX', 'TZS', 'CDF', 'BIF', 'USD']

export const currencyOptions = currencyList.map((currency, index) => ({
  key: `currency-${index}`,
  text: currency,
  value: currency
}))
