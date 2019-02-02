// see https://www.netlify.com/docs/functions/

const _ = require('lodash')

exports.handler = function(event, context, callback) {
	callback(null, {
		statusCode: 200,
		body: _.capitalize('LODASH'),
	})
}
