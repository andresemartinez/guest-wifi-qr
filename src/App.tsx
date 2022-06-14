import WifiQr from './components/wifi-qr/WifiQr';
import {WIFI_CONFIG} from './config/wifi-creds';
import WifiCredentialsDisplay from './components/wifi-credentials-display/WifiCredentialsDisplay';
import style from './App.module.css';

function App() {

    return (
        <div className={style.appContainer}>
            <div className={style.wifiQrContainer}>
                <WifiQr wifiConfig={WIFI_CONFIG}/>
            </div>
            <div className={style.wifiCredentialsContainer}>
                <WifiCredentialsDisplay wifiConfig={WIFI_CONFIG}/>
            </div>
        </div>
    );
}

export default App;
