import { MANAGEMENT_PATH } from '@/data/url-list';
import useToast from '@/hooks/service/ui/useToast';
import useAuthState from '@/shared/store/session';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const StartButton = () => {
  // const { MagicModal } = useModal();
  // const clickStartHandler = () => {
  //   MagicModal.fire(<QrCodeModal />);
  // };
  const router = useRouter();
  const session = useAuthState(state => state.session);
  const { toast } = useToast();

  const clickStartHandler = () => {
    router.push(MANAGEMENT_PATH);
    // if (session) {
    // } else {
    //   toast('로그인 후 이용해 주세요.', {
    //     type: 'warn',
    //     position: 'top-center',
    //     showCloseButton: false,
    //     autoClose: 2000,
    //   });
    //   router.push(LOGIN_PATH);
    // }
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
