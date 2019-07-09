'use strict';

var expect = require('chai').expect;
var stripTags = require('../index');

describe('#stripTags', function() {
    it('should return "a link"', function() {
        var result = stripTags('a <a href="#">link</a>');
        expect(result).to.equal('a link');
    });

    it('should return "a linkalert("hello world!");"', function() {
        var result = stripTags('a <a href="#">link</a><script>alert("hello world!");</script>');
        expect(result).to.equal('a linkalert("hello world!");');
    });

    it('should return "<xsl:template match="/">My CD Collection<xsl:apply-templates/></xsl:template>"', function() {
        var result = stripTags('<xsl:template match="/"><html><body><h2>My CD Collection</h2><xsl:apply-templates/></body></html></xsl:template>');
        expect(result).to.equal('<xsl:template match="/">My CD Collection<xsl:apply-templates/></xsl:template>');
    });
});
