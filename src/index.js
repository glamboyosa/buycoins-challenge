import 'regenerator-runtime/runtime';
import clearLoader from './helpers/clearLoader';
import renderLoader from './helpers/renderLoader';
import GitHubData from './models/index';
import { renderMainContentLogic, renderSidebar } from './views/renderUI';
window.addEventListener('load', async () => {
  const gitHubData = new GitHubData();
  renderLoader();
  await gitHubData.getUserData();
  if (!gitHubData.state.loading && gitHubData.state.profileData) {
    clearLoader();
    renderSidebar(gitHubData.state.profileData);
    renderMainContentLogic(gitHubData.state.repositoryData);
  }
});
