import useFetchManagement from '@/hooks/query/management/useFetchManagement';
import useToast from '@/hooks/service/ui/useToast';
import { submitDetectedOrder } from '@/server/api/supabase/management';
import { useEffect, useRef } from 'react';
import ManagementContainer from './managementContainer/ManagementContainer';
import ManagementSideBar from './managementSideBar/ManagementSideBar';
import styles from './styles/Management.module.css';
// import soundEffect from '/public/sound/soundEffect.mp3';

const Management = () => {
  // const { session, storeId } = useAuthState();
  const storeId = '01e86751-d99d-4109-928c-c1da4cacb06f';
  const userId = '9d814d3f-5b30-4419-a086-5991d135ecad';
  const { data, refetch } = useFetchManagement(userId);
  const { toast } = useToast();
  const soundButtonRef = useRef<HTMLDivElement>(null);
  // const audio = new Audio(soundEffect);
  typeof window !== 'undefined' && Notification.requestPermission();

  useEffect(() => {
    const synth = window.speechSynthesis;
    submitDetectedOrder(storeId!, refetch, toast, soundButtonRef, synth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles['managementWrapper']}>
      <ManagementContainer managementData={data} />
      <ManagementSideBar managementData={data} />
      {/* 효과음 Mp3파일을 재생하기위한 버튼 */}
      <div
        className={styles['MP3-button']}
        ref={soundButtonRef}
        // onClick={() => {
        //   audio.play();
        // }}
      ></div>
    </div>
  );
};

export default Management;
