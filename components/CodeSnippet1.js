import React from 'react';
import Highlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeSnippet = `import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Welcome to Flutter'),
        ),
        body: const Center(
          child: const Text('Hello World'),
        ),
      ),
    );
  }
}`;

function CodeSnippet1() {
    return (
        <Highlighter language="javascript" style={nord}>
            {codeSnippet}
        </Highlighter>
    );
}

export default CodeSnippet1;
