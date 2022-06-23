import {WifiConfigError} from '../../services/wifi-config';
import {useTranslation} from 'react-i18next';

interface WifiConfigErrorProps {
    errors: WifiConfigError[];
}

function WifiConfigErrors({errors}: WifiConfigErrorProps) {
    const {t} = useTranslation();
    return (<>{errors.map(error => <span>{t(error.i18nKey)}</span>)}</>);
}

export default WifiConfigErrors;
