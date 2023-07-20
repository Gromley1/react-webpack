import { createRoot } from "react-dom/client";
import  App  from "./App";
import { ReactNode } from "react";

const container = document.getElementById("root");
const root = createRoot(container);
const renderApp: ReactNode = App();

root.render(renderApp)