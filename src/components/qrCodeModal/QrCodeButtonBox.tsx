import {
  QRDownloadAllCustomFeatureFor,
  QRDownloadAllCustomFeaturePromiseAll,
  QRDownloadAllDomToImageFor,
  QRDownloadAllDomToImagePromiseAll,
  QRDownloadAllHtml2CanvasFor,
  QRDownloadAllHtml2CanvasPromiseAll,
} from '@/server/api/supabase/qrCodeDownLoad';
import useQRCodeStore from '@/shared/store/qrCode';
import Button from '../common/Button';
import styles from './styles/QrCodeModal.module.css';

const QrCodeButtonBox = () => {
  const { qrData } = useQRCodeStore();

  return (
    <div className={styles.qrCodeButtonBox}>
      <Button
        type="button"
        className={styles.qrButton}
        onClick={() => {
          QRDownloadAllHtml2CanvasPromiseAll(qrData);
        }}
      >
        <span>html2canvas + promiseAll</span>
      </Button>
      <Button
        type="button"
        className={styles.qrButton}
        onClick={() => {
          QRDownloadAllHtml2CanvasFor(qrData);
        }}
      >
        <span>html2canvas + for</span>
      </Button>
      <Button
        type="button"
        className={styles.qrButton}
        onClick={() => {
          QRDownloadAllDomToImagePromiseAll(qrData);
        }}
      >
        <span>domtoimage + promiseAll</span>
      </Button>
      <Button
        type="button"
        className={styles.qrButton}
        onClick={() => {
          QRDownloadAllDomToImageFor(qrData);
        }}
      >
        <span>domtoimage + for</span>
      </Button>
      <Button
        type="button"
        className={styles.qrButton}
        onClick={() => {
          QRDownloadAllCustomFeaturePromiseAll(qrData);
        }}
      >
        <span>customFeature + promiseAll</span>
      </Button>
      <Button
        type="button"
        className={styles.qrButton}
        onClick={() => {
          QRDownloadAllCustomFeatureFor(qrData);
        }}
      >
        <span>customFeature + for</span>
      </Button>
    </div>
  );
};
export default QrCodeButtonBox;
