function sleep(d) {
    return new Promise((resolve) => setTimeout(resolve, d))
}

async function loadJs() {
  let js1 = document.createElement('script')
  js1.setAttribute('src', 'static/assets/bundles/libscripts.bundle.js')
  document.head.appendChild(js1)

  await sleep(50);

  let js2 = document.createElement('script')
  js2.setAttribute('src', 'static/assets/bundles/vendorscripts.bundle.js')
  document.head.appendChild(js2)

  await sleep(50);

  let js3 = document.createElement('script')
  js3.setAttribute('src', 'static/assets/bundles/morrisscripts.bundle.js')
  document.head.appendChild(js3)

  await sleep(50);

  let js4 = document.createElement('script')
  js4.setAttribute('src', 'static/assets/bundles/jvectormap.bundle.js')
  document.head.appendChild(js4)

  await sleep(50);

  let js5 = document.createElement('script')
  js5.setAttribute('src', 'static/assets/bundles/knob.bundle.js')
  document.head.appendChild(js5)

  await sleep(50);

  let js6 = document.createElement('script')
  js6.setAttribute('src', 'static/assets/plugins/sweetalert/sweetalert.min.js')
  document.head.appendChild(js6)

  await sleep(50);

  let js7 = document.createElement('script')
  js7.setAttribute('src', 'static/assets/bundles/mainscripts.bundle.js')
  document.head.appendChild(js7)

}

async function loadLoginJs() {
  let js1 = document.createElement('script')
  js1.setAttribute('src', 'static/assets/bundles/libscripts.bundle.js')
  document.head.appendChild(js1)

  await sleep(50);

  let js2 = document.createElement('script')
  js2.setAttribute('src', 'static/assets/bundles/vendorscripts.bundle.js')
  document.head.appendChild(js2)

  await sleep(50);

  let js3 = document.createElement('script')
  js3.setAttribute('src', 'static/assets/js/login.js')
  document.head.appendChild(js3)

  await sleep(50);

  let js6 = document.createElement('script')
  js6.setAttribute('src', 'static/assets/plugins/sweetalert/sweetalert.min.js')
  document.head.appendChild(js6)

}

export default {
  loadLoginJs,
  loadJs,
  sleep
}
