import React, { Component } from 'react';
import ContactCard from './ContactCard'
import jokes from './Jokes'

class MainContent extends Component {
    constructor() {
        super()
        this.state = {
            answer: "yes"
        }
        this.jokeItems = this.mapJokes()
    }

    mapJokes() {
        return jokes.map(joke =>  <ContactCard answer={this.state.answer} key={joke.id} contact={joke}></ContactCard>);
    }

    setStyle() {
        return this.style = {};
    }

    render() {
        return (
            <main>
                {this.jokeItems}
            </main>
        )
    }
}

export default MainContent