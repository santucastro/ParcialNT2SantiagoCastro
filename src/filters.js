import Vue from 'vue'
import moment from 'moment'

Vue.filter('reverse', function(value) {
    return value.split('').reverse().join('')
})

Vue.filter('pasarAmayuscula', function(value) {
    return value.toUpperCase()
})

Vue.filter('pasarAminuscula', function(value) {
    return value.toLowerCase()
})

Vue.filter('wrap', function(value, strBegin, strEnd) {
    return strBegin + value + strEnd
})

Vue.filter('pasarMayus', function(value) {
    return value.charAt(0).toUpperCase() + value.substr(1)
})

Vue.filter('formatDate', function(value) {
    if (value)
      return moment(String(value)).format('MM/DD/YYYY hh:mm:ss')
    })