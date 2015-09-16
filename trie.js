'use strict';

/**
 * Constructs a Trie data structure.
 *
 * @constructor
 */
var Trie = function () {

  /**
   * Constructs a TrieNode.
   *
   * @constructor
   */
  var TrieNode = function () {
    this.children = {};
    this.word = false;
  };

  /**
   * Returns a list of suffixes under the current TrieNode, each prepended by an optional prefix.
   *
   * WARNING: does not verify if the prefix is associated with the TrieNode!
   *
   * @param {string} [prefix] - prefix to be prepended to each suffix
   * @param {number} [n] - maximum number of words to obtain; 0 means unlimited
   * @param {Array.<string>} [list] - list of strings to push results to
   * @returns {Array.<string>} - list of words with the specified prefixes
   */
  TrieNode.prototype.list = function ( prefix, n, list ) {

    list = list || [];

    if ( !n || list.length !== n ) {

      // Check if we're at a word
      if ( this.word ) {
        list.push( prefix );
      }

      // Iterate over children and recurse the listing
      for ( var char in this.children ) {
        if ( this.children.hasOwnProperty( char ) ) {
          this.children[ char ].list( prefix + char, n, list );
        }
      }

    }

    return list;

  };

  /**
   * Adds a word to the Trie data structure.
   *
   * @param {string} word - the word to add
   * @param {number} i - starting index of word to insert
   */
  TrieNode.prototype.insert = function ( word, i ) {

    // Character we are dealing with
    var char = word[ i ];

    // Check if we have a character to process
    if ( char ) {

      // Add the character child trie if it doesn't exist
      if ( !this.children[ char ] ) {
        this.children[ char ] = new TrieNode();
      }

      // Recurse the insert through the child
      this.children[ char ].insert( word, ++i );

    } else {

      // No character means end of word
      this.word = true;

    }
  };

  /**
   * Returns a list of words under the current TrieNode that share the specified prefix.
   *
   * @param {string} prefix - prefix of words to autocomplete
   * @param {number} n - maximum number of words to obtain; 0 means unlimited
   * @param {number} i - starting index of word to insert
   * @returns {Array.<string>} list of autocomplete strings that share the specified prefix
   */
  TrieNode.prototype.autocomplete = function ( prefix, n, i ) {

    // Character we're dealing with
    var char = prefix[ i ];

    // Check if we have a character to match
    if ( char ) {

      // Check if char exists
      if ( this.children[ char ] ) {

        // Continue recursively matching characters
        return this.children[ char ].autocomplete( prefix, n, ++i );

      } else {

        // Char was not found, so there cannot be any matches
        return [];

      }

    } else {

      // We've found our prefix; now, to find all suffixes/words
      return this.list( prefix, n );

    }
  };

  var root = new TrieNode();

  /**
   * Adds a word to the Trie data structure.
   *
   * @param {string} word - the word to add
   */
  this.insert = function ( word ) {
    root.insert( word, 0 );
  };

  /**
   * Returns a list of words in the Trie that share the specified prefix.
   *
   * @param {string} prefix - prefix of words to autocomplete
   * @param {number} [n] - maximum number of words to obtain; 0 means unlimited
   */
  this.autocomplete = function ( prefix, n ) {
    return root.autocomplete( prefix, n || 0, 0 );
  };

};
