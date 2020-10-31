import React from "react";
import { Chip, Tooltip, List, ListItemText, ListItem, ListItemIcon, makeStyles } from "@material-ui/core/";
import FaceIcon from '@material-ui/icons/Face';
import PublicIcon from '@material-ui/icons/Public';
import BusinessIcon from '@material-ui/icons/Business';
import "../../App.css";

const useStyles = makeStyles({
  blueChip: {
    backgroundColor: "#c7e2fc",
    margin: "3px",
    fontWeight: "700",
  },
  greyChip: {
    backgroundColor: "lightgrey",
    margin: "3px",
    fontWeight: "700",
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
    default:
        icon = <PublicIcon />;
}

    return (  
            <Tooltip
            arrow
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
                className={classes.blueChip}
            /> 
            </Tooltip>
            
    );
}

export default Topic;
