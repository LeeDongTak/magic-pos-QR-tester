import useQRDownLoadHandler from '@/hooks/service/qr-code/useQRDownLoadHandler';
import useQRCodeStore from '@/shared/store/qrCode';
import clsx from 'clsx';
import { QRCodeSVG } from 'qrcode.react';
import { useEffect, useRef } from 'react';
import { IoPrintOutline } from 'react-icons/io5';
import styles from './styles/QrCodeListitem.module.css';

interface propsType {
  storeTable?: number;
  orderType: string;
}

const QrCodeListItem = ({ storeTable, orderType }: propsType) => {
  const { clickOneQrDownLoadHandler, isQrClick } = useQRDownLoadHandler();
  const QRImage = useRef<HTMLDivElement[]>([]);
  const { setQrData } = useQRCodeStore();
  // qr code url
  const qrUrl = storeTable
    ? `${process.env.NEXT_PUBLIC_SUPACE_REDIRECT_TO}/kiosk/epojn23908cbnw9e8fb23890fweoeifb23089fbwe?tableId=${storeTable}`
    : `${process.env.NEXT_PUBLIC_SUPACE_REDIRECT_TO}/kiosk/epojn23908cbnw9e8fb23890fweoeifb23089fbwe`;

  useEffect(() => {
    setQrData({
      qrRef: QRImage.current[0],
      orderType,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={styles['qr-code-svg-box']}
      ref={el => (QRImage.current[0] = el as HTMLDivElement)}
      onClick={() => {
        clickOneQrDownLoadHandler(QRImage.current[0], orderType);
      }}
    >
      <div className={clsx(styles['qr-code'], isQrClick && styles['active'], !storeTable && styles['order-type-togo'])}>
        {storeTable && <div className={styles['table-number']}>{storeTable}번 테이블</div>}
        <div
          className={clsx(
            styles['qr-print-icon'],
            !storeTable && styles['order-type-togo'],
            isQrClick && styles['active'],
          )}
        >
          <IoPrintOutline />
          <span>출력하기</span>
        </div>
        <QRCodeSVG value={qrUrl ?? ''} width={'12.5rem'} height={'12.5rem'} />
      </div>
    </div>
  );
};

export default QrCodeListItem;
