# Braid
Dette ble et svelte-prosjekt med det meste satt til standard. 

API er implemntert som sveltekit server-routes, disse ligger under `routes/api/`. 
Disse rutene kompileres til en node-server som kjører polka. tilgjengelig under `/api/`. 

Databasen min er en js-fil som inneholder artikkelinnhold. Jeg har ikke prioritert å sette opp en faktisk database, vi får se om jeg får tid til det før fredag.

Prosjektet kan kjøres i dev-mode eller bygges som docker image og kjøres som container.

Oppsettet er nå slik at vanlige artikler hentes fra klient-siden, mens de parsonaliserte bruker SSR og leverer ren HTML. 


## Forbedringer
- [ ] Legge til en faktisk database
- [ ] Progressiv lasting av artikkelinnhold?
- [ ] Styling, bla flyte tekst runt embeddede bilder
- [ ] en eller annen form for skeleton-view mens ny artikkel laster. Går det an med SSR mon tro?
- 

## Dev mode: 
```bash
npm install
npm run dev
```
`localhost:5173/article/1`

`localhost:5173/article/2`

## Inkluder personalisert innhold
For å se personalisert innhold må du legge til et brukernavn i url-en.
`localhost:5173/article/1/someusername`

`localhost:5173/article/2/someotherusername`

## Docker
```bash
docker build . -t braid-demo 
docker run -d -p 3000:3000 braid-demo
```
`localhost:3000/article/1`

