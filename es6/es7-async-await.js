import fetch from 'node-fetch'

// https://api.github.com/users/karenchuang

const USER_NAME = 'karenchuang'

function getProfile() {
  return fetch(`https://api.github.com/users/${USER_NAME}`)
}

function getRepos() {
  return fetch(`https://api.github.com/users/${USER_NAME}/repos`)
}

async function getCombined() {
  const profileResponse = await getProfile();
  const profile = await profileResponse.json();

  const reposResponse = await getRepos();
  const repos = await reposResponse.json();

  return {
    profile,
    repos
  };
}

(async function() {
  const combined = await getCombined();
  console.log(combined);
}());