
import moment from 'moment'

function getTemplate(launch) {
  let template = `
    <div class="card-header">
      Mission: ${launch.mission_name}
    </div>
    <div class="card-body">
      <span class="text-bold">Launch date</span>: ${moment(launch.launch_date_utc).format('LL')}
      <br>
      <span class="text-bold">Launch location</span>: ${launch.launch_site.site_name_long}
      <br>
      <span class="text-bold">Rocket</span>: ${launch.rocket.rocket_name}
      <br>
      <span class="text-bold">Payload</span>: ${launch.rocket.second_stage.payloads}
    </div>
  `

  let div = document.createElement('div')
  div.className = 'card'
  div.innerHTML = template
  return div;
}

export { getTemplate }
