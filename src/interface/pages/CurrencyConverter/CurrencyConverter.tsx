import React, { useState } from 'react';
import { Select } from '../../components/Select';
import { useCurrencyData } from '../../../hooks/useCurrencyData';
import { CurrencyOption } from '../../../types';

export const CurrencyConverter: React.FC = () => {
  const defaultFirstCurrencyValue = 1;
  const defaultFirstCurrency = 'eur';
  const defaultSecondCurrency = 'usd';

  const { isLoading, data } = useCurrencyData(defaultFirstCurrency);
  const [numberFirstCurrency, setNumberFirstCurrency] = useState<number>(1);
  const [valueFirstCurrency, setValueFirstCurrency] = useState<number>();
  const [numberSecondCurrency, setNumberSecondCurrency] = useState<number>(1);
  const [valueSecondCurrency, setValueSecondCurrency] = useState<number>();
  const [defaultSecondCurrencyValue, setDefaultSecondCurrencyValue] =
    useState<number>(1);

  console.log('1', valueFirstCurrency, numberFirstCurrency);
  console.log('2', numberSecondCurrency, valueSecondCurrency);

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
            <Select
              name="first_currency"
              label="From"
              options={getCurrencyOptions(data, defaultFirstCurrency)}
              defaultSelectValue={defaultFirstCurrency}
              defaultInputValue={defaultFirstCurrencyValue}
              onOptionSelect={(value) => setValueFirstCurrency(value as number)}
              onInputChange={(value) => setNumberFirstCurrency(value as number)}
            />
            <Select
              name="second_currency"
              label="To"
              options={getCurrencyOptions(data, defaultFirstCurrency)}
              defaultSelectValue={defaultSecondCurrency}
              defaultInputValue={defaultSecondCurrencyValue}
              onOptionSelect={(value) =>
                setValueSecondCurrency(value as number)
              }
              onInputChange={(value) =>
                setNumberSecondCurrency(value as number)
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

function getCurrencyOptions(
  data: CurrencyOption,
  defaultFirstCurrency: string,
) {
  const currencyData = data[defaultFirstCurrency];
  return Object.keys(currencyData).map((key) => {
    return {
      text: key,
      value: key,
    };
  });
}
