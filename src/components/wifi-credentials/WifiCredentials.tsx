import styles from './WifiCredentials.module.css';
import {WifiConfig} from '../../config/wifi-config';

interface WifiCredentialsProps {
    wifiConfig: WifiConfig;
}

function WifiCredentials({wifiConfig}: WifiCredentialsProps) {
    return (
        <>
            <div className={styles.wifiCredentialsSection}>
                <span>SSID: </span>
                <span>{wifiConfig.ssid}</span>
            </div>
            <div className={styles.wifiCredentialsSection}>
                <span>Contraseña: </span>
                <span>{wifiConfig.password}</span>
            </div>
        </>
    );
}

export default WifiCredentials;
