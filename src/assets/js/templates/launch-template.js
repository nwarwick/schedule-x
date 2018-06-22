

function getTemplate(launch) {
  let template = `
    <div class="card-header">
      <h2>Mission: ${launch.mission_name}</h2>
    </div>
    <div class="card-body">
      Launch date: ${launch.launch_date_utc}
      <br>
      Launch location: ${launch.launch_site.site_name_long}
      <br>
      Rocket: ${launch.rocket.rocket_name}
      <br>
      Payload: ${launch.rocket.second_stage.payloads}
    </div>
  `

  let div = document.createElement('div')
  div.className = 'card'
  div.innerHTML = template
  return div;
}

export { getTemplate }
