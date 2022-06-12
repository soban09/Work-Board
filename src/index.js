import React from "react";
import ReactDOM from "react-dom";

import App from './App'
import { WorkBoardContextProvider } from "./components/context/workBoard-context";

ReactDOM.render(<WorkBoardContextProvider>
    <App/>
</WorkBoardContextProvider>, document.getElementById('root'));