import { Grid, makeStyles } from '@material-ui/core';
import { Header } from '../index';
import { FC } from 'react';

const useStyles = makeStyles(() => ({
   mainContainer: {
      display: 'flex',
   },
   contentContainer: {
      display: 'flex',
      padding: '0 80px',
   },
}));

export interface ILayoutProps {
   children: JSX.Element;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
   const classes = useStyles();

   return (
      <Grid container className={classes.mainContainer}>
         <Grid item xs={12}>
            <Header />
         </Grid>
         <Grid item xs={12} className={classes.contentContainer}>
            {children}
         </Grid>
      </Grid>
   );
};

export default Layout;
