'use strict';

QUnit.module( 'Trie', {

  setup: function () {
  },

  teardown: function () {
  }

} );

QUnit.test( 'Empty', function ( assert ) {

  var trie = new Trie();

  QUnit.deepEqual( trie.autocomplete( '' ), [], 'Getting all entries.' );
  QUnit.deepEqual( trie.autocomplete( 'a' ), [], 'Getting all entries with prefix "a".' );
  QUnit.deepEqual( trie.autocomplete( ' ' ), [], 'Getting all entries with prefix " ".' );
  QUnit.deepEqual( trie.autocomplete( undefined ), [], 'Getting all entries with undefined prefix.' );
  QUnit.deepEqual( trie.autocomplete( null ), [], 'Getting all entries with null prefix.' );

  QUnit.deepEqual( trie.autocomplete( '', 1 ), [], 'Getting 1 entry.' );
  QUnit.deepEqual( trie.autocomplete( 'a', 1 ), [], 'Getting 1 entry with prefix "a".' );
  QUnit.deepEqual( trie.autocomplete( ' ', 1 ), [], 'Getting 1 entry with prefix " ".' );
  QUnit.deepEqual( trie.autocomplete( undefined, 1 ), [], 'Getting 1 entry with undefined prefix.' );
  QUnit.deepEqual( trie.autocomplete( null, 1 ), [], 'Getting 1 entry with null prefix.' );

  QUnit.deepEqual( trie.autocomplete( '', 10 ), [], 'Getting 10 entries.' );
  QUnit.deepEqual( trie.autocomplete( 'a', 10 ), [], 'Getting 10 entries with prefix "a".' );
  QUnit.deepEqual( trie.autocomplete( ' ', 10 ), [], 'Getting 10 entries with prefix " ".' );
  QUnit.deepEqual( trie.autocomplete( undefined, 10 ), [], 'Getting 10 entries with undefined prefix.' );
  QUnit.deepEqual( trie.autocomplete( null, 10 ), [], 'Getting 10 entries with null prefix.' );

} );

