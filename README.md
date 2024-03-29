# Pricebook App - BackEnd

## Wstęp - opis


Hej! Pricebook to prosty cennik dla firm zajmujących się produkcją elementów stalowych.<br> Aplikację stworzyłem na własne potrzeby zawodowe, do szybkiej identyfikacji cen produktów na podstawie numeru rysunku technicznego.
<br>Powinna się sprawdzić nie tylko w przypadku mojego pracodawcy, ale także w innych przedsiębiorstwach zajmujących się szeroko rozumianą obróbką stali.
Główne funcjonalności:
- wyświetlanie zawartości cennika,
- wyszukiwanie rekordów po numerze rysunku,
- dodawanie nowych produktów do cennika,
- usuwanie produktów,
- edytowanie produktów,
- globalna zmiana cen na podstawie wskazanej podwyżki/obniżki procentowej,
- wyświetlanie zawartości oferty handlowej,


## Demo

[![IMAGE ALT TEXT HERE](https://raw.githubusercontent.com/RadekJ87/PricebookFront/main/public/pricebook_readme.png)](https://youtu.be/HcNVHpKwjDA)


## Technologia

<div display="flex" flex-direction="row" align-items="center">
 <img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" width="35" data-canonical-src="https://www.lightgalleryjs.com/images/logos/javascript.svg" style="max-width: 100%;">
 <img src="https://camo.githubusercontent.com/c586f29f98242c3b31d1aab8109f8461c27bf870673111ea9f2f538446050961/68747470733a2f2f7777772e6c6967687467616c6c6572796a732e636f6d2f696d616765732f6c6f676f732f6a6176617363726970742e737667" width="35" data-canonical-src="https://www.lightgalleryjs.com/images/logos/javascript.svg" style="max-width: 100%;">
<img src="https://static.npmjs.com/255a118f56f5346b97e56325a1217a16.svg" width="35px" title="TypeScript icon" alt="TypeScript icon">
<img width="35px" src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" alt="MySQL" title="MySQL" style="max-width: 100%;">
</div>


## Dodatkowe paczki + wersja
### Dependencies
- cors 2.8.5,
- express 4.18.1,
- express-async-errors 3.1.1,
- express-rate-limit 6.4.0,
- mysql2 2.3.3,
- uuid 8.3.2.

### DevDependencies

- @types/cors 2.8.12,
- @types/express 4.17.13,
- @types/jest 28.1.4,
- @types/node 18.0.0,
- @types/uuid 8.3.4,
- jest 28.1.2,
- react-app-rewired 2.2.1,
- ts-jest 28.0.5,
- ts-node 10.8.1,
- ts-node-dev 2.0.0,
- typescript 4.7.4.

## Instalacja

```bash
$ npm install
```


## Uruchamianie


```bash
# development mode
$ npm run start

# watch mode
$ npm run start:dev
```
