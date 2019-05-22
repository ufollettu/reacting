import React,  { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardContainer = styled.div`
   border: 1px solid lightgray; 
   margin: 8px 8px 8px 8px;
   height: 580px;
   width:320px;
`;
const CardHeader = styled.div`
    display: flex;
    border-bottom: 2px solid lightgrey;
`;

const Title = styled.span`
  margin: 0 0;
  padding: 0.5em 1em;
  font-size: 12px;
  font-weight: bold;
  color: grey;
`;

const BookIcon = styled.span`
  margin: 0 0;
  padding: 0.5em 0.5em;
  max-width: 16px;
  color: grey;
  border-left: 2px solid lightgray;
`;

const CardFooter = styled.div`
    border-top: 2px solid lightgrey;
    transform: ${props => props.isOpen ? "translate(0%, -55%)" : "translate(0%, -5%)"};
    background-color: white;
    transition: 0.3s all ease-out;
`;
const Button = styled.button`
  cursor: pointer;
  background: ${props => props.isOpen ? "white" : "blue"};
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  color: ${props => props.isOpen ? "blue" : "white"};
  border: 0px solid transparent;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.65);
  margin: 0 1em;
  padding: 0.25em 1em;
  transform: translate(0%, -70%);
  transition: 0.5s all ease-out;
  position: absolute;
  z-index: 20;

  &::before {
    content: ${props => props.isOpen ? "˄" : "˅"};
  }
`;

const fadeIn = keyframes`
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    `;

const fadeOut = keyframes`
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    `;

const Tags = styled.p`
    padding: 0.25em 1em;
    margin: 10px 0 0 0;
    visibility: ${props => props.isOpen ? 'hidden' : 'visible'};
    animation: ${props => props.isOpen ? fadeOut : fadeIn} 0.3s linear;
    transition: visibility 0.3s ease-in;
`;

const Sottotitolo = styled.p`
    padding: 1em 1em;
    margin: 0 0 0 0;
    background-color: lightgrey;
`;

const Anno = styled.p`
    padding: 0.25em 1em;
    margin: 0 0 0 0;
`;

const Autori = styled.p`
    padding: 0.25em 1em;
    margin: 0 0 0 0;
`;

const Risorse = styled.p`
    padding: 0.25em 1em;
    visibility: ${props => props.isOpen ? 'hidden' : 'visible'};
    animation: ${props => props.isOpen ? fadeOut : fadeIn} 0.5s linear;
    transition: 0.5s all ease-out;
    color: blue;
`;
class ContactCard extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
    render() {
        
        return (

                <CardContainer>
                    <CardHeader>
                        <Title>{this.props.contact.titolo.toUpperCase()} 
                        </Title>
                        <BookIcon>                      
                            <FontAwesomeIcon icon="book" />
                        </BookIcon>    
                    </CardHeader>
                    <img src={this.props.contact.img} alt="" srcSet="" />
                    <CardFooter isOpen={this.state.isOpen}>
                        <Button isOpen={this.state.isOpen} onClick={this.handleRisorseButtonClick}>{this.state.isOpen ? "˄" : "˅"} RISORSE</Button>
                        {!this.state.isOpen ? <Tags>{this.props.contact.tags.map(tag => <span key={tag}><strong>{tag}, </strong> </span>)}</Tags>: <Sottotitolo>Questo è il sottotitolo</Sottotitolo>}
                        <Autori>Autori: {this.props.contact.autori.map(autore => (<strong>{autore}, </strong>))} </Autori>
                        <Anno isOpen={this.state.isOpen}>  Anno:<strong>{this.props.contact.anno}</strong></Anno>
                        {this.state.isOpen ? 
                           this.props.contact.autori.map(autore => {
                                return(
                                    <Risorse href="#" key={autore}><FontAwesomeIcon icon="external-link-alt" /> {autore}</Risorse>
                                    )
                            }) : ''
                        }
                    </CardFooter>
                </CardContainer>
                  
        )
    }

    handleRisorseButtonClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default ContactCard

