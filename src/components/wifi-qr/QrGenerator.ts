import {generateWifiQRCode} from 'wifi-qr-code-generator';

export type WifiConfig = {
    ssid: string,
    password: string,
    encryption: 'WPA' | 'WEP'
    hidden: boolean,
};

export function generateSvgQr(wifiConfig: WifiConfig) {
    return generateWifiQRCode({
        ssid: wifiConfig.ssid,
        password: wifiConfig.password,
        encryption: wifiConfig.encryption,
        hiddenSSID: wifiConfig.hidden,
        outputFormat: {type: 'svg'}
    });
}

