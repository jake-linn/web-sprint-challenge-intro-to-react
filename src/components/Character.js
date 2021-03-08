// Write your Character component here
import React from 'react'
import Styled, {} from 'styled-components'




const StyledCharacters = Styled.div `
justify-conent: center;
padding: 10px;
color: white;
border: green 5px solid;
font-family: courier new;
display: flex;
font: 10px;



`

const Characters = (props) => {
const {name, height} = props.starWars
return (
<StyledCharacters>
<h2> Name: {name} </h2>
<h2> Height: {height} CM </h2>

</StyledCharacters>

);

};

export default Characters;
