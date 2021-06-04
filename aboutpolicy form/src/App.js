import {BrowserRouter} from 'react-router-dom';

import Router from './Router';
import Layout from './components/Layout/Layout';
import './App.scss';

function App () {
  return (
    <BrowserRouter>
      <Layout>
        <Router />

      </Layout>
    </BrowserRouter>
  );
}

export default App;
