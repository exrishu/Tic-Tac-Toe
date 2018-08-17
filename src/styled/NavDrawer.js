import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import styled from 'styled-components'

const StayVisible = styled.div`
    posotion: absolute;
    margin-left: ${(props)=> (props.open) ? `${props.width}px` : 'none'};
    transition: margin .2s;
`
export const NavToggleButton = (props) =>{
    return (


                <StayVisible
                open={props.open}
                width={props.width}
                >
                       <FloatingActionButton
                        onClick={props.toggle}
                >
                <Menu/>  
                </FloatingActionButton> 
                    </StayVisible>
                  

    ) 


}
