import React from 'react';
import { Image } from 'rebass';
import flutterLogo from '../assets/logo_flutter_1080px_clr.png';

function Logo() {
    return (
        <>
            <Image width={150} src={flutterLogo} alt="Flutter Logo" />
        </>
    );
}

export default Logo;
