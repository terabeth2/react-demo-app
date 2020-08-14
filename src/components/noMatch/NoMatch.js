import React from 'react';
import Images404 from '../../404 image.png'

function NoMatch(props) {
    return (
        <div>
            <h1>OOPs Sorry!</h1>
            <img src={Images404} alt="404"/>
        </div>
    );
}
export default NoMatch;