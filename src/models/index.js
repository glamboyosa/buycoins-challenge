import axios from 'axios';
import { githubKey } from '../helpers/config';
export default class GitHubData {
  constructor() {
    this.state = {
      loading: true,
      error: null,
      profileData: null,
      repositoryData: null,
    };
  }

  async getUserData() {
    const repositoriesRequestBody = {
      query: `
      query{
  viewer {
    repositories(last: 20) {
      nodes {
        name
        stargazerCount
        description
        forks(first: 20) {
          totalCount
        }
        primaryLanguage {
          color
          name
        }
      }
    }
  }
}
`,
    };
    const profileRequestBody = {
      query: `
    query{
      viewer {
        login
    bio
        name
        avatarUrl
        }
      }
    `,
    };

    try {
      const resp = await axios.all([
        axios.post('https://api.github.com/graphql', repositoriesRequestBody, {
          headers: {
            Authorization: `bearer ${githubKey}`,
          },
        }),
        axios.post('https://api.github.com/graphql', profileRequestBody, {
          headers: {
            Authorization: `bearer ${githubKey}`,
          },
        }),
      ]);
      const [repositoriesResp, profileResp] = resp;
      this.state = {
        ...this.state,
        loading: false,
        profileData: profileResp.data.data.viewer,
        repositoryData: repositoriesResp.data.data.viewer.repositories.nodes,
      };
    } catch (err) {
      this.state = { ...this.state, error: err.message, loading: false };
    }
  }
}
