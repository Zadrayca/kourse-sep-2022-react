import React from 'react';
import {useEffect, useState} from "react";

import {albumsService} from "../../services";
import {Album} from "../Album/Album";

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAlbums().then(({data}) => setAlbums([...data]));
    }, []);

    return (
        <div>
            {albums && albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {
    Albums
};
