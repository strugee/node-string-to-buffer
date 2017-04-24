module.exports = function stringToBuffer(str) {
	// Node 6+ uses Buffer.from but earlier versions don't have this, so we fallback
	return Buffer.from ? Buffer.from(str) : new Buffer(str);
}
