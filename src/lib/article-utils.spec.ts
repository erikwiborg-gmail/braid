import { describe, it, expect } from 'vitest';
import { countWordsInParagraphs, insertPersonalisedContent } from '$lib/article-utils';
import { ArticleType } from '$lib/types';

describe('paragraph splitting', () => {
	const article: ArticleType = {
		title: 'test article',
		bodyText: '<p>One two three</p>',
		leadText: 'some lead',
		topImage: ''
	};

	const articleWithLongParagraph: ArticleType = {
		title: 'test article',
		leadText: 'More than 100 words',
		bodyText: `
<p>Lag et endepunkt som simulerer en ekstern tjeneste som leverer en JSON med
artikkeldata. Input til endepunktet skal være en artikkelid. Responsen skal være
JSON med felter for tittel, ingress, brødtekst og toppbilde. I brødteksten skal det
ligge to bilder. Feltene skal ha placeholder-innhold, men som er konstant for
artikkelid’en. Det betyr at du får forskjellig innhold om du bytter artikkelid, men om du
ber om samme artikkelid to ganger får du likt innhold. Du kan gjerne bruke en
ekstern tjeneste som https://picsum.photos/ for å lage bilder. Tekstinnhold skal være
"lorem ipsum". Endepunktet skal randomisert forsinkes med mellom 500ms og 5s for
å simulere treghet i nettverket og tunge databasekall.</p>
`,
		topImage: ''
	};

	it('counts the words', () => {
		const [result] = countWordsInParagraphs(article);
		expect(result.wordCount).toEqual(3);
	});

	it('inserts personalised content', () => {
		const personaliseDContent = [
			{
				title: 'personalised title'
			}
		];
		const result = countWordsInParagraphs(articleWithLongParagraph);
		const [resultWithInsertedContent] = insertPersonalisedContent(result, personaliseDContent);
		expect(resultWithInsertedContent.personalisedContent).toEqual('personalised title');
	});
});
