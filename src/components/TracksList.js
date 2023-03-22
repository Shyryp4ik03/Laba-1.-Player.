import React from 'react';
import './TracksList.css';

//Список песен, находится слева, функционирует при помощи bottom-btns-ctr и сопуствующей картинкой

const TracksList = (props) => {
    let tracksList = props.tracksList;
    const tracksListElems = tracksList.map((track, index) => {
        return (
            <li
                key={track.id}
                isfavourite={track.isFavourite.toString()}
                index={index}
                data-trackid={track.id}
                className={track.id === props.currentTrackID ? "active" : ""}
                id={track.id === props.currentTrackID ? "activeTrack" : ""}
                style={{
                    display: (
                        (props.favsonly && !track.isFavourite)
                        || (
                            props.searchString !== "" 
                            && !track.title.toLowerCase().includes(props.searchString.toLowerCase())
                        )) ? "none" : null
                }}
                onClick={(ev) => props.selectThisTrack(ev, track.id)}
            >
                <span>
                    <strong>{track.id === props.currentTrackID ? '> ' : ''}</strong>
                    {track.title}
                </span>
            </li>
        );
    });

    return (
        <div 
            className="TracksList"  
            style={{
                transform: props.sidebar ? "translateX(0%)" : null
            }}
        >
            <div className="tracks-list-ctr" id="tracksListCtr">
                {
                    props.searchString === "" ?
                    <div className="tracks-list-upper-elem">
                        <p>PLAYLIST</p>
                    </div>
                    : null
                }
                <ul>
                    {tracksListElems}
                </ul>
            </div>
            <div className="bottom-ctr">
                <div className="bottom-btns-ctr">
                <button
                        className="back-btn"
                        dangerouslySetInnerHTML={{
                            __html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 225 115.8" style="enable-background:new 0 0 225 115.8;" xml:space="preserve"><path d="M224.2,57.9c0,5-4,9-9,9H31.6l32.6,32.6c3.5,3.5,3.5,9.2,0,12.7c-3.5,3.5-9.2,3.5-12.7,0l-48-48c-0.2-0.2-0.4-0.4-0.6-0.7 c-0.1-0.1-0.2-0.2-0.2-0.3c-0.1-0.1-0.2-0.3-0.3-0.4c-0.1-0.1-0.2-0.3-0.2-0.4C2,62.4,2,62.3,1.9,62.2c-0.1-0.1-0.1-0.3-0.2-0.4 c-0.1-0.1-0.1-0.3-0.2-0.4c-0.1-0.1-0.1-0.3-0.1-0.4c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.1-0.1-0.3-0.1-0.4C1.1,60,1,59.8,1,59.7 c0-0.2,0-0.3-0.1-0.5c0-0.1,0-0.3-0.1-0.4c0-0.3,0-0.6,0-0.9l0,0l0,0c0-0.3,0-0.6,0-0.9c0-0.1,0-0.3,0.1-0.4c0-0.2,0-0.3,0.1-0.5 c0-0.2,0.1-0.3,0.1-0.4c0-0.1,0.1-0.3,0.1-0.4c0-0.1,0.1-0.3,0.1-0.4c0-0.1,0.1-0.3,0.1-0.4c0.1-0.1,0.1-0.3,0.2-0.4 c0.1-0.1,0.1-0.3,0.2-0.4C2,53.5,2,53.4,2.1,53.3c0.1-0.1,0.2-0.3,0.2-0.4c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.2-0.3 c0.2-0.2,0.4-0.5,0.6-0.7l48-48c3.5-3.5,9.2-3.5,12.7,0c3.5,3.5,3.5,9.2,0,12.7L31.6,48.9h183.6C220.1,48.9,224.2,52.9,224.2,57.9z"/></svg>`
                        }}
                        onClick={props.toggleSidebar}
                    ></button>
                    
                </div>
            </div>
        </div>
    );
}

export default TracksList;
