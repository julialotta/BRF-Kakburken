import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Nyinflyttad } from "./components/pages/Nyinflyttad";
import { Dokument } from "./components/pages/Dokument";
import { Kontakt } from "./components/pages/Kontakt";
import { NotFound } from "./components/NotFound";
import { Layout } from "./components/Layout";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes key={location.pathname} location={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/nyinflyttad' element={<Nyinflyttad />} />
          <Route path='/dokument' element={<Dokument />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
