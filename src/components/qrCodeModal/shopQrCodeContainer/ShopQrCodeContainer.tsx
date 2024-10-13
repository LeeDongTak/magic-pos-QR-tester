import clsx from 'clsx';
import QrCodeListItem from '../qrCodelistItem/QrCodeListItem';
import styles from './styles/ShopQrCodeContainer.module.css';

export interface ContainerPropsType {
  use_table: boolean;
  store_table: number[];
}

const ShopQrCodeContainer = ({ data }: { data: ContainerPropsType }) => {
  const storeTable = data.store_table;
  const totalTable = storeTable.length;
  return (
    <div className={styles['shop-qr-code-container']}>
      <div
        className={clsx(
          styles['shop-qr-code-list-box'],
          styles['qr-code-svg-box'],
          totalTable === 1 && styles['grid-row-1'],
          totalTable === 2 && styles['grid-row-2'],
          totalTable === 3 && styles['grid-row-3'],
        )}
      >
        {storeTable.map(item => {
          return <QrCodeListItem key={item} storeTable={item} orderType={`table${item}`} />;
        })}
      </div>
    </div>
  );
};

export default ShopQrCodeContainer;
