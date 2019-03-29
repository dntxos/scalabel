import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {goCreate} from '../common/service';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles/index';
import DeleteIcon from '@material-ui/icons/Delete';

// player-controls
// Get the task
//
/* Sidebar: mainList */

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

function IconLabelButtons(props) {
    const { classes } = props;
    return (
        <div>
            <Button variant="contained" className={classes.button}>
                Remove
            <DeleteIcon className={classes.rightIcon} />
            </Button>
        </div>
    );
}
const DeletButton = withStyles(styles)(IconLabelButtons);

type Props = {
    categories: Object,
    attributes: Object,
}

export class ToolBar extends React.Component<Props> {
    render() {
        const {categories} = this.props;
        const {attributes} = this.props;
        return (
            <div>
                <ListItem button onClick={goCreate}>
                    <ListItemIcon>
                        <CreateIcon />
                    </ListItemIcon>
                    <ListItemText primary='Create new project' />
                </ListItem>
                <DeletButton />
            </div>
        )
    }

}


