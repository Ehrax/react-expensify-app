import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyC-5az-lAVMs6VN55y7cGR2qCG5Eeu9vOE',
  authDomain: 'expen-4458c.firebaseapp.com',
  databaseURL: 'https://expen-4458c.firebaseio.com',
  projectId: 'expen-4458c',
  storageBucket: 'expen-4458c.appspot.com',
  messagingSenderId: '413857976709'
}

firebase.initializeApp(config)

const database = firebase.database()

// database.ref().set({
//   name: 'Alexander Rasputin',
//   age: 25,
//   isSingle: true,
//   location: {
//     city: 'Ulm',
//     country: 'Germany'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((error) => {
//   console.log('error', error)
// })

// database.ref('age').set(26)
// database.ref('location/city').set('Schwaebisch Gmuend')

// database.ref('attributes').set({
//   height: 168,
//   weight: 60
// })

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log(e)
//   })

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val())
//   })
//   .catch((e) => {
//     console.log(e)
//   })

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// })
