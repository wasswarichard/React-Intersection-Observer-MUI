import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FC } from 'react';
import { HOME_PAGE_ROUTE_PATH, RESOURCE_NOT_FOUND_PAGE_ROUTE_PATH } from './route-paths';
import HomePage from './pages/Home/HomePage';
import ResourceNotFoundPage from './pages/ResourceNotFound/ResourceNotFoundPage';

export interface IRoutePathsProps {}

const RoutePaths: FC<IRoutePathsProps> = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={HOME_PAGE_ROUTE_PATH} element={<HomePage />} />
            <Route path={RESOURCE_NOT_FOUND_PAGE_ROUTE_PATH} element={<ResourceNotFoundPage />} />
         </Routes>
      </BrowserRouter>
   );
};

export default RoutePaths;
