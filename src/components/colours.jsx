import React, { Component } from 'react';
import { ColourData } from './sidebar_data';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";

class Colours extends Component {
    state = { clicked: null } 
    render() { 
        return (

            <div className="ColourWrap">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">< SearchIcon /></button>
                <input type="text" className="InputText" placeholder="Search by object" aria-label="Recipient's username" aria-describedby="button-addon2" />
                
                <ul className='PaletteList'>
                    {ColourData.map((val, key) => {
                        return(
                            <ColourDiv onClick={() => this.handleColourSelect(val.colour_code)}>
                                <ColourCell colour_name={val.colour_name} 
                                            border_colour={this.getBorderColour(val.colour_code)}>           
                                </ColourCell>
                                <ColourText >{val.object}</ColourText>
                                
                            </ColourDiv>
                        )
                    })}
                </ul>
            </div>
        );
    }

    handleColourSelect = (selected_colour_code) => {
        const clicked = selected_colour_code;
        this.setState({ clicked });
        // change colour of brush
    }

    getBorderColour = (this_colour_code) => {
        const border_colour = this.state.clicked === this_colour_code ? '2px solid #000000' : '2px solid #FFFFFF'
        return border_colour
    }
}

const ColourDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const ColourCell = styled.button`
    background-color: ${props => props.colour_name};
    border-radius: 50%;
    border: ${props => props.border_colour};
    width: 20px;
    height: 20px;
`

const ColourText = styled.h6`
    font-size: 0.9em;
    text-align: center;
    color: black;
    margin-left: 5px;
    font-weight: 300;
`;
 
export default Colours;