import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
//import RaisedButton from 'material-ui/RaisedButton'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

injectTapEventPlugin()

class Template extends Component{

    render(){
        return(
            <MuiThemeProvider>
        <div>
            <header>
                <h1>TicTacToe</h1>
                <Button variant="contained" color="primary" href='profile'>
        Primary
      </Button>
            </header>
            <main>
                {this.props.children}
             </main>
            </div>
           </MuiThemeProvider> 
            )
    }
}
export default Template