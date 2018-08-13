'use strict';

const {
  JobParser
} = require('../../lib/ci/ci_type_parser');

const assert = require('assert');
const {
  commentsWithCI
} = require('../fixtures/data');

const expected = new Map([
  ['PR', {
    link: 'https://ci.nodejs.org/job/node-test-pull-request/10984/',
    date: '2017-10-27T04:16:36.458Z',
    jobid: 10984
  }],
  ['CITGM', {
    link: 'https://ci.nodejs.org/job/citgm-smoker/1030/',
    date: '2017-10-27T04:16:36.458Z',
    jobid: 1030
  }],
  ['LIBUV', {
    link: 'https://ci.nodejs.org/job/libuv-test-commit/537/',
    date: '2017-10-24T04:16:36.458Z',
    jobid: 537
  }],
  ['NOINTL', {
    link: 'https://ci.nodejs.org/job/node-test-commit-nointl/7/',
    date: '2017-10-23T04:16:36.458Z',
    jobid: 7
  }],
  ['V8', {
    link: 'https://ci.nodejs.org/job/node-test-commit-v8-linux/1018/',
    date: '2017-10-22T04:16:36.458Z',
    jobid: 1018
  }],
  ['BENCHMARK', {
    link: 'https://ci.nodejs.org/job/benchmark-node-micro-benchmarks/20/',
    date: '2017-10-21T04:16:36.458Z',
    jobid: 20
  }],
  ['LINTER', {
    link: 'https://ci.nodejs.org/job/node-test-linter/13127/',
    date: '2017-10-22T04:16:36.458Z',
    jobid: 13127
  }],
  ['LITE_COMMIT', {
    link: 'https://ci.nodejs.org/job/node-test-commit-lite/246/',
    date: '2018-02-09T21:38:30Z',
    jobid: 246
  }],
  ['LITE_PR_PIPELINE', {
    link: 'https://ci.nodejs.org/job/node-test-pull-request-lite-pipeline/7213/pipeline/',
    date: '2017-10-21T04:16:36.458Z',
    jobid: 7213
  }]
]);

describe('JobParser', () => {
  it('should parse CI results', () => {
    const results = new JobParser(commentsWithCI).parse();
    assert.deepStrictEqual([...results.entries()], [...expected.entries()]);
  });
});