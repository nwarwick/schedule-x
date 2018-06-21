import { fetchLaunches } from '../services/launch-service'

let launches = []


function init() {
  console.log('Initializing..')

  getLaunches()


}

async function getLaunches() {
  launches = await fetchLaunches()
  console.log('Launches: ', launches);

  if (launches.error) {
    console.log('Error: ', launches.error)
  }

}

init()