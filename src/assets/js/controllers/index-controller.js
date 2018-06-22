import moment from 'moment'
import { fetchLaunches } from '../services/launch-service'
import { getTemplate } from '../templates/launch-template'

let launches = []
let launchListElement = document.getElementById('launch-list')
let launchCountElement = document.getElementById('launch-count')
let launchTimeFrameElement = document.getElementById('launch-time-frame')

function init() {

  getLaunches().then(() => {
    displayLaunches()
    displayCount()
    displayTimeFrame()
  })

}

async function getLaunches() {
  launches = await fetchLaunches()

  // Sort the launches
  launches.sort((a, b) => {
    return new Date(a.launch_date_unix) > new Date(b.launch_date_unix)
  })

  if (launches.error) {
    console.log('Error: ', launches.error)
  }
}

function displayLaunches() {
  console.log('Displaying');
  for (let launch of launches) {
    launchListElement.appendChild(getTemplate(launch))
  }
}

function displayCount() {
  launchCountElement.innerText = launches.length.toString();
}

function displayTimeFrame() {
  // Get the date of the last launch
  let lastLaunch = moment(launches[launches.length - 1].launch_date_utc)
  // Get a time frame in days from now till the laast launch date
  let timeFrame = lastLaunch.diff(moment(), 'days')
  launchTimeFrameElement.innerText = timeFrame
}

init()