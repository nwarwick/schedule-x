import { fetchLaunches } from '../services/launch-service'
import { getTemplate } from '../templates/launch-template'

let launches = []
let launchListElement = document.getElementById('launch-list')

function init() {

  getLaunches().then(() => {
    displayLaunches()
  })
}

async function getLaunches() {
  launches = await fetchLaunches()

  if (launches.error) {
    console.log('Error: ', launches.error)
  }
}

function displayLaunches() {

  for (let launch of launches) {
    launchListElement.appendChild(getTemplate(launch))
  }
}

init()