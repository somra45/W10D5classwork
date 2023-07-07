import harvardArt from "./data/harvardArt.js";
import GalleryNavigation from "./components/GalleryNavigation/index.js";
import GalleryView from "./components/GalleryView/index.js";
import { Redirect, Route, Switch} from "react-router-dom/cjs/react-router-dom.min"

function App(props) {
  return (
    <>
    <h1>
      <GalleryNavigation  galleries={harvardArt.records} />
    </h1>
    <Route path="/galleries/:galleryid" component={GalleryNavigation}>
      < GalleryView galleries={harvardArt.records} />
    </Route>
    </>
  );
};

export default App;
