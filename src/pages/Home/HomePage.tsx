import { FC, useEffect, useState } from 'react';
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

   const [page, setPage] = useState(0);
   const { data, loading, error } = useFetch('nl/collection', page);
   const [displayData, setDisplayData] = useState<any>([]);

   useEffect(() => {
      if (data) {
         setDisplayData((prev: any) =>
            [...prev, ...data?.artObjects].reduce((acc, current) => {
               const content = acc.find((item: { id: string }) => item.id === current.id);
               if (!content) {
                  return acc.concat([current]);
               } else {
                  return acc;
               }
            }, [])
         );
      }
   }, [data]);

   const nextPage = () => {
      setPage((prev) => prev + 1);
   };

   if (error) {
      return <ErrorMessage />;
   }

   return (
      <>
         <div className={classes.cards}>
            {displayData?.map(
               (
                  art: { webImage: { url: string }; id: string; title: string; longTitle: string },
                  index: number
               ) => (
                  <ImageCard
                     key={art.id}
                     title={art.title}
                     url={art.webImage?.url}
                     longTitle={art.longTitle}
                     isLast={index === displayData.length - 1}
                     nextPage={nextPage}
                  />
               )
            )}
         </div>
         <div>{loading && <Loader />}</div>
      </>
   );
};

export default HomePage;
