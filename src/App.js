import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TabsComponent from './components/Tabs/TabsComponent';

function App() {
    return (
        <div>
            <Header />
                <TabsComponent />
            <Footer />
       </div>
    )
}

export default App;
