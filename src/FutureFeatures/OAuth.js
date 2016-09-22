// import Header from './Header'
// import WelcomeModal from './WelcomeModal'
// import Main from './Main'
// import Footer from './Footer'
// import Task from './Task'
// import '../styles/screen.sass'
// // import Uri from 'jsuri'
// // import gapi from 'gapi'
//
// // import Reqwest from 'reqwest'
// //
// // const AUTH_URL = 'https://sleepy-stream-38118.herokuapp.com/request_token'
// // const USER_URL = 'https://sleepy-stream-38118.herokuapp.com/'
// // const APP_URL = 'https://brettm.alank.draft1.surge.sh/'
// // // const LOCAL = 'localhost:3000'
// // const CLIENT_ID = '368505026176-89o9qulacirst0f0hs6sa722c4fhddjp.apps.googleusercontent.com'
// // const KEY = 'ya29.CjNlA4KvilCmmFizUEBOOjmU7LaO4CO2XEBUxH5wxo37sG-LMmNg5mPCsNzkOMJQzOBkwVE'
//
// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       screen: 'home',
//       userName: '',
//       password: '',
//       overlay: false,
//       signedIn: false,
//       currentUser: { handle: '' }
//     }
//   }
//   //
//   // componentDidMount () {
//   //   let token = new Uri(window.location.search).anchor()
//   //   window.sessionStorage.setItem('token', token)
//   //   console.log(token)
//   // }
//   //
//   // getMyInfo = () => {
//   //   window.fetch(`https://people.googleapis.com/v1/people/me?key=${KEY}`)
//   //   .then(res => res.json())
//   //   .then(data => console.log(JSON.stringify(data)))
//   // }
//   //
//   // componentDidMount () {
//   //   if (!!window.sessionStorage.getItem('jwt')) { this.currentUserFromAPI() }
//   // }
//   //
//   // currentUserFromAPI = () => {
//   //   this.readFromAPI(USER_URL + 'current_user', (user) => {
//   //     this.setState({
//   //       signedIn: true, currentUser: user
//   //     })
//   //   })
//   // }
//   //
//   // readFromAPI = (url, successFunction) => {
//   //   Reqwest({
//   //     url: url,
//   //     type: 'json',
//   //     method: 'get',
//   //     contentType: 'application/json',
//   //     headers: { 'Authorization': window.sessionStorage.getItem('jwt') },
//   //     success: successFunction,
//   //     error: console.log('error')
//   //   })
//   // }
//   //
//   startApp = (event) => {
//     // window.location.assign(`https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${CLIENT_ID}&scope=email%20profile&redirect_uri=${APP_URL}`)
//     event.target.parentNode.className += ' hidden'
//     event.target.style.display = 'none'
//     const blurEl = document.querySelector('.blur')
//     blurEl.className += ' off'
//     this.setState({screen: 'loggedIn'})
//   }
//
//   getName = (event) => {
//     let name = event.target.value
//     this.setState({userName: name})
//   }
//
//   // getPassword = (event) => {
//   //   let pass = event.target.value
//   //   this.setState({password: pass})
//   // }
//
//   navigateTo = (scr) => {
//     this.setState({screen: scr})
//   }
//
//   toggleOverlay = (bool) => {
//     this.setState({overlay: bool})
//   }
//
//   render () {
//     let scr
//     console.log(this.state)
//     switch (this.state.screen) {
//       case 'home': scr = <div className='app'>
//         <div className='blur' />
//         <Header />
//         <WelcomeModal start={this.startApp} getName={this.getName} getPass={this.getPassword} />
//         <Footer />
//       </div>
//         break
//       case 'loggedIn': scr = <Main nav={this.navigateTo} />
//         break
//       case 'task': scr = <Task toggleOverlay={this.toggleOverlay} open={this.state.overlay} />
//         break
//       default: scr = <div>Error</div>
//     }
//     return <div>{ scr }</div>
//   }
// }
// export default App
