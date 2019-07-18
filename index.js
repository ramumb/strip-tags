'use strict';

/**
 * This is a port of the PrototypeJS method stripTags.
 * It strips a string of any HTML tags.
 * @param {string}  A string from which to strip HTML tags
 * @return {string} The result of the function
 */

function stripTags(str) {
    return String(str).replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?(\/)?>|<\/\w+>/gi, '');
}

module.exports = stripTags;
