import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ResourceNotFoundPage from "../ResourceNotFoundPage";

describe('Tests for PageNotFound component', () => {
   it('should successfully render the PageNotFound component', async () => {
      const { getByText } = render(
         <Router>
            <ResourceNotFoundPage />
         </Router>
      );

      expect(getByText('Page not found')).toBeInTheDocument();
   });
});
