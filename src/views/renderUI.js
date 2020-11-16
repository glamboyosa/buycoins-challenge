import { maincContentParent, sideBarParent } from '../helpers/config';
export const renderSidebar = (data) => {
  const markup = `
<img
src=${data.avatarUrl}
class="huge-avatar"
/>

<div class="github-name">${data.name}</div>
<div class="github-username">${data.login}</div>
<div class="github-bio">${data.bio.length > 1 ? data.bio : '&nbsp;'}</div>
`;
  sideBarParent.insertAdjacentHTML('beforeend', markup);
};

const renderMainContent = (data) => {
  const markup = `
<div class="github-repo">
<div class="github-repo-name">
  <h3>${data.name}</h3>
  <button>
    <i class="icon ion-md-star"></i>
    <span>Star</span>
  </button>
</div>
<div class="github-repo-description">
  ${data.description ?? '&nbsp;'}
</div>
<div class="github-repo-stats">
  <div class="github-repo-language">
    <span style="background-color: ${
      data.primaryLanguage ? data.primaryLanguage.color : '#000'
    }; ">&nbsp;</span>
    <p>${data.primaryLanguage ? data.primaryLanguage.name : 'no name'}</p>
  </div>
  <div class="github-repo-stars">
    <i class="icon ion-md-star"></i>
    <p>${data.stargazerCount}</p>
  </div>
  <div class="github-repo-forks">
  <i class="icon ion-md-attach"></i>
    <p>${data.forks.totalCount}</p>
  </div>
</div>
</div>
`;
  document.querySelector('.dashboard-content-number').style.visibility =
    'visible';
  document.querySelector('.dashboard-content-search').style.visibility =
    'visible';
  maincContentParent.insertAdjacentHTML('afterbegin', markup);
};
export const renderMainContentLogic = (data) => {
  data.forEach(renderMainContent);
};
