import 'regenerator-runtime/runtime';
import GitHubData from './models/index';
window.addEventListener('load', async () => {
  const gitHubData = new GitHubData();
  console.log(gitHubData.state);
  await gitHubData.getUserData();
});
