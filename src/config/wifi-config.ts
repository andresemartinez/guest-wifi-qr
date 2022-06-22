export type WifiConfig = {
    ssid: string,
    password: string,
    encryption: 'WPA' | 'WEP'
    hidden: boolean,
};

export async function findWifiConfig() {
    const wifiConfigResponse = await fetch('/config/wifi-config.json');
    const wifiConfig = await wifiConfigResponse.json();

    const errors = [];
    if (typeof wifiConfig.ssid !== 'string' || wifiConfig.ssid.length === 0) {
        errors.push({message: '"ssid" config is required'});
    }

    if (typeof wifiConfig.password !== 'string' || wifiConfig.password.length === 0) {
        errors.push({message: '"password" config is required'});
    }

    if (typeof wifiConfig.encryption !== 'string' || wifiConfig.encryption.length === 0) {
        errors.push({message: '"encryption" config is required'});
    }

    if (typeof wifiConfig.hidden !== 'boolean') {
        errors.push({message: '"hidden" config is required'});
    }

    return {
        data: wifiConfig as WifiConfig,
        errors: errors
    };

}
