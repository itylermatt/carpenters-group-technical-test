import {Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
    return(
        <Fragment>
            <AppBar position="static">
                <div>
                    <Toolbar >
                        <Typography variant="h6" className={'classes.title'}>
                            Carpenter's Group
                        </Typography>
                    </Toolbar>
                </div>
            </AppBar>
        </Fragment>
    );
};

export default NavBar;
