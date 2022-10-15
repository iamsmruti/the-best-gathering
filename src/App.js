import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Buttons from './buttons/Buttons';
import Cards from './cards/Cards';
import Layout from './core-components/Layout';
import Home from './Home';
import Icons from './icons/Icons';
import Sliders from './slider/Sliders';
import TextFields from './textfields/TextFields';
import ToggleButton from './toggleButton/ToggleButton';
import Alerts from './alerts/Alerts'
import BreadCrumbs from './breadcrumbs/BreadCrumbs'
import ButtonGroups from './button-groups/ButtonGroups'

const App = () => {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/toggle-button" element={<ToggleButton />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/textfields" element={<TextFields />} />
        <Route path="/slider" element={<Sliders />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/" element={<Home />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/breadcrumbs" element={<BreadCrumbs/>} />
        <Route path="/button-groups" element={<ButtonGroups/>} />

      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
