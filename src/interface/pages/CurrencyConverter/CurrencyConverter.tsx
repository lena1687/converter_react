import React, {useCallback, useMemo, useState} from 'react';
import { Select } from '../../components/Select';
import { useCurrencyData } from '../../../hooks/useCurrencyData';
import {CurrencyData} from "../../../types";
import './CurrencyConverter.css';

export const CurrencyConverter: React.FC = () => {
  const defaultFirstCurrency = 'eur';
  const defaultSecondCurrency = 'usd';

  const [firstAmount, setFirstAmount] = useState<number>(1);
  const [firstCurrency, setFirstCurrency] = useState<string>(defaultFirstCurrency);
  const [secondCurrency, setSecondCurrency] = useState<string>(defaultSecondCurrency);

  const { isLoading, data } = useCurrencyData(firstCurrency);

  const memorizedOptions = useMemo(() => data ? getCurrencyOptions(data) : [], [data]);

  const onChangeSecondAmount = useCallback((value: number) => {
    const result = value / data![secondCurrency];
    setFirstAmount(result);
  }, [data, secondCurrency]);

  if (isLoading || !data) {
    return (
      <div>
        <span>Data is loading</span>
      </div>
    );
  }

  return (
    <div>
      <div className="currency-converter">
        <h1>Currency Converter</h1>
        {data && (
          <div>
            <div className="currency-block">
              <input
                  type="number"
                  min={0}
                  value={formatInputValue(firstAmount)}
                  autoFocus
                  onChange={(e) => setFirstAmount(Number(e.target.value))}
              />
              <Select
                  name="first_currency"
                  options={memorizedOptions}
                  defaultSelectValue={firstCurrency}
                  onOptionSelect={(value) => setFirstCurrency(value as string)}
              />
            </div>
            <div className="currency-block">
              <input
                  type="number"
                  min={0}
                  value={formatInputValue(firstAmount * data[secondCurrency])}
                  onChange={(e) => onChangeSecondAmount(Number(e.target.value))}
              />
              <Select
                  name="second_currency"
                  options={memorizedOptions}
                  defaultSelectValue={secondCurrency}
                  onOptionSelect={(value) => setSecondCurrency(value as string)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function formatInputValue(value: number) {
    return Number(value).toFixed(2);
}

function getCurrencyOptions(
  data: CurrencyData
) {
  return Object.keys(data).map((key) => {
    return {
      text: key.toUpperCase(),
      value: key,
    };
  });
}
