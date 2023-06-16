
import Layout from 'antd/es/layout/layout';
import './App.css';
import Navbar from './components/Navbar';
import {Link, Route, Routes} from "react-router-dom"
import HomePage from './components/HomePage';
import Exchanges from './components/Exchanges';
import CryptoCurrencies from './components/CryptoCurrencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import 'antd/dist/reset.css';
import Typography from 'antd/es/typography/Typography';
import { Space } from 'antd';


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={ <HomePage/>}/>
              <Route exact path="/exchanges" element={ <Exchanges/>}/>
              <Route exact path="/cryptocurrencies" element={ <CryptoCurrencies/>}/>
              <Route exact path="/crypto/:coinId" element={ <CryptoDetails/>}/>
              <Route exact path="/news" element={ <News/>}/>

            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer" >
        <Typography.Title level={5}>
          Cryto-wiki <br/> All Rights Reserved
        </Typography.Title>
        <Space>
          <Link to="/">
            Home
          </Link>
          <Link to="/exchanges">
            Exchanges
          </Link>
          <Link to="/cryptocurrencies">
            Crypto Currencies
          </Link>
        </Space>
      </div>
    </div>
  );
}

export default App;
