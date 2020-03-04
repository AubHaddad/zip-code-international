const countries = require("./countries");


const find = (country, code) => {
  const zip = code.length < 5 ? String("00000" + code).slice(-5) : code
  return countries[country].codes[zip] || []
}
const findCodesByCity = (country, city) => {
  return countries[country].citiesMap[city.toUpperCase()] || []
}

const getAllCities = (country) => {
  return Object.keys(countries[country].citiesMap)
}
const getAllZipCodes = (country) => {
  return Object.keys(countries[country].codes)
}

module.exports = {
  find,
  findCodesByCity,
  getAllCities,
  getAllZipCodes
}