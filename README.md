# @whalecoiner/months

A barebones utility to convert between month names, numbers, and abbreviations.

Designed for use on node, but will probably work in the browser once compiled with [Babel](https://babeljs.io/).

![](months.gif)

## Installation

```bash
npm install @whalecoiner/months
```

## Usage

Supplying a single name, abbreviation, or a number will return an object containing all three properties.

```javascript
const months = require('@whalecoiner/months')

months('dec')
// { name: 'december', abbr: 'dec', number: 12 }

months('january')
// { name: 'january', abbr: 'jan', number: 1 }

months(2)
// { name: 'february', abbr: 'feb', number: 2 }

months(123456789)
// false

months('code-for-the-greater-good')
// false
```

### International

The default language for input and output is English. To specify another language supply an object parameter with a language property and an international country shortcode as a value.

```javascript
months(2, { language: 'de' })
// { name: 'märz', abbr: 'mär', number: 3 }

months('oktober', { language: 'de' })
// { name: 'oktober', abbr: 'okt', number: 10 }

months('oktober')
// false
```

This package does not attempt to remove diacritics from non-Latin languages. 
