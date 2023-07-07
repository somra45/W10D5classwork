import {NavLink} from 'react-router-dom';

function Gallery(props) {
    const galleries = Object.values(props)[0];

    return (
        <>
            {galleries.map((gallery) => {
                return <li className="galley"><NavLink key={gallery.id} to={`/galleries/${gallery.galleryid}`}>
                    {gallery.name}
                </NavLink></li>
            })}
        </>
    );
};  

export default Gallery;