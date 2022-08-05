import WifiQr from './components/wifi-qr/WifiQr';
import WifiCredentials from './components/wifi-credentials/WifiCredentials';
import style from './App.module.css';
import { usePromise } from 'promise-hooks-react';
import { findWifiConfig } from './services/wifi-config';
import WifiConfigErrors from './components/wifi-config-errors/WifiConfigErrors';

function App() {
  const [wifiConfig] = usePromise(() => findWifiConfig(), []);

  return wifiConfig ? (
    <div className={style.appContainer}>
      {wifiConfig.errors.length <= 0 ? (
        <>
          <div className={style.wifiQrContainer}>
            <WifiQr wifiConfig={wifiConfig.data} />
          </div>
          <div className={style.wifiCredentialsContainer}>
            <WifiCredentials wifiConfig={wifiConfig.data} />
          </div>
        </>
      ) : (
        <WifiConfigErrors errors={wifiConfig.errors} />
      )}
    </div>
  ) : null;
}

export default App;
