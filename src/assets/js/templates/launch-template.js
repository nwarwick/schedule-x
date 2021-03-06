
import moment from 'moment'

function getTemplate(launch) {
  let template = `
    <div class="card-header">
      <span class="card-header-title">Mission: ${launch.mission_name}</span>
    </div>
    <div class="card-body">
      <div class="card-row">
        <div class="card-label">Launch date:</div> 
        <div class="card-info">${moment(launch.launch_date_utc).format('LL')}</div>
      </div>
      <div class="card-row">
        <div class="card-label">Launch location:</div>
        <div class="card-info">${launch.launch_site.site_name_long}</div> 
      </div>    
      <div class="card-row">
        <div class="card-label">Rocket:</div> 
        <div class="card-info">${launch.rocket.rocket_name}</div>
      </div>
    ${ launch.links.length > 0 ?
      `<div class="card-row">
        <div class="card-label">Links:</div> 
          <div class="card-info">
                ${
      Object.values(launch.links)
        .map(item => `<li class="card-link" ><a href="${item}">${item}</a></li>`).join('')
      }
          </div>
      </div>`
      :
      ``
    }
       
    </div>
  `

  let div = document.createElement('div')
  div.className = 'card'
  div.innerHTML = template
  return div;
}

export { getTemplate }
