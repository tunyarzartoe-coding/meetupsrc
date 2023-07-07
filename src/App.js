import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetupsPage from "./pages/NewMeetupPage";

import { Route,Routes } from "react-router-dom";
import FavoritesMeetupsPage from "./pages/FavoritesMeetupsPage";
import Layout from "./components/ui/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesMeetupsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
