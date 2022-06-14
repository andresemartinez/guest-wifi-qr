import {generateSvgQr, WifiConfig} from './QrGenerator';
import {usePromise} from 'promise-hooks-react';
import styles from './WifiQr.module.css';

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
