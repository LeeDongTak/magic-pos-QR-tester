import useFetchTableInQRCode from '@/hooks/query/qr-code/useFetchTableInQRCode';
import useCustomModalHide from '@/hooks/service/common/useCustomModalHide';
import clsx from 'clsx';
import { useState } from 'react';
import QrCodeButtonBox from './QrCodeButtonBox';
import QrCodeTabButton from './QrCodeTabButton';
import PackagingQrCodeContainer from './packagingQrCodeContainer/PackagingQrCodeContainer';
import ShopQrCodeContainer from './shopQrCodeContainer/ShopQrCodeContainer';
import styles from './styles/QrCodeModal.module.css';
import CloseButton from '/public/icons/x.svg';

type QrCodeModalProps = 'shop' | 'packaging' | null;

const QrCodeModal = ({ modalId }: { modalId?: string }) => {
  // const { session } = useAuthState();
  const userId = '9d814d3f-5b30-4419-a086-5991d135ecad';
  const { data } = useFetchTableInQRCode(userId!);
  const { clickModalCloseHandler } = useCustomModalHide();
  const [selectedComponent, setSelectedComponent] = useState<QrCodeModalProps>('shop');
  const clickComponentHandler = (component: 'shop' | 'packaging') => {
    if (component === selectedComponent) return;
    setSelectedComponent(prevComponent => (prevComponent === component ? null : component));
  };

  return (
    <div className={styles.qrCodeModalBox}>
      {/* QR코드 타이틀 */}
      <div className={styles.qrTitleContainer}>
        <div className={styles.qrCodeTitle}>QR코드 출력하기</div>
        <span
          onClick={() => {
            clickModalCloseHandler(modalId);
          }}
        >
          <CloseButton className={styles.closeButton} width={20} height={20} />
        </span>
      </div>

      {/* QR코드 텝매뉴 */}
      {true && <QrCodeTabButton selectedComponent={selectedComponent} clickComponentHandler={clickComponentHandler} />}

      {/* QR코드 컨테이너 */}
      <div className={styles.qrCodeShowBox}>
        {data?.[0]?.use_table && (
          <div className={clsx(styles.qrCodeContainer, selectedComponent === 'shop' && styles.show)}>
            <ShopQrCodeContainer data={data} />
          </div>
        )}
        <div className={clsx(styles.qrCodeContainer, selectedComponent === 'packaging' && styles.show)}>
          <PackagingQrCodeContainer />
        </div>
      </div>

      {/* QR코드 버튼박스 */}
      <QrCodeButtonBox />
    </div>
  );
};

export default QrCodeModal;
