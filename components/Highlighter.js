import React from 'react';
import Highlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default ({ code, language = 'dart' }) => {
    return (
        <Highlighter language={language} style={nord}>
            {code}
        </Highlighter>
    );
};
