import { create } from 'zustand';

export type QRdataType = {
  qrRef: {
    id: string;
    content: HTMLDivElement;
  };
  orderType: string;
};
interface QRCodeType {
  qrData: QRdataType[];
  setQrData: (value: QRdataType) => void;
  resetQrData: () => void;
}

const useQRCodeStore = create<QRCodeType>(set => ({
  qrData: [],
  setQrData: value =>
    set(state => {
      if (!state.qrData.some(qr => qr.qrRef.id === value.qrRef.id)) {
        return { qrData: [...state.qrData, value] };
      }
      return state;
    }),
  resetQrData: () =>
    set(() => ({
      qrData: [],
    })),
}));

export default useQRCodeStore;
