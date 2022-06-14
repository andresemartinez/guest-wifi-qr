import {WifiConfig} from '../wifi-qr/QrGenerator';
import styles from './WifiCredentialsDisplay.module.css';

interface WifiCredentialsDisplayProps {
    wifiConfig: WifiConfig;
}

function WifiCredentialsDisplay({wifiConfig}: WifiCredentialsDisplayProps) {
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

export default WifiCredentialsDisplay;
