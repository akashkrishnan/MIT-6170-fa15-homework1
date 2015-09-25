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

QUnit.skip( 'Case Insensitivity', function ( assert ) {

} );

QUnit.skip( 'Result Size Limiting', function ( assert ) {

} );
