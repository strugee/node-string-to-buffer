'use strict';

const vows = require('perjury'),
      assert = vows.assert;

vows.describe('string-to-buffer module').addBatch({
	'when we require the module': {
		topic: function() {
			return require('./index');
		},
		'it works': function(err, stringToBuffer) {
			assert.ifError(err);
			assert.isFunction(stringToBuffer);
		},
		'and we call it with a string': {
			topic: function(stringToBuffer) {
				return stringToBuffer('Hello, world!');
			},
			'we get a buffer back': function(err, buf) {
debugger;
				assert.ok(Buffer.isBuffer(buf));
			},
			'the buffer has the right data': function(err, buf) {
debugger;
				assert.equal(buf.toString(), 'Hello, world!');
			}
		}
	}
}).export(module);
