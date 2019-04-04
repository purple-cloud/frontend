import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import TableRow from 'material-ui'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './index.css';
import './components/layouts/Header';
import './components/layouts/Footer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { mainListItems, secondaryListItems } from './components/layouts/Navbar';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Stats from './components/Stats';
import CustomExpansionPanel from './components/CustomExpansionPanel'



class App extends Component {


    constructor() {
        super();
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        /*fetch('domain/getUsers')
            .then(function (resp) {
                return resp.json();
            }).then(function (shit) {
            this.setState({ users: shit})
        })*/
    }





    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

    render() {
        /*let users = this.state.users.map(function (user) {
            return <HelloWorld name={user.name} age={user.age}/>
        }*/



        return (
            <div className="App">

                <AppBar position="static" color="Default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Cybersecurity Data Panel
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div className="navbar">
                    <Typography variant="h6">Archive</Typography>

                    <List component="nav">


                        <ListItem button onClick={this.handleClick}>

                            <ListItemText inset primary="2019" />
                            {this.state.open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button>

                                    <ListItemText inset primary="March" />
                                </ListItem>
                                <ListItem button>

                                    <ListItemText inset primary="April" />
                                </ListItem>
                            </List>
                        </Collapse>


                    </List>


                </div>

                <header className="App-header">



                    <table>
                        <CustomExpansionPanel id="#123453768" date="29.03.2019" text="DummyData"/>
                        <CustomExpansionPanel id="#023987409" date="20.03.2019" text="DummyData"/>
                        <CustomExpansionPanel id="#483762873" date="06.03.2019" text="DummyData"/>

                    </table>
                </header>
            </div>
        );
    }


}


export default App;
