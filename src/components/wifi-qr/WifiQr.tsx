import {generateSvgQr} from './QrGenerator';
import {usePromise} from 'promise-hooks-react';
import styles from './WifiQr.module.css';
import {WifiConfig} from '../../config/wifi-config';

interface WifiQrProps {
    wifiConfig: WifiConfig;
}

function WifiQr({wifiConfig}: WifiQrProps) {
    const [qr] = usePromise(generateSvgQr(wifiConfig), []);

    return (
        qr
            ? <div
                className={styles.wifiQr}
                dangerouslySetInnerHTML={{__html: qr}}>
            </div>
            : null
    );

}

export default WifiQr;
