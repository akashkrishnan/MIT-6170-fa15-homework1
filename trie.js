'use strict';

/**
 * Constructs a Trie data structure.
 */
var Trie = function () {

  /**
   * Constructs a TrieNode.
   *
   * @private
   */
  var TrieNode = function () {

    var that = Object.create( TrieNode.prototype );

    that.children = {};
    that.word = null;

    Object.seal( that );

    return that;

  };

  /**
   * Returns a list of words under the current TrieNode.
   *
   * @param {number} [n] - maximum number of words to obtain; 0 means unlimited
   * @param {Array.<string>} [list] - list of strings to push results to
   * @returns {Array.<string>} - list of words
   */
  TrieNode.prototype.list = function ( n, list ) {

    list = list || [];

    if ( !n || list.length !== n ) {

      // Check if we're at a word
      if ( this.word ) {
        list.push( this.word );
      }

      // Iterate over children and recurse the listing
      Object.keys( this.children ).forEach( function ( char ) { // EXAMPLE USE OF FUNCTIONALS
        this.children[ char ].list( n, list );
      }.bind( this ) );

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

      char = char.toLowerCase();

      // Add the character child trie if it doesn't exist
      if ( !this.children[ char ] ) {
        this.children[ char ] = new TrieNode();
      }

      // Recurse the insert through the child
      this.children[ char ].insert( word, ++i );

    } else {

      // No character means end of word
      this.word = word;

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
      return this.list( n );

    }
  };

  var that = Object.create( Trie.prototype );
  var root = TrieNode();

  /**
   * Adds a word to the Trie data structure. Duplicate case-insensitive words replace pre-existing words. For
   * example, if apple' and 'Apple' were inserted in that order, only the last duplicate insert 'Apple' would exist.
   *
   * @param {string} word - the word to add
   */
  that.insert = function ( word ) {
    root.insert( word, 0 );
  };

  /**
   * Returns a list of words in the Trie in no particular order that share the specified case-insensitive prefix.
   *
   * @param {string} prefix - case-insensitive prefix of words to autocomplete
   * @param {number} [n=0] - maximum number of words to obtain; 0 means unlimited
   */
  that.autocomplete = function ( prefix, n ) {
    return root.autocomplete( prefix.toLowerCase(), n || 0, 0 );
  };

  Object.freeze( that );

  return that;

};
