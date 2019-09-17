//basico
fetch('https://httpbin.org/ip')
    .then(function(response) {
        let data =  response.text();
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });


//form data
fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'a=1&b=2'
    })
    .then(function(response) {
        console.log('response =', response);
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });

//response
fetch('https://httpbin.org/ip')
    .then(function(response) {
        console.log('response.body =', response.body);
        console.log('response.bodyUsed =', response.bodyUsed);
        console.log('response.headers =', response.headers);
        console.log('response.ok =', response.ok);
        console.log('response.status =', response.status);
        console.log('response.statusText =', response.statusText);
        console.log('response.type =', response.type);
        console.log('response.url =', response.url);
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });


// JSON	
fetch('https://httpbin.org/post',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"a": 1, "b": 2}),
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });

fetch('https://httpbin.org/get',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });

fetch('https://httpbin.org/put',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"a": 1, "b": 2}),
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });

fetch('https://httpbin.org/delete',{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });


//Request
var request = new Request('https://httpbin.org/get', {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit'
});
console.log('request =', request);
fetch(request)
.then(function(response) {
    console.log('response =', response);
    return response.text();
})
.then(function(data) {
    console.log('data = ', data);
})
.catch(function(err) {
    console.error(err);
});

//form data
var dataSend = new FormData();
dataSend.append('a', '1');
dataSend.append('b', '2');
var request = new Request('https://httpbin.org/put', {
    method: 'PUT',
    body:  	dataSend
});
console.log('request =', request);
for (var k of dataSend.keys()) {
console.log('dataSend.get("' + k + '") =', dataSend.get(k));
}
fetch(request)
    .then(function(response) {
        console.log('response =', response);
        return response.text();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });


//errors
fetch('https://httpbin.org/get',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
        if (response.status == "550") {
			throw Error(response.statusText);
		}
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });

fetch('https://httpbin.org/status/500',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
		console.log(response.status);
		return { mensaje: 'Error'};
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });