
import Error404 from 'containers/errors/Error404';
import Connect from 'containers/pages/Connect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './containers/pages/Home';
import store from './store';

function App() {
  let htmlBody = window.document.getElementById('html')

  if (
    localStorage.getItem('theme') === 'dark' ||
    (!(localStorage.getItem('theme') === 'light'))
  ) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark');
  }


  return (
    <Provider store={store}>
    <Router>
      <Routes>
        {/* Error Display */}
        <Route path="*" element={<Error404/>}/>
        {/* Home Display */}
        <Route path="/" element={<Home/>}/>
        {/* Authentication */}
        <Route path="/connect" element={<Connect/>}/>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
