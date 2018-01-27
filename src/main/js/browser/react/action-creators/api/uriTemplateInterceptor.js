define(function(require){
		'use strict'
		var interceptor = require('rest/interceptor');
		
		return interceptor({
			request: function(request){
				if(request.path.indexOf('{') === -1){
					return request;
				}else{
					// trimming the template part
					// http://www.test/{name}
					// http://www.test/
					request.path = request.path.split('{')[0];
					console.log('request.path', request.path)
					return request;
				}
			}
			
		});
			
});


