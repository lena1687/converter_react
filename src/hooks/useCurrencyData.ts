import { useEffect, useState } from 'react';
import { CurrencyData } from '../types';

export function useCurrencyData(currency: string) {
  const [data, setData] = useState<CurrencyData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data[currency]);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currency]);

  return { isLoading, data };
}
