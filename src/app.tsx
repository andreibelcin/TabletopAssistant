import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Game from "./Game";

function App(props: any) {
    return <Game />;
}

ReactDOM.render(<App />, document.getElementById("app"));