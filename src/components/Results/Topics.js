import React from "react";
import { Chip, Tooltip, List, ListItemText, ListItem, ListItemIcon, makeStyles } from "@material-ui/core/";
import FaceIcon from '@material-ui/icons/Face';
import PublicIcon from '@material-ui/icons/Public';
import BusinessIcon from '@material-ui/icons/Business';
import EventIcon from '@material-ui/icons/Event';
import BrushIcon from '@material-ui/icons/Brush';
import "../../App.css";

const useStyles = makeStyles({
  yellowChip: {
    backgroundColor: "#f8ce94",
    margin: "3px",
    fontWeight: "700",
  },
  lightTooltip: {
    color: "black",
    backgroundColor: "#fff0db",
  },
  lightTooltipArrow: {
    color: "#fff0db",
  }
});

function Topic(props) {
const classes = useStyles();

let type = props.type;
let icon;
let topics = props.topics;
let category;

switch (type) {
    case "PERSON":
        icon = <FaceIcon />;
        category = 'People';
        break;
    case "GPE":
        icon = <PublicIcon />;
        category = 'Locations';
        break;
    case "ORG":
        icon = <BusinessIcon />;
        category = 'Organisations';
        break;
    case "EVENT":
        icon = <EventIcon />;
        category = 'Events';
        break;
    case "WORK_OF_ART":
        icon = <BrushIcon />;
        category = 'Works of Art';
        break;
    default:
        icon = <PublicIcon />;
}

    return (  
            <Tooltip
            arrow
            classes={{ tooltip: classes.lightTooltip, arrow: classes.lightTooltipArrow }}
            placement="bottom-start"
            title={
            <React.Fragment>
                <List>
                {topics.map((element) => (
                <ListItem dense>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={element.topic} />
                </ListItem>
                ))}
                </List>
            </React.Fragment>
            }>
                <Chip
                    icon={icon}
                    label={category}
                    className={classes.yellowChip}
                /> 
            </Tooltip>
            
    );
}

export default Topic;
