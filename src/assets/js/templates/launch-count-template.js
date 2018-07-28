
function launchCountTemplate(launchCount, launchTimeFrame) {
    let template = ``;

    if(launchCount > 0 ) {
        template = `
        There are
        <span id="launch-count">${launchCount}</span>
        upcoming launches over the next
        <span id="launch-time-frame">${launchTimeFrame}</span>
        days!`;
    } else {
        template = `<span>We can't find any upcoming launches :(</span>`
    }
   

  let div = document.createElement('div')
  div.className = 'launch-count-template'
  div.innerHTML = template
  return div;
}

export { launchCountTemplate }
