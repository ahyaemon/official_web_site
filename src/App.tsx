import type { Component } from 'solid-js';
import {Menu} from "./components/Menu";
import { Routes, Route, Link } from "solid-app-router"
import {TopPage} from "./pages/TopPage";
import {AboutPage} from "./pages/AboutPage";
import {Footer} from "./components/Footer";
import {HistoryPage} from "./pages/HistoryPage";
import {BookPage} from "./pages/BookPage";
import {MusicPage} from "./pages/music/MusicPage";
import {GuitarPage} from "./pages/music/GuitarPage";
import {DtmPage} from "./pages/music/DtmPage";
import {MikuPage} from "./pages/music/MikuPage";

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
            <Route path="/music">
                <Route path="/" component={MusicPage}/>
                <Route path="/guitar" component={GuitarPage}/>
                <Route path="/dtm" component={DtmPage}/>
                <Route path="/miku" component={MikuPage}/>
            </Route>
        </Routes>
        <hr/>
        <Footer/>
    </div>
)
