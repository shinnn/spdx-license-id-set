'use strong';

const requireBowerFiles = require('require-bower-files');
const spdxLicenseIds = require('spdx-license-ids');
const test = require('tape');

function runTest(description, main) {
  test(description, t => {
    t.plan(2);

    t.strictEqual(main instanceof Set, true, 'should expose a Set object.');
    t.strictEqual(main.size, spdxLicenseIds.length, 'should expose a list of SPDX license IDs.');
  });
}

runTest('require(\'spdx-license-ids\')', require('.'));

global.window = {};
requireBowerFiles({self: true});

runTest('window.spdxLicenseIds', global.window.spdxLicenseIdSet);
