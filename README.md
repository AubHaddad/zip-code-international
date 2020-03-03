# zip-code-international
An npm module for finding cities by zip code and zip codes by city

## Countries supported
 - France

## Usage : 
```Javascript
import { getAllCities, getAllZipCodes, findCodesByCity, find } from "zip-code-international";
```
##### find
```Javascript
find('FR','10100');
//output  
[
  'LA FOSSE CORDUAN',
  'GELANNES',
  'PARS LES ROMILLY',
  'ST LOUP DE BUFFIGNY',
  'OSSEY LES TROIS MAISONS',
  'ST HILAIRE SOUS ROMILLY',
  'ST MARTIN DE BOSSENAY',
  'CRANCEY',
  'ROMILLY SUR SEINE'
]

```

##### findCodesByCity
```Javascript
find('FR','PARIS');
//output  
[
  '75014', '75004', '75006',
  '75007', '75011', '75017',
  '75001', '75005', '75009',
  '75010', '75016', '75116',
  '75020', '75008', '75018',
  '75002', '75003', '75012',
  '75013', '75015', '75019'
]

```

