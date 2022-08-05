import styles from './WifiCredentials.module.css';
import { WifiConfig } from '../../services/wifi-config';
import { useTranslation } from 'react-i18next';

type WifiCredentialsProps = {
  wifiConfig: WifiConfig;
}

function WifiCredentials({ wifiConfig }: WifiCredentialsProps) {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.wifiCredentialsSection}>
        <span>{t('wifi-credentials.ssid')}: </span>
        <span>{wifiConfig.ssid}</span>
      </div>
      <div className={styles.wifiCredentialsSection}>
        <span>{t('wifi-credentials.password')}: </span>
        <span>{wifiConfig.password}</span>
      </div>
    </>
  );
}

export default WifiCredentials;
