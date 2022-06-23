export type WifiConfig = {
    ssid: string,
    password: string,
    encryption: 'WPA' | 'WEP'
    hidden: boolean,
};

export type WifiConfigError = {
    i18nKey: string,
};

export async function findWifiConfig() {
    const wifiConfigResponse = await fetch('/config/wifi-config.json');
    const wifiConfig = await wifiConfigResponse.json();

    const errors = [];
    if (typeof wifiConfig.ssid !== 'string' || wifiConfig.ssid.length === 0) {
        errors.push({i18nKey: 'wifi-config.error.ssid.required'});
    }

    if (typeof wifiConfig.password !== 'string' || wifiConfig.password.length === 0) {
        errors.push({i18nKey: 'wifi-config.error.password.required'});
    }

    if (typeof wifiConfig.encryption !== 'string' || wifiConfig.encryption.length === 0) {
        errors.push({i18nKey: 'wifi-config.error.encryption.required'});
    }

    if (typeof wifiConfig.hidden !== 'boolean') {
        errors.push({i18nKey: 'wifi-config.error.hidden.required'});
    }

    return {
        data: wifiConfig as WifiConfig,
        errors: errors
    };

}
