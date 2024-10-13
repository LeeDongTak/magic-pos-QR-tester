import styles from '../styles/Home.module.css';
import QrCodeModal from '@/components/qrCodeModal/QrCodeModal';
import { useModal } from '@/hooks/service/ui/useModal';

const StartButton = () => {
  const { MagicModal } = useModal();
  const clickStartHandler = () => {
    MagicModal.fire(<QrCodeModal />);
  };

  return (
    <div className={styles.startWrapper}>
      <button className={styles.startButton} onClick={clickStartHandler}>
        <p>시작하기</p>
      </button>
    </div>
  );
};

export default StartButton;
