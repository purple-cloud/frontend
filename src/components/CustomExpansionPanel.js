import React from "react";
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


const styles = theme => ({
    root: {
        width:'100%',

        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        }
    }
});

class CustomExpansionPanel extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ExpansionPanel className="expansionPanels">
                <ExpansionPanelSummary>
                    <Typography className="expansionTitles">{this.props.id} - {this.props.date}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        {this.props.text}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );

    }
};
export default CustomExpansionPanel;