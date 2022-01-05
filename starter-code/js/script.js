console.log('hello world');

var userInput = document.getElementById('handleUserSearch');
var userInputEnter = document.getElementById('my-form');

userInput.addEventListener('click', getApiCall);
userInputEnter.addEventListener('submit', getApiCall);

let toggle = (button) => {
	var moonImg = document.getElementById('dark-mode-image');
	var moonActive = moonImg.getAttribute('hidden');
	var sunImg = document.getElementById('light-mode-image');
	var buttonText = document.getElementById('handleModeChange');

	if (moonActive) {
		moonImg.removeAttribute('hidden');
		sunImg.setAttribute('hidden', 'hidden');
		buttonText.innerHTML = 'DARK';
		buttonText.style.color = '#2b3442';
	} else {
		sunImg.removeAttribute('hidden');
		moonImg.setAttribute('hidden', 'hidden');
		buttonText.innerHTML = 'LIGHT';
		buttonText.style.color = '#FFFFFF';
	}
};

function getApiCall(e) {
	e.preventDefault();
	var search = document.getElementById('getUser').value;
	var modifiedSearch = search.split(' ').join('');
	fetch('https://api.github.com/users/' + modifiedSearch)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);

			document.getElementById('result-name').textContent = data.name;

			document.getElementById('result-handle').textContext = `
            @${data.login}`;

			document.getElementById('result-bio').innerHTML = `
            <p>${data.bio}</p>`;
			if (data.bio === null) {
				document.getElementById(
					'result-bio'
				).innerHTML = `<p>This profile has no bio  fetch successful</p>`;
			}
			//Repo
			document.getElementById('repo').textContext = data.public_repos;

			//Followers
			document.getElementById('followers').textContext = data.followers;

			//Following
			document.getElementById('following').textContext = data.following;

			//Location
			document.getElementById('location').textContext = data.location;
			if (data.location === null) {
				document.getElementById('location').textContext = `Not Available`;
			}
			//Links
			document.getElementById('blog').textContent = data.blog;
			if (data.blog === null || data.blog == '') {
				document.getElementById('blog').textContext = `Not Available`;
			}
			//twitter
			document.getElementById('twitter').textContext = data.twitter_username;
			if (data.twitter_username === null) {
				document.getElementById('twitter').textContext = `Not Available`;
			}

			//others
			document.getElementById('others').textContext = data.company;
			if (data.company === null) {
				document.getElementById('others').textContext = `Not Available`;
			}

			document.getElementById(
				'github-thumb'
			).innerHTML = `<img style=width: 90px; height: 90px; src="${data.avatar_url}"/>`;

			document.getElementById(
				'github-thumb-inner'
			).innerHTML = `<img style="width: 90px; height: 90px; src="${data.avatar_url}"/>`;
		});
}

fetch('https://api.github.com/users/octocat')
	.then((response) => response.json())
	.then((data) => {
		document.getElementById(
			'github-thumb'
		).innerHTML = `<img src="${data.avatar_url}"/>`;

		document.getElementById(
			'github-thumb-inner'
		).innerHTML = `<img style="width: 90px; height: 90px;" src="${data.avatar_url}"/>`;
		//Name
		document.getElementById('result-name').textContent = data.name;
		var date = new Date(data.created_at);

		//Date joined
		var modifiedDate = date.toUTCString();
		document.getElementById(
			'date-joined'
		).innerHTML = `<h4>${modifiedDate}</h4>`;

		//Login
		document.getElementById('result-handle').textContent = '@' + data.login;

		//Bio
		document.getElementById('result-bio').innerHTML = `<p>${data.bio}</p>`;
		if (data.bio === null) {
			document.getElementById(
				'result-bio'
			).innerHTML = `<p>This profile has no bio</p>`;
		}

		//Repo
		document.getElementById('repo').textContent = data.public_repos;

		//Followers
		document.getElementById('followers').textContent = data.followers;

		//Following
		document.getElementById('following').textContent = data.following;

		//Location
		document.getElementById('location').textContent = data.location;

		//Links
		document.getElementById('blog').textContent = data.blog;

		//twitter
		document.getElementById('twitter').textContent = data.twitter_username;
		if (data.twitter_username === null) {
			document.getElementById('twitter').textContent = `Not Available`;
		}

		//others
		document.getElementById('others').textContent = data.company;
	});
