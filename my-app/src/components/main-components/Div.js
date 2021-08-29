import React from 'react';
import animalImg from './2020-03-feature-giraffe_tcm7-269465.png'

class Div extends React.Component{

    render(){
        return(
            <>
            <h2>Title</h2>
            <img src={animalImg} alt="animal" title = "this is a description"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </>
        )
    }

}

export default Div;