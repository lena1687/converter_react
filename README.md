## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `technical task`
* The task is to implement a currency converter
* e.g. https://www.google.com/search?q=eur%20usd
* API for exchange rates can be found by the link
* https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json
* 'eur.json' can be replaced with any ISO code we need
* - we need to focus on 4 fields that show exchange rates
* - there is no exchange button
* - first input field should be autofocusable
* - the conversion works automatically on input
* - the default pair is EUR to USD (EURUSD)
* - we need to show all the provided ISO codes from API on the exchange list
* - there is no need to show currency name only ISO code
* - in case currency is changed, all the exchange rates are updated automatically
* - if target currency is chosen as the main currency, we switch the pair e.g. EURUSD -> USDEUR