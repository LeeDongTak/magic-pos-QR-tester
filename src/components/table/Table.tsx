import useFetchTable from '@/hooks/query/table/useFetchTable';
import TableContainer from './TableContainer';
import styles from './styles/Table.module.css';

const Table = () => {
  const userId = '9d814d3f-5b30-4419-a086-5991d135ecad';
  const { data } = useFetchTable({ userId });

  return <div className={styles['table-wrapper']}>{data && <TableContainer storeData={data} />}</div>;
};

export default Table;
