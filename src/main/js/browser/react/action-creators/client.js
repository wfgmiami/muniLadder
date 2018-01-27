const rest = require('rest');

const defaultRequest = require('rest/interceptor/defaultRequest');
const mime = require('rest/interceptor/mime');
const errorCode = require('rest/interceptor/errorCode');

const baseRegistry= require('rest/mime/registry');


// rest.js to include support for URI Templates
const uriTemplateInterceptor = require('./api/uriTemplateInterceptor');

var registry = baseRegistry.child();

registry.register('text/uri-list', require('./api/uriListConverter'));
registry.register('application/hal+json', require('rest/mime/type/application/hal'));

module.exports = rest
	.wrap(mime, { registry: registry })
	.wrap(errorCode)
	.wrap(defaultRequest, { headers: { 'Accept' : 'application/hal+json' }})
	.wrap(uriTemplateInterceptor)
	