QUnit.test( 'Duplicate Entries', function ( assert ) {

  var trie = Trie();

  trie.insert( 'apples' );

  assert.deepEqual( trie.autocomplete( '' ), [ 'apples' ], '' );
  assert.deepEqual( trie.autocomplete( 'a' ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'b' ), [] );
  assert.deepEqual( trie.autocomplete( 'o' ), [] );

  assert.deepEqual( trie.autocomplete( '', 1 ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'a', 1 ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'b', 1 ), [] );
  assert.deepEqual( trie.autocomplete( 'o', 1 ), [] );

  assert.deepEqual( trie.autocomplete( '', 10 ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'a', 10 ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'b', 10 ), [] );
  assert.deepEqual( trie.autocomplete( 'o', 10 ), [] );

  trie.insert( 'oranges' );

  assert.deepEqual( trie.autocomplete( '' ), [ 'apples', 'oranges' ], '' );
  assert.deepEqual( trie.autocomplete( 'a' ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'b' ), [] );
  assert.deepEqual( trie.autocomplete( 'o' ), [ 'oranges' ] );

  assert.deepEqual( trie.autocomplete( '', 1 ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'a', 1 ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'b', 1 ), [] );
  assert.deepEqual( trie.autocomplete( 'o', 1 ), [ 'oranges' ] );

  assert.deepEqual( trie.autocomplete( '', 10 ), [ 'apples', 'oranges' ] );
  assert.deepEqual( trie.autocomplete( 'a', 10 ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'b', 10 ), [] );
  assert.deepEqual( trie.autocomplete( 'o', 10 ), [ 'oranges' ] );

  trie.insert( 'oranges' );

  assert.deepEqual( trie.autocomplete( '' ), [ 'apples', 'oranges' ], '' );
  assert.deepEqual( trie.autocomplete( 'a' ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'b' ), [] );
  assert.deepEqual( trie.autocomplete( 'o' ), [ 'oranges' ] );

  assert.deepEqual( trie.autocomplete( '', 1 ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'a', 1 ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'b', 1 ), [] );
  assert.deepEqual( trie.autocomplete( 'o', 1 ), [ 'oranges' ] );

  assert.deepEqual( trie.autocomplete( '', 10 ), [ 'apples', 'oranges' ] );
  assert.deepEqual( trie.autocomplete( 'a', 10 ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'b', 10 ), [] );
  assert.deepEqual( trie.autocomplete( 'o', 10 ), [ 'oranges' ] );

  trie.insert( 'Apples' );

  assert.deepEqual( trie.autocomplete( '' ), [ 'Apples', 'oranges' ], '' );
  assert.deepEqual( trie.autocomplete( 'a' ), [ 'Apples' ] );
  assert.deepEqual( trie.autocomplete( 'b' ), [] );
  assert.deepEqual( trie.autocomplete( 'o' ), [ 'oranges' ] );

  assert.deepEqual( trie.autocomplete( '', 1 ), [ 'Apples' ] );
  assert.deepEqual( trie.autocomplete( 'a', 1 ), [ 'Apples' ] );
  assert.deepEqual( trie.autocomplete( 'b', 1 ), [] );
  assert.deepEqual( trie.autocomplete( 'o', 1 ), [ 'oranges' ] );

  assert.deepEqual( trie.autocomplete( '', 10 ), [ 'Apples', 'oranges' ] );
  assert.deepEqual( trie.autocomplete( 'a', 10 ), [ 'Apples' ] );
  assert.deepEqual( trie.autocomplete( 'b', 10 ), [] );
  assert.deepEqual( trie.autocomplete( 'o', 10 ), [ 'oranges' ] );

  trie.insert( 'apples' );

  assert.deepEqual( trie.autocomplete( '' ), [ 'apples', 'oranges' ], '' );
  assert.deepEqual( trie.autocomplete( 'a' ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'b' ), [] );
  assert.deepEqual( trie.autocomplete( 'o' ), [ 'oranges' ] );

  assert.deepEqual( trie.autocomplete( '', 1 ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'a', 1 ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'b', 1 ), [] );
  assert.deepEqual( trie.autocomplete( 'o', 1 ), [ 'oranges' ] );

  assert.deepEqual( trie.autocomplete( '', 10 ), [ 'apples', 'oranges' ] );
  assert.deepEqual( trie.autocomplete( 'a', 10 ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'b', 10 ), [] );
  assert.deepEqual( trie.autocomplete( 'o', 10 ), [ 'oranges' ] );

  trie.insert( 'avocado' );

  assert.deepEqual( trie.autocomplete( '' ), [ 'apples', 'avocado', 'oranges' ], '' );
  assert.deepEqual( trie.autocomplete( 'a' ), [ 'apples', 'avocado' ] );
  assert.deepEqual( trie.autocomplete( 'av' ), [ 'avocado' ] );
  assert.deepEqual( trie.autocomplete( 'avd' ), [] );
  assert.deepEqual( trie.autocomplete( 'b' ), [] );
  assert.deepEqual( trie.autocomplete( 'o' ), [ 'oranges' ] );

  assert.deepEqual( trie.autocomplete( '', 1 ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'a', 1 ), [ 'apples' ] );
  assert.deepEqual( trie.autocomplete( 'av' ), [ 'avocado' ] );
  assert.deepEqual( trie.autocomplete( 'avd' ), [] );
  assert.deepEqual( trie.autocomplete( 'b', 1 ), [] );
  assert.deepEqual( trie.autocomplete( 'o', 1 ), [ 'oranges' ] );

  assert.deepEqual( trie.autocomplete( '', 10 ), [ 'apples', 'avocado', 'oranges' ] );
  assert.deepEqual( trie.autocomplete( 'a', 10 ), [ 'apples', 'avocado' ] );
  assert.deepEqual( trie.autocomplete( 'av' ), [ 'avocado' ] );
  assert.deepEqual( trie.autocomplete( 'avd' ), [] );
  assert.deepEqual( trie.autocomplete( 'b', 10 ), [] );
  assert.deepEqual( trie.autocomplete( 'o', 10 ), [ 'oranges' ] );

} );

