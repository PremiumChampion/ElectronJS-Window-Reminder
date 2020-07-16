import "./index.css";
import "./titlebar.css"
import "./main.css"
import "./footer";
import Main from './renderer/components/Main/Main';
import React from 'react';
import ReactDOM from 'react-dom';
import { initializeIcons } from "@fluentui/react";
import TitleBar from "./renderer/components/TitleBar/TitleBar";
import Footer from "./renderer/components/Footer/Footer";

initializeIcons();

ReactDOM.render(React.createElement(TitleBar, { title: "FENSTER ZUGEMACHT??" }), document.querySelector("#TitleBar"));
ReactDOM.render(React.createElement(Main), document.querySelector("#Main"));
ReactDOM.render(React.createElement(Footer), document.querySelector("#Footer"));

