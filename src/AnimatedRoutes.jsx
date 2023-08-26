import { Routes, Route,useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from './pages/Home';
import SingleEvent from './pages/SingleEvent';
import Events from './pages/Events';
import Error404Page from './pages/Error404Page';
import SingleMagazine from './pages/SingleMagazine';
import Articles from "./pages/Articles";
import SingleArticle from "./pages/SingleArticle";


const PageAn = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/upevents" element={<Events />} />
      <Route path="/upevents/:slug" element={<SingleEvent />} />
      <Route path="/magazines/:slug" element={<SingleMagazine />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:slug" element={<SingleArticle />} />
      <Route path="/*" element={<Error404Page />} />
    </Routes>
    </AnimatePresence>
  );
};

export default PageAn;
