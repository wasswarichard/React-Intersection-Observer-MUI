import { useEffect, useState } from 'react';

const APP_ENDPOINT_URL = 'https://www.rijksmuseum.nl/api';
const APP_API_KEY = 'yW6uq3BV';
const DEFAULT_COUNT = 10;

export interface IDataPropsProps {
   artObjects: any;
}

const useFetch = (url: string, page: number) => {
   const [data, setData] = useState<IDataPropsProps>();
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      setLoading(true);
      fetch(
         `${APP_ENDPOINT_URL}/${url}?key=${APP_API_KEY}&ps=${DEFAULT_COUNT}&p=${page}&involvedMaker=Rembrandt+van+Rijn`
      )
         .then((response) => response.json())
         .then((result) => {
            setData(result);
         })
         .catch((error) => {
            setError(error);
         })
         .finally(() => {
            setLoading(false);
         });
   }, [url, page]);

   return {
      data,
      loading,
      error,
   };
};

export default useFetch;
