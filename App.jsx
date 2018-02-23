import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[
                {"id":1,"name":"Foo"},{"id":2,"name":"Bar"},{"id":3,"name":"Woo"}
                ]
        }
    }

    render(){

        const style = {
            height: 570,
            width: 1300,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            titleStyle:{
                textAlign: 'left'
            }
        };


        
        return(
            <MuiThemeProvider>
            <div>
                <Paper style={style} zDepth={1}>
                    <AppBar title={<span style={style.titleStyle}>SINGHSTA</span>}  
                    iconElementRight={<FlatButton label="Sign Out" />}>  
                    </AppBar>
                    <CardDefault />
                </Paper>
            </div>
            </MuiThemeProvider>
        );
    }
}



class CardDefault extends React.Component{
    render(){
        return(
            <div>
                <Card>
                <CardHeader
                    title="Without Avatar"
                    subtitle="Subtitle"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                </Card>

                <Card>
                <CardHeader
                    title="Without Avatar2"
                    subtitle="Subtitle2"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                </Card>
            </div>
        )
    }
}
export default App;