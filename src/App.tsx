import type { Component } from 'solid-js';
import {Menu} from "./components/Menu";
import { Routes, Route, Link } from "solid-app-router"
import {TopPage} from "./pages/TopPage";
import {AboutPage} from "./pages/AboutPage";
import {Footer} from "./components/Footer";

export const App: Component = () => (
    <div>
        <h1>
            <Link class="page-title" href="/">あひゃえもんのページ</Link>
        </h1>
        <Menu/>
        <hr/>
        <Routes>
            <Route path="/" component={TopPage} />
            <Route path="/about" component={AboutPage} />
        </Routes>
        <hr/>
        <Footer/>
    </div>
)
