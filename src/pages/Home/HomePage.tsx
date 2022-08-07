import { FC, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { ErrorMessage, Loader } from '../../components';
import ImageCard from '../../components/ImageCard';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
   cards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: '2rem',
      marginTop: '1rem',
      '@media (max-width: 1300px)': {
         gridTemplateColumns: 'repeat(3, 1fr)',
      },
      '@media (max-width: 960px)': {
         gridTemplateColumns: 'repeat(2, 1fr)',
      },
      '@media (max-width: 650px)': {
         gridTemplateColumns: '100%',
      },
   },
}));

export interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = () => {
   const classes = useStyles();
   const { data, loading, error } = useFetch('nl/collection');
   const [displayData, setDisplayData] = useState(8);

   const nextPage = () => {
      setDisplayData((prev) => prev + 2);
   };

   if (loading) {
      return <Loader />;
   }

   if (error) {
      return <ErrorMessage />;
   }

   return (
      <>
         <div className={classes.cards}>
            {(data?.artObjects.slice(0, displayData) || []).map(
               (
                  art: { webImage: any; id: string; title: string; longTitle: string },
                  index: number
               ) => (
                  <ImageCard
                     key={art.id}
                     title={art.title}
                     url={art.webImage.url}
                     longTitle={art.longTitle}
                     isLast={index === displayData - 1}
                     nextPage={nextPage}
                  />
               )
            )}
         </div>
      </>
   );
};

export default HomePage;
