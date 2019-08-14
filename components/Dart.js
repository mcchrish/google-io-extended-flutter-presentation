import React from 'react';
import { Image } from 'rebass';
import dartLogo from '../assets/logo_dart_1080px_clr.png';

function Logo() {
    return (
        <>
            <Image width={150} src={dartLogo} alt="Dart Logo" />
        </>
    );
}

export default Logo;
