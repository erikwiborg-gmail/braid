# Braid
Dette ble et svelte-prosjekt med det meste satt til standard. 

API er implemntert som sveltekit server-routes, disse ligger under `routes/api/`. 
Disse rutene kompliseres til en node-server som kjører polka. tilgjengelig under `/api/`. 

Databasen min er en js-fil som inneholder artikkelinnhold. Jeg har ikke prioritert å sette opp en faktisk database, vi får se om jeg får tid til det før fredag.

Prosjektet kan kjøres i dev-mode eller bygges som docker image og kjøres som container.

Per nå så er alt SSR (jeg tolket punkt 4 som at dette var ønskelig). Jeg starte med en variant som kalte API fra klient, men det 
føltes mer oversiktlig å bare ha den ene løsningen. Det er uansett trivielt å skru på CSR hvis det er ønskelig.


## Dev mode: 
```bash
npm install
npm run dev
```
`localhost:5173/article/1`
`localhost:5173/article/2`

## Inklider personalisert innhold
`localhost:5173/article/1/someusername`
`localhost:5173/article/2/someotherusername`

## Docker
```bash
docker build . -t braid-demo
docker run -d -p 3000:3000 braid-demo
```
`localhost:3000/article/1`

