import { test } from 'qunit';
import moduleForAcceptance from 'blue-rice-site/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | strip');

test('visiting /strip', function(assert) {
  visit('/strip');

  andThen(function() {
    assert.equal(currentURL(), '/strip');
  });
});
