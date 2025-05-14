import { ArticleType, type PersonalisedContent } from '$lib/types';

const contentInsertionThreshold = 100;

export type AnnotatedParagraph = {
	content: string;
	wordCount: number;
	personalisedContent?: string;
};

export const countWordsInParagraphs = (article: ArticleType): AnnotatedParagraph[] => {
	// this beautiful regex is all copilot and i will take no responsibility for it.
	// it matches <p> tags and captures the content inside them, adding a word count to each paragraph.
	return Array.from(
		article.bodyText.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g),
		(match) => match[1]
	).map((paragraph) => {
		const wordCount = paragraph.match(/ /g)?.length || 0;
		return { content: paragraph, wordCount };
	});
};

export const insertPersonalisedContent = (
	paragraphs: AnnotatedParagraph[],
	personalised: PersonalisedContent[]
) => {
	let aggregatedWordCount = 0;
	let personalisedContentIndex = 0;

	const copy = [...paragraphs];
	// count words in each paragraph and add personalised content if the word count is over 100
	copy.forEach((paragraph) => {
		aggregatedWordCount += paragraph.wordCount;
		const shouldDisplayPersonalisedContent = aggregatedWordCount >= contentInsertionThreshold;
		if (shouldDisplayPersonalisedContent) {
			paragraph.personalisedContent = personalised[personalisedContentIndex++].title;

			aggregatedWordCount = 0;
		}
	});
	return copy;
};
