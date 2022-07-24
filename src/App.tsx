import type { Component } from 'solid-js';
import {Menu} from "./components/Menu";
import { Routes, Route, Link } from "solid-app-router"
import {TopPage} from "./pages/TopPage";
import {AboutPage} from "./pages/AboutPage";
import {Footer} from "./components/Footer";
import {HistoryPage} from "./pages/HistoryPage";
import {BookPage} from "./pages/BookPage";

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
            <Route path="/history" component={HistoryPage} />
            <Route path="/book" component={BookPage} />
        </Routes>
        <hr/>
        <Footer/>
    </div>
)
