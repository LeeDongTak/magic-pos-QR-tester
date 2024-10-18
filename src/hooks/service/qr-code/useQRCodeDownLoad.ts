import { QRDownload, QRDownloadAllCustomFeatureFor } from '@/server/api/supabase/qrCodeDownLoad';
import { useMutation } from '@tanstack/react-query';

const useQRCodeDownLoad = () => {
  const { mutate: AllMutate, isPending: AllIsPending } = useMutation({
    mutationFn: QRDownloadAllCustomFeatureFor,
  });

  const { mutate: oneMutate, isPending: oneIsPending } = useMutation({
    mutationFn: QRDownload,
  });

  return { AllMutate, AllIsPending, oneMutate, oneIsPending };
};

export default useQRCodeDownLoad;
