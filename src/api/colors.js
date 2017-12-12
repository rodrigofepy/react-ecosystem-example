import axios from 'axios'

export async function getRandomColorsEndpoint() {
  let response

  try {
    response = await axios.get('http://www.colr.org/json/colors/random/7')
  } catch (error) {
    throw error
  }

  return response
}
