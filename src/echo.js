// see https://www.netlify.com/docs/functions/

exports.handler = function(event, context, callback) {

	const body = `<pre>
${JSON.stringify({
	event,
	context,
}, null, 2)}
</pre>`

	callback(null, {
		statusCode: 200,
		body,
	})
}