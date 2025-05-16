import { ArticleType, type PersonalisedContent } from '$lib/types';

const contentInsertionThreshold = 100;

export type AnnotatedParagraph = {
	content: string;
	wordCount: number;
	personalisedContent?: string;
};

// this beautiful regex is all copilot and I will take no responsibility for it.
// it matches <p> tags and captures the content inside them,
// Then we add a word count to each paragraph so we can sensibly place personal content
export const countWordsInParagraphs = (article: ArticleType): AnnotatedParagraph[] => {
	return Array.from(
		article.bodyText.trim().matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g),
		(match) => match[1]
	).map((paragraph) => {
		let wordCount = paragraph.match(/ /g)?.length || 0;
		if (wordCount > 0) {
			wordCount++; //add an extra word, since there's no space at the end of the text
		}
		return { content: paragraph, wordCount };
	});
};

// Count words and insert personalised content after paragraph if count exceeds 100, then reset count.
export const insertPersonalisedContent = (
	paragraphs: AnnotatedParagraph[],
	personalised: PersonalisedContent[]
) => {
	let aggregatedWordCount = 0;
	let personalisedContentIndex = 0;

	const copy = [...paragraphs];

	copy.forEach((paragraph) => {
		aggregatedWordCount += paragraph.wordCount;
		const shouldDisplayPersonalisedContent = aggregatedWordCount >= contentInsertionThreshold;
		if (shouldDisplayPersonalisedContent && personalised.length > personalisedContentIndex) {
			paragraph.personalisedContent = personalised[personalisedContentIndex++].title;

			aggregatedWordCount = 0;
		}
	});
	return copy;
};
