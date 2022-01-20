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

	var locationCheck = document.getElementById('location-img-disabled');
	var locationCheckActive = locationCheck.getAttribute('hidden');

	var linkCheck = document.getElementById('link-img-disabled');
	var linkCheckActive = linkCheck.getAttribute('hidden');

	var twitterCheck = document.getElementById('twitter-img-disabled');
	var twitterCheckActive = twitterCheck.getAttribute('hidden');

	var othersCheck = document.getElementById('others-disabled');
	var othersCheckActive = othersCheck.getAttribute('hidden');

	//changes to the text elements
	var lightH1 = document.getElementsByTagName('h1');
	var lightH2 = document.getElementsByTagName('h2');
	var lightH4 = document.getElementsByTagName('h4');
	var lightP = document.getElementsByTagName('p');
	var lightA = document.getElementsByTagName('a');
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
		console.log('currently in light mode');
		moonImg.removeAttribute('hidden');
		sunImg.setAttribute('hidden', 'hidden');
		buttonText.innerHTML = 'DARK';
		buttonText.style.color = '#2b3442';
		lightH1[0].style.color = '#2b3442';
		lightInput.classList.remove('getUserLight');
		for (var i = 0; i < lightH2.length; i++) {
			lightH2[i].style.color = '#2b3442';
		}

		if (locationCheckActive) {
			//location is valid
			document.getElementById('location').style.color = '#697c9a';
		} else {
			//location is invalid
			document.getElementById('location').style.color = '#acadb5';
		}
		if (twitterCheckActive) {
			//twitter is valid
			document.getElementById('twitter').style.color = '#697c9a';
		} else {
			//twitter is invalid
			document.getElementById('twitter').style.color = '#acadb5';
		}
		if (linkCheckActive) {
			//link is valid
			document.getElementById('blog').style.color = '#697c9a';
		} else {
			//link is invalid
			document.getElementById('blog').style.color = '#acadb5';
		}
		if (othersCheckActive) {
			//others is valid
			document.getElementById('others').style.color = '#697c9a';
		} else {
			//others is invalid
			document.getElementById('others').style.color = '#acadb5';
		}

		for (var i = 0; i < lightH4.length; i++) {
			lightH4[i].style.color = '#2b3442';
		}
		for (var i = 0; i < lightA.length; i++) {
			lightA[i].style.color = '#697c9a';
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
		console.log('currently in dark mode');
		sunImg.removeAttribute('hidden');
		moonImg.setAttribute('hidden', 'hidden');
		buttonText.innerHTML = 'LIGHT';
		buttonText.style.color = '#FFFFFF';
		lightH1[0].style.color = '#FFFFFF';
		lightInput.classList.add('getUserLight');
		for (var i = 0; i < lightH2.length; i++) {
			lightH2[i].style.color = '#FFFFFF';
		}

		if (locationCheckActive) {
			//location is valid
			document.getElementById('location').style.color = '#f6f8ff';
		} else {
			//location is invalid
			document.getElementById('location').style.color = '#acadb5';
		}
		if (twitterCheckActive) {
			//twitter is valid
			document.getElementById('twitter').style.color = '#f6f8ff';
		} else {
			//twitter is invalid
			document.getElementById('twitter').style.color = '#acadb5';
		}
		if (linkCheckActive) {
			//link is valid
			document.getElementById('blog').style.color = '#f6f8ff';
		} else {
			//link is invalid
			document.getElementById('blog').style.color = '#acadb5';
		}
		if (othersCheckActive) {
			//other is valid
			document.getElementById('others').style.color = '#f6f8ff';
		} else {
			//other is invalid
			document.getElementById('others').style.color = '#acadb5';
		}
		for (var i = 0; i < lightH4.length; i++) {
			lightH4[i].style.color = '#FFFFFF';
		}
		for (var i = 0; i < lightA.length; i++) {
			lightA[i].style.color = '#FFFFFF';
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
	var moonImg = document.getElementById('dark-mode-image');
	var moonActive = moonImg.getAttribute('hidden');
	if (!search) {
		return;
	}
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
			var locationImgDisable = document.getElementById('location-img-disabled');
			var locationImg = document.getElementById('location-img');

			var linkImgDisable = document.getElementById('link-img-disabled');
			var linkImg = document.getElementById('link-img');

			var twitterImgDisable = document.getElementById('twitter-img-disabled');
			var twitterImg = document.getElementById('twitter-img');

			var othersImgDisable = document.getElementById('others-disabled');
			var othersImg = document.getElementById('others-img');
			//Repo
			document.getElementById('repo').innerHTML = data.public_repos;

			//Followers
			document.getElementById('followers').innerHTML = data.followers;

			//Following
			document.getElementById('following').innerHTML = data.following;

			//Location
			document.getElementById('location').innerHTML = data.location;
			if (data.location === null) {
				document.getElementById('location').innerHTML = `Not Available`;
				document.getElementById('location').style.color = '#acadb5';
				locationImgDisable.removeAttribute('hidden');
				locationImg.setAttribute('hidden', 'hidden');
			} else {
				if (moonActive) {
					document.getElementById('location').style.color = '#f6f8ff';
				} else {
					document.getElementById('location').style.color = '#697c9a';
				}
				locationImg.removeAttribute('hidden');
				locationImgDisable.setAttribute('hidden', 'hidden');
			}
			//Links
			if (moonActive) {
				document.getElementById(
					'blog'
				).innerHTML = `<a href="${data.blog}"; style="color: #f6f8ff">${data.blog}</a>`;
			} else {
				document.getElementById(
					'blog'
				).innerHTML = `<a href="${data.blog}"; style="color: #697c9a">${data.blog}</a>`;
			}
			if (data.blog === null || data.blog == '') {
				document.getElementById('blog').innerHTML = `Not Available`;
				document.getElementById('blog').style.color = '#acadb5';
				linkImgDisable.removeAttribute('hidden');
				linkImg.setAttribute('hidden', 'hidden');
			} else {
				if (moonActive) {
					document.getElementById('blog').style.color = '#f6f8ff';
				} else {
					document.getElementById('blog').style.color = '#697c9a';
				}
				linkImg.removeAttribute('hidden');
				linkImgDisable.setAttribute('hidden', 'hidden');
			}
			//twitter
			document.getElementById('twitter').innerHTML = data.twitter_username;
			if (data.twitter_username === null) {
				document.getElementById('twitter').innerHTML = `Not Available`;
				document.getElementById('twitter').style.color = '#acadb5';
				twitterImgDisable.removeAttribute('hidden');
				twitterImg.setAttribute('hidden', 'hidden');
			} else {
				if (moonActive) {
					document.getElementById('twitter').style.color = '#f6f8ff';
				} else {
					document.getElementById('twitter').style.color = '#697c9a';
				}
				twitterImg.removeAttribute('hidden');
				twitterImgDisable.setAttribute('hidden', 'hidden');
			}

			//others
			document.getElementById('others').innerHTML = data.company;
			if (data.company === null) {
				document.getElementById('others').innerHTML = `Not Available`;
				document.getElementById('others').style.color = '#acadb5';
				othersImgDisable.removeAttribute('hidden');
				othersImg.setAttribute('hidden', 'hidden');
			} else {
				if (moonActive) {
					document.getElementById('others').style.color = '#f6f8ff';
				} else {
					document.getElementById('others').style.color = '#697c9a';
				}
				othersImg.removeAttribute('hidden');
				othersImgDisable.setAttribute('hidden', 'hidden');
			}

			document.getElementById(
				'github-thumb'
			).innerHTML = `<img style="width: 85%; height: 90%;" src="${data.avatar_url}"/>`;

			document.getElementById(
				'github-thumb-inner'
			).innerHTML = `<img style="width: 80px; height: 80px;" src="${data.avatar_url}"/>`;
		});
}

fetch('https://api.github.com/users/octocat')
	.then((response) => response.json())
	.then((data) => {
		document.getElementById(
			'github-thumb'
		).innerHTML = `<img style="width: 85%; height: 90%;" src="${data.avatar_url}"/>`;

		document.getElementById(
			'github-thumb-inner'
		).innerHTML = `<img style="width: 80px; height: 80px;" src="${data.avatar_url}"/>`;
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
		document.getElementById(
			'blog'
		).innerHTML = `<a href="${data.blog}">${data.blog}</a>`;

		//twitter
		document.getElementById('twitter').textContent = data.twitter_username;
		if (data.twitter_username === null) {
			document.getElementById('twitter').textContent = `Not Available`;
		}

		//others
		document.getElementById('others').textContent = data.company;
	});
