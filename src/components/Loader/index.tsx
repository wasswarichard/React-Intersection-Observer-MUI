import { CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import classnames from 'classnames';
import { FC } from 'react';

const useStyles = makeStyles(() => ({
   wrapper: {
      width: '100%',
      minHeight: ({ wrapperMinHeight }: ILoaderProps) => wrapperMinHeight || '700px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
   },
   overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.88)',
      zIndex: 2,
      position: 'absolute',
   },
}));

export interface ILoaderProps {
   wrapperMinHeight?: string;
   overlay?: boolean;
}

const Loader: FC<ILoaderProps> = (props) => {
   const classes = useStyles(props);

   const { overlay } = props;

   return (
      <Grid
         className={classnames({
            [classes.wrapper]: true,
            [classes.overlay]: !!overlay,
         })}
      >
         <Grid item xs={12}>
            <CircularProgress data-testid="loader" />
         </Grid>
         <Grid item xs={12}>
            <Typography>Loading...</Typography>
         </Grid>
      </Grid>
   );
};

export default Loader;
