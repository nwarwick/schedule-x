import axios from 'axios'

async function fetchLaunches(params) {
  try {
    let res = await axios.get('https://api.spacexdata.com/v2/launches/upcoming')

    return res.data
  } catch (error) {
    return { status: res.status, error: error }
  }
}

export { fetchLaunches }