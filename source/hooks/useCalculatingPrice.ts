import {useMemo} from 'react';
// common
import {IData} from '~/type/types';

export const useCalculatingPrice = (data: IData[]) => {
  const handleCalculatePrice = useMemo(() => {
    return data.reduce((acc, curr) => {
      return acc + curr.price * curr.volume;
    }, 0);
  }, [data]);

  const handleCalculatePDW = useMemo(() => {
    return (handleCalculatePrice * 20) / 100;
  }, [handleCalculatePrice]);

  return [handleCalculatePrice, handleCalculatePDW];
};
