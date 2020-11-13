import axios from "axios";
import { githubKey } from "../helpers/config";
export default class GitHubData {
  constructor() {
    this.state = {
      loading: true,
      error: null,
      profileData: null,
      repositoryData: null
    };
  }

  getUserData() {
    const requestBody = {
      query: `
      query{
  viewer {
    login
    repositories(last: 20) {
      nodes {
        name
        stargazerCount
        description
        forks(first: 20) {
          edges {
            node {
              forkCount
              openGraphImageUrl
            }
          }
        }
        primaryLanguage {
          color
          name
        }
      }
    }
  }
}
`
    };
    axios
      .post("https://api.github.com/graphql", requestBody, {
        headers: {
          Authorization: `bearer ${githubKey}`
        }
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  }
}
