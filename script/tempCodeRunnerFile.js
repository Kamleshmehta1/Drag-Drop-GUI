
 const fetchProfileInformation = function () {
     console.log('Fetching Information ...')
     setTimeout(function () {
         return 'It took 5 secs to load the profile'
     }, 5000)
 }

 console.log(fetchProfileInformation())