QUnit.test( 'Lexicographic Ordering', function ( assert ) {

  var trie = new Trie();

  var sorted = [
    'Acai Berries',
    'Clementine',
    'Damson',
    'Date',
    'Dragonfruit',
    'Elderberry',
    'Goji berry',
    'Honeydew',
    'Lychee',
    'Persimmon',
    'Pineapple',
    'Pomegranate',
    'Ugli fruit',
    'Watermelon'
  ];

  [
    'Ugli fruit',
    'Dragonfruit',
    'Pomegranate',
    'Lychee',
    'Date',
    'Persimmon',
    'Acai Berries',
    'Watermelon',
    'Honeydew',
    'Damson',
    'Elderberry',
    'Goji berry',
    'Pineapple',
    'Clementine'
  ].forEach( trie.insert );

  assert.deepEqual( trie.autocomplete( '' ), sorted, 'Getting all entries.' );
  assert.deepEqual( trie.autocomplete( '', 1 ), [ 'Acai Berries' ], 'Getting 1 entry.' );
  assert.deepEqual( trie.autocomplete( 'p', 1 ), [ 'Persimmon' ], 'Getting 1 entry with prefix "p".' );
  assert.deepEqual( trie.autocomplete( 'water', 1 ), [ 'Watermelon' ], 'Getting 1 entry with prefix "water".' );
  assert.deepEqual( trie.autocomplete( 'asdf', 1 ), [], 'Getting 1 entry with prefix "asdf".' );

} );

QUnit.test( 'Case Insensitivity', function ( assert ) {

  var trie = new Trie();

  var sorted = [
    'Acai Berries',
    'Clementine',
    'Damson',
    'Date',
    'Dragonfruit',
    'Elderberry',
    'Goji berry',
    'Honeydew',
    'Lychee',
    'Persimmon',
    'Pineapple',
    'Pomegranate',
    'Ugli fruit',
    'Watermelon'
  ];

  [
    'Ugli fruit',
    'Dragonfruit',
    'Pomegranate',
    'Lychee',
    'Date',
    'Persimmon',
    'Acai Berries',
    'Watermelon',
    'Honeydew',
    'Damson',
    'Elderberry',
    'Goji berry',
    'Pineapple',
    'Clementine'
  ].forEach( trie.insert );

  assert.deepEqual( trie.autocomplete( 'WATERMELON' ), [ 'Watermelon' ], 'Getting all entries with prefix' +
                                                                         ' "WATERMELON".' );
  assert.deepEqual( trie.autocomplete( 'DaMsOn' ), [ 'Damson' ], 'Getting all entries with prefix "DaMsOn".' );
  assert.deepEqual( trie.autocomplete( 'PinEAPPLE' ), [ 'Pineapple' ], 'Getting all entries with prefix "PinEAPPLE".' );

} );

QUnit.test( 'Result Size Limiting', function ( assert ) {

  var trie = Trie();

  [ 'so', 'some', 'something', 'somethings', 'someone', 'somewhere' ].forEach( trie.insert );

  assert.deepEqual(
    trie.autocomplete( 's' ),
    [ 'so', 'some', 'someone', 'something', 'somethings', 'somewhere' ],
    'Getting all entries with prefix "s".'
  );

  assert.deepEqual(
    trie.autocomplete( 's', 1 ),
    [ 'so' ],
    'Getting 1 entry with prefix "s".'
  );

  assert.deepEqual(
    trie.autocomplete( 's', 5 ),
    [ 'so', 'some', 'someone', 'something', 'somethings' ],
    'Getting 5 entries with prefix "s".'
  );

  assert.deepEqual(
    trie.autocomplete( 'so', 5 ),
    [ 'so', 'some', 'someone', 'something', 'somethings' ],
    'Getting 5 entries with prefix "so".'
  );

  assert.deepEqual(
    trie.autocomplete( 's', 10 ),
    [ 'so', 'some', 'someone', 'something', 'somethings', 'somewhere' ],
    'Getting 10 entries with prefix "s".'
  );

  assert.deepEqual(
    trie.autocomplete( 'so', 10 ),
    [ 'so', 'some', 'someone', 'something', 'somethings', 'somewhere' ],
    'Getting 10 entries with prefix "so".'
  );

  assert.deepEqual(
    trie.autocomplete( 'some' ),
    [ 'some', 'someone', 'something', 'somethings', 'somewhere' ],
    'Getting all entries with prefix "some".'
  );

  assert.deepEqual(
    trie.autocomplete( 'some', 1 ),
    [ 'some' ],
    'Getting 1 entry with prefix "some".'
  );

  assert.deepEqual(
    trie.autocomplete( 'some', 3 ),
    [ 'some', 'someone', 'something' ],
    'Getting 3 entries with prefix "some".'
  );

  assert.deepEqual(
    trie.autocomplete( 'some', 10 ),
    [ 'some', 'someone', 'something', 'somethings', 'somewhere' ],
    'Getting 10 entries with prefix "some".'
  );

} );
