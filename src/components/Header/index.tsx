import { AppBar, makeStyles, Typography, Grid } from '@material-ui/core';
import { FC } from 'react';

const useStyles = makeStyles(() => ({
   appBar: {
      height: '70px',
   },
   headerContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
   },
}));

export interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
   const classes = useStyles();

   return (
      <AppBar position="relative" className={classes.appBar}>
         <Grid container className={classes.headerContainer}>
            <Grid item xs={12}>
               <Typography variant="h5" align="center" data-testid="company-logo">
                  MUSEUM
               </Typography>
            </Grid>
         </Grid>
      </AppBar>
   );
};

export default Header;
