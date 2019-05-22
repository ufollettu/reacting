import React, { Component } from 'react';
import ContactCard from './ContactCard'
import jokes from './Jokes';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrap = styled.div`
   display: flex; 
   flex-wrap: wrap;
`;
class MainContent extends Component {
    constructor() {
        super()
        this.state = {
            answer: "yes",
            isLoading: true, 
            isLoggedIn: false,
            isOpen: false
        }
        this.jokeItems = this.mapJokes()
        this.spinner = this.LoadSpinner()
        this.handleLoginButton = this.handleLoginButton.bind(this)
    }

    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1200)
    }

    LoadSpinner() {
        return <h1>Loading...</h1>   
    }
    
    mapJokes() {
        return <Wrap>
{            jokes.map(joke =>  <ContactCard 
                answer={this.state.answer} 
                key={joke.id} 
                contact={joke}
                isLoading={this.state.isLoading}
                isOpen={this.state.isOpen}
                ></ContactCard>)}
        </Wrap>
    }

    setStyle() {
        return this.style = {};
    }

    handleLoginButton() {
         this.setState(prevState => {
             return {
                 isLoggedIn : !prevState.isLoggedIn,
                
             }            
         })
    }

    render() {
        return (
            <main>
                <div>
                    <p><button onClick={this.handleLoginButton}>{!this.state.isLoggedIn ? 'Login' : 'Logout'}</button></p>
                </div>
                {this.jokeItems}
                {!this.state.isLoggedIn ? 
                    <div><h1>You are not logged in</h1></div>
                :
                    <div>
                        {this.state.isLoading ? this.spinner : this.jokeItems}
                    </div>
                }
            </main>
        )
    }
}

export default MainContent