import { FC, useRef, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import classnames from 'classnames';
import useObserver from '../../hooks/useObserver';

const useStyles = makeStyles(() => ({
   card: {
      minHeight: '100px',
      opacity: 1,
      transform: 'translateY(50px)',
      transition: '0.5s',
   },
   show: {
      opacity: 1,
      transform: 'translateY(0)',
   },
}));

export interface IImageCardProps {
   url: string;
   title: string;
   longTitle: string;
   isLast: boolean;
   nextPage: () => void;
}

const ImageCard: FC<IImageCardProps> = ({ url, title, longTitle, isLast, nextPage }) => {
   const classes = useStyles();
   const targetRef = useRef(null);
   const [imageUrl, setImageUrl] = useState<string>('');
   const [isVisible, setIsVisible] = useState<boolean>(false);
   const entry = useObserver(targetRef, { rootMargin: '10px' });
   const animatedEntry = useObserver(targetRef, { rootMargin: '0px' });

   useEffect(() => {
      if (!entry) return;
      if (isLast && entry.isIntersecting) {
         nextPage();
      }
      if (entry.isIntersecting) {
         setImageUrl(url);
      }
   }, [entry, isLast, nextPage, url]);

   useEffect(() => {
      if (animatedEntry?.isIntersecting) {
         setIsVisible(true);
      }
   }, [animatedEntry]);

   return (
      <Card
         sx={{ maxWidth: 400 }}
         className={classnames({
            [classes.card]: true,
            [classes.show]: isVisible,
         })}
      >
         <div ref={targetRef}></div>
         <CardMedia component="img" height="245" image={imageUrl} data-src={url} alt={title} />
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               ${title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               ${longTitle}
            </Typography>
         </CardContent>
      </Card>
   );
};

export default ImageCard;
