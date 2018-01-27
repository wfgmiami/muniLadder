module.exports = function follow(api, rootPath, relArray) {
	var root = api({
		method: 'GET',
		path: rootPath
	});

	return relArray.reduce(function(root, arrayItem) {
		var rel = typeof arrayItem === 'string' ? arrayItem : arrayItem.rel;
		
		return traverseNext(root, rel, arrayItem);
	}, root);

	function traverseNext (root, rel, arrayItem) {
		return root.then(function (response) {
				
			/*{
				"_links": {
					"projectedCashes": {
					"href": "http://localhost:8080/api/projectedCashes"
					},
				"profile": {
					"href": "http://localhost:8080/api/profile"
					}
				}
			*/
			
			if (hasEmbeddedRel(response.entity, rel)) {
			
				return response.entity._embedded[rel];
			}

			if(!response.entity._links) {
				return [];
			}

			if (typeof arrayItem === 'string') {
				console.log('follow..........',response.entity)
				return api({
					method: 'GET',
					path: response.entity._links[rel].href
				});
			} else {
				console.log('follow.......not string.....',response.entity)
				return api({
					method: 'GET',
					path: response.entity._links[rel].href,
					params: arrayItem.params
				});
			}
		});
	}

	function hasEmbeddedRel (entity, rel) {
	
		return entity._embedded && entity._embedded.hasOwnProperty(rel);
	}
};