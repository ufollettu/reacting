import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faExternalLinkAlt, faBook } from '@fortawesome/free-solid-svg-icons'

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

library.add(faStroopwafel, faExternalLinkAlt, faBook)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
  }
}
export default App