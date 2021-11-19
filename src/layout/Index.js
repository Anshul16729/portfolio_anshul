import React from 'react'
import Home from '../components/Home';
import About from '../components/About'
import Skills from '../components/Skills';
import Header from './Header';



export default function Index() {
    return (
        <div>
            <Header/>
            <Home/>
            <main className="main">
            <About/>
            <Skills/>
            </main>
        </div>
    )
}
