# ral-to-hex

Convert RAL colour codes to HEX codes. Data taken from [this gist](https://gist.github.com/lunohodov/1995178).

## Installation

```bash
npm install --save ralex
```

## Usage

```ts
import { ralToHex } from 'ralex'

const colour1 = ralToHex(5025) // '#2A6478' (RAL 5025)
const colour2 = ralToHex(2013) // '#C35831' (RAL 2013)
```
