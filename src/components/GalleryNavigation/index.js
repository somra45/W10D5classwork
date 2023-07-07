import {NavLink} from "react-router-dom";
import Gallery from './gallery.js';
import './GalleryNavigation.css'

function GalleryNavigation(props) {
    return (
        <nav>
            <NavLink to='/'>
                Home
            </NavLink>
            <ul>< Gallery galleries={props.galleries}/></ul>
        </nav>
    );
};

export default GalleryNavigation;