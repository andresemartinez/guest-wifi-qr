import { WifiConfigError } from '../../services/wifi-config';
import { useTranslation } from 'react-i18next';

type WifiConfigErrorProps = {
  errors: WifiConfigError[];
};

function WifiConfigErrors({ errors }: WifiConfigErrorProps) {
  const { t } = useTranslation();
  return (
    <>
      {errors.map((error) => (
        <span key={error.i18nKey}>{t(error.i18nKey)}</span>
      ))}
    </>
  );
}

export default WifiConfigErrors;
