strip-tags(function)
========================================

[![Build Status](https://travis-ci.org/ramumb/strip-tags.svg?branch=master)](https://travis-ci.org/ramumb/strip-tags)
[![Coverage Status](https://coveralls.io/repos/github/ramumb/strip-tags/badge.svg?branch=master)](https://coveralls.io/github/ramumb/strip-tags?branch=master)

This is a port of the [PrototypeJS](http://prototypejs.org/) method `stripTags`.
It strips a string of any HTML 4.01 tags &mdash; like `div`, `span`, and `abbr`.
It _will not_, however, strip namespace-prefixed tags such as `h:table` or
`xsl:template`.  _Nor_ will it remove any content from within `<script>` tags.
Lastly, while `stripTags` is good enough for most purposes, it shouldn't be
relied upon for security purposes. If processing end-user supplied content,
`stripTags` is _not_ sufficiently robust enough to ensure that the content is
completely devoid of HTML tags in the case of an end-user who's intentionally
trying to circumvent a tag restriction.

## Installation

  `npm install @ramumb/strip-tags`

## Usage

    var stripTags = require('strip-tags');

    stripTags('a <a href="#">link</a>');
    // -> 'a link'
    
    stripTags('a <a href="#">link</a><script>alert("hello world!");</script>');
    // -> 'a linkalert("hello world!");'
    
    stripTags('<xsl:template match="/"><html><body><h2>My CD Collection</h2><xsl:apply-templates/></body></html></xsl:template>');
    // -> '<xsl:template match="/">My CD Collection<xsl:apply-templates/></xsl:template>'

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding
style. Add unit tests for any new or changed functionality. Lint and test your
code.  See the [CONTRIBUTING](CONTRIBUTING.md) file for more detailed information.
