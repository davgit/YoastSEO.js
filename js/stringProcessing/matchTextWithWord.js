/** @module stringProcessing/matchTextWithWord */

var stripSomeTags = require( "../stringProcessing/stripNonTextTags.js" );
var unifyWhitespace = require( "../stringProcessing/unifyWhitespace.js" ).unifyAllSpaces;
var matchStringWithTransliteration = require( "../stringProcessing/matchTextWithTransliteration.js" );

var escapeRegExp = require( "lodash/escapeRegExp" );

/**
 * Returns the number of matches in a given string
 *
 * @param {string} text The text to use for matching the wordToMatch.
 * @param {string} wordToMatch The word to match in the text
 * @param {string} locale The locale used for transliteration.
 * @param {string} [extraBoundary] An extra string that can be added to the wordboundary regex
 * @returns {number} The amount of matches found.
 */
module.exports = function( text, wordToMatch, locale, extraBoundary ) {
	text = stripSomeTags( text );
	text = unifyWhitespace( text );
	text = text.toLocaleLowerCase();
	wordToMatch = escapeRegExp( wordToMatch.toLocaleLowerCase() );
	var matches = matchStringWithTransliteration( text, wordToMatch, locale, extraBoundary );
	return matches.length;
};
