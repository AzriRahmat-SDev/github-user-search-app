console.log('hello world');

var form = document.getElementById('myForm');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	var search = document.getElementById('getUser').value;
	var modifiedSearch = search.split(' ').join('');
	fetch('https://api.github.com/users/' + modifiedSearch)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);

			document.getElementById('result-name').innerHTML = `
            <h1>${data.name}</h1>`;

			document.getElementById('result-handle').innerHTML = `
            <p>@${data.login}</p>`;

			document.getElementById('result-bio').innerHTML = `
            <p>${data.bio}</p>`;
			if (data.bio === null) {
				document.getElementById(
					'result-bio'
				).innerHTML = `<p>This profile has no bio  fetch successful</p>`;
			}
			//Repo
			document.getElementById('repo').innerHTML = `<p>${data.public_repos}</p>`;

			//Followers
			document.getElementById(
				'followers'
			).innerHTML = `<p>${data.followers}</p>`;

			//Following
			document.getElementById(
				'following'
			).innerHTML = `<p>${data.following}</p>`;

			//Location
			document.getElementById('location').innerHTML = `<p>${data.location}</p>`;
			if (data.location === null) {
				document.getElementById('location').innerHTML = `<p>Not Available</p>`;
			}
			//Links
			document.getElementById('links').innerHTML = `<p>${data.blog}</p>`;
			if (data.blog === null) {
				document.getElementById('links').innerHTML = `<p>Not Available</p>`;
			}
			//twitter
			document.getElementById(
				'twitter'
			).innerHTML = `<p>${data.twitter_username}</p>`;
			if (data.twitter_username === null) {
				document.getElementById('twitter').innerHTML = `<p>Not Available</p>`;
			}

			//others
			document.getElementById('others').innerHTML = `<p>${data.company}</p>`;
			if (data.company === null) {
				document.getElementById('others').innerHTML = `<p>Not Available</p>`;
			}

			document.getElementById(
				'github-thumb'
			).innerHTML = `<img src="${!data.avatar_url}"/>`;
		});
});

fetch('https://api.github.com/users/octocat')
	.then((response) => response.json())
	.then((data) => {
		document.getElementById(
			'github-thumb'
		).innerHTML = `<img src="${!data.avatar_url}"/>`;

		//Name
		document.getElementById('result-name').innerHTML = `<p>${data.name}</p>`;
		var date = new Date(data.created_at);

		//Date joined
		var modifiedDate = date.toUTCString();
		document.getElementById('date-joined').innerHTML = `<p>${modifiedDate}</p>`;

		//Login
		document.getElementById(
			'result-handle'
		).innerHTML = `<p>@${data.login}</p>`;

		//Bio
		document.getElementById('result-bio').innerHTML = `<p>${data.bio}</p>`;
		if (data.bio === null) {
			document.getElementById(
				'result-bio'
			).innerHTML = `<p>This profile has no bio</p>`;
		}

		//Repo
		document.getElementById('repo').innerHTML = `<p>${data.public_repos}</p>`;

		//Followers
		document.getElementById('followers').innerHTML = `<p>${data.followers}</p>`;

		//Following
		document.getElementById('following').innerHTML = `<p>${data.following}</p>`;

		//Location
		document.getElementById('location').innerHTML = `<p>${data.location}</p>`;

		//Links
		document.getElementById('links').innerHTML = `<p>${data.blog}</p>`;

		//twitter
		document.getElementById(
			'twitter'
		).innerHTML = `<p>${data.twitter_username}</p>`;
		if (data.twitter_username === null) {
			document.getElementById('twitter').innerHTML = `<p>Not Available</p>`;
		}

		//others
		document.getElementById('others').innerHTML = `<p>${data.company}</p>`;
	});
