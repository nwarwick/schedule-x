import moment from 'moment'
import { fetchLaunches } from '../services/launch-service'
import { getTemplate } from '../templates/launch-template'
import { launchCountTemplate } from '../templates/launch-count-template'
import { format } from 'path';

let launches = []
let launchListElement = document.getElementById('launch-list')
let launchCountWrapper = document.querySelector('.launch-count-wrapper')
let launchCountElement = document.getElementById('launch-count')
let launchTimeFrameElement = document.getElementById('launch-time-frame')
let viewPayloadButtons;

// Use dialog element for modal

function init() {

  getLaunches().then(() => {
    displayLaunches()
    displayCount()
    viewPayloadButtons = document.querySelectorAll('.view-payload-button')
    viewPayloadButtons.forEach(element => element.addEventListener('click', viewPayload));
  })
}

async function getLaunches() {
  launches = await fetchLaunches()

  if (launches.error) {
    console.log('Error: ', launches.error)
  }

  return formatLaunches(launches)
}

function displayLaunches() {
  for (let launch of launches) {
    launchListElement.appendChild(getTemplate(launch))
  }
}

function displayCount() {
  let template = launchCountTemplate(launches.length.toString(), getTimeFrame())
  launchCountWrapper.appendChild(template);
}

function getTimeFrame() {
  // Get the date of the last launch
  let lastLaunch = moment(launches[launches.length - 1].launch_date_utc)
  // Get a time frame in days from now till the laast launch date
  let timeFrame = lastLaunch.diff(moment(), 'days')
  return timeFrame
}

function formatLaunches(launches) {
  // Remove dead links
  for (let launch of launches) {
    launch.links = Object.values(launch.links)
      .filter(item => {
        return item != null
      })
  }

  // Sort the launches
  launches.sort((a, b) => {
    return new Date(a.launch_date_unix) > new Date(b.launch_date_unix)
  })
}

function viewPayload(event) {
  console.log('event: ', event)
}

init()