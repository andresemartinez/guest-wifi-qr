import WifiQr from './components/wifi-qr/WifiQr';
import WifiCredentials from './components/wifi-credentials/WifiCredentials';
import style from './App.module.css';
import {usePromise} from 'promise-hooks-react';
import {findWifiConfig} from './config/wifi-config';

function App() {

    const [wifiConfig] = usePromise(findWifiConfig());

    return (wifiConfig
            ? <div className={style.appContainer}>
                {
                    wifiConfig.errors.length <= 0
                        ? <>
                            <div className={style.wifiQrContainer}>
                                <WifiQr wifiConfig={wifiConfig.data}/>
                            </div>
                            <div className={style.wifiCredentialsContainer}>
                                <WifiCredentials wifiConfig={wifiConfig.data}/>
                            </div>
                        </>
                        : wifiConfig.errors.map(error => <span>{error.message}</span>)
                }
            </div>
            : null
    );
}

export default App;
