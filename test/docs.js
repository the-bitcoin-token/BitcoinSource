'use strict';

import bch from '..'

var chai = require('chai');
var should = chai.should();

var fs = require('fs');

describe('Documentation', function() {

  it('major and minor versions should match', function() {
    var versionRE = /v[0-9]+\.[0-9]+/;
    var docIndex = fs.readFileSync('./docs/index.md', 'ascii');
    var docVersion = docIndex.match(versionRE)[0];
    bch.version.indexOf(docVersion).should.equal(0);
  });
});
