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

	//changes to the text elements
	var lightH1 = document.getElementsByTagName('h1');
	var lightH2 = document.getElementsByTagName('h2');
	var lightH4 = document.getElementsByTagName('h4');
	var lightP = document.getElementsByTagName('p');
	var lightInput = document.getElementById('getUser');
	var backgroundChange = document.getElementsByTagName('body');
	var headerChange = document.getElementsByTagName('header');
	var contentWrapperChange = document.getElementById('content-wrapper');
	var searchBarChange = document.getElementById('search-bar-container');
	var searchBoxChange = document.getElementById('getUser');
	var githubCardChange = document.getElementById('github-card');
	var influencerContainerChange = document.getElementById(
		'influence-container'
	);

	if (moonActive) {
		moonImg.removeAttribute('hidden');
		sunImg.setAttribute('hidden', 'hidden');
		buttonText.innerHTML = 'DARK';
		buttonText.style.color = '#2b3442';
		lightH1[0].style.color = '#2b3442';
		lightInput.classList.remove('getUserLight');
		for (var i = 0; i < lightH2.length; i++) {
			lightH2[i].style.color = '#2b3442';
		}
		for (var i = 0; i < lightP.length; i++) {
			lightP[i].style.color = '#2b3442';
		}
		for (var i = 0; i < lightH4.length; i++) {
			lightH4[i].style.color = '#2b3442';
		}
		backgroundChange[0].style.background = '#f6f8ff';
		headerChange[0].style.background = '#f6f8ff';
		contentWrapperChange.style.background = '#f6f8ff';
		searchBarChange.style.background = '#ffffff';
		searchBoxChange.style.background = '#ffffff';
		githubCardChange.style.background = '#ffffff';
		githubCardChange.style.boxShadow = '5px 10px 18px #a3a5ae';
		searchBarChange.style.boxShadow = '5px 10px 18px #a3a5ae';
		influencerContainerChange.style.background = '#f6f8ff';
	} else {
		//put light stuff here
		sunImg.removeAttribute('hidden');
		moonImg.setAttribute('hidden', 'hidden');
		buttonText.innerHTML = 'LIGHT';
		buttonText.style.color = '#FFFFFF';
		lightH1[0].style.color = '#FFFFFF';
		lightInput.classList.add('getUserLight');
		for (var i = 0; i < lightH2.length; i++) {
			lightH2[i].style.color = '#FFFFFF';
		}
		for (var i = 0; i < lightP.length; i++) {
			lightP[i].style.color = '#FFFFFF';
		}
		for (var i = 0; i < lightH4.length; i++) {
			lightH4[i].style.color = '#FFFFFF';
		}
		backgroundChange[0].style.background = '#141d2f';
		headerChange[0].style.background = '#141d2f';
		contentWrapperChange.style.background = '#141d2f';
		searchBarChange.style.background = '#1e2a47';
		searchBoxChange.style.background = '#1e2a47';
		githubCardChange.style.background = '#1e2a47';
		githubCardChange.style.boxShadow = 'none';
		searchBarChange.style.boxShadow = 'none';
		influencerContainerChange.style.background = '#141d2f';
	}
};

function getApiCall(e) {
	e.preventDefault();
	var search = document.getElementById('getUser').value;
	var modifiedSearch = search.split(' ').join('');
	fetch('https://api.github.com/users/' + modifiedSearch)
		.then((response) => response.json())
		.then((data) => {
			document.getElementById('result-name').textContent = data.name;
			document.getElementById('result-handle').innerHTML = '@' + data.login;
			document.getElementById('result-bio').innerHTML = `
            <p>${data.bio}</p>`;
			if (data.bio === null) {
				document.getElementById('result-bio').textContent =
					'This profile has no bio';
			}
			//Repo
			document.getElementById('repo').textContext = `${data.public_repos}`;

			//Followers
			document.getElementById('followers').textContext = `${data.followers}`;

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
