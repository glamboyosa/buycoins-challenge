import GitHubData from "./models/index";
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel. we also hot reload. so when you save kasala
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
window.addEventListener("load", () => {
  console.log("do i");
  const gitHubData = new GitHubData();
  gitHubData.getUserData();
});
// window.addEventListener("click", () => {
//   console.log("do i");
//   const gitHubData = new GitHubData();
//   gitHubData.getUserData();
// });
