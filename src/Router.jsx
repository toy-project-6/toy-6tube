import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import MovieDetail from './pages/MovieDetail';
import ChannelDetail from './pages/ChannelDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/detail/:id' element={<MovieDetail />} />
        <Route path='/channel/:channelId' element={<ChannelDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
