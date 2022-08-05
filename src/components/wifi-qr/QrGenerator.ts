import { generateWifiQRCode } from 'wifi-qr-code-generator';
import { WifiConfig } from '../../services/wifi-config';

export function generateSvgQr(wifiConfig: WifiConfig) {
  return generateWifiQRCode({
    ssid: wifiConfig.ssid,
    password: wifiConfig.password,
    encryption: wifiConfig.encryption,
    hiddenSSID: wifiConfig.hidden,
    outputFormat: { type: 'svg' }
  });
}

