import React, { Component } from 'react';
import axios from 'axios';
import { Chart, Geom, Axis, Tooltip, Legend, setTheme, track } from 'bizcharts';

const data = [
  { genre: 'Sports', sold: 275, income: 2300 },
  { genre: 'Strategy', sold: 115, income: 667 },
  { genre: 'Action', sold: 120, income: 982 },
  { genre: 'Shooter', sold: 350, income: 5271 },
  { genre: 'Other', sold: 150, income: 3710 }
];

const cols = {
  sold: { alias: '销售量' },
  genre: { alias: '游戏种类' }
};

class PunchCard extends Component {

  componentDidMount() {
    console.log('[PunchCard.js] Inside componentDidMount()');
    // this.getRepos();
    // this.getRateLimit();
  }

  getRateLimit = () => {
    axios({
      url: 'https://api.github.com/rate_limit',
      method: 'GET',
      responseType: 'json',
      Accept: 'application/vnd.github.v3+json',
      onDownloadProgress: (progressEvent) => {
        console.log("loading");
      }
    }).then(response => {
      console.log(response);
    });
  }

  getRepos = () => {
    let repos = [];
    axios({
      url: 'https://api.github.com/users/ChenfengLiu/repos',
      method: 'GET',
      responseType: 'json',
      Accept: 'application/vnd.github.v3+json',
      onDownloadProgress: (progressEvent) => {
        console.log("loading");
      }
    }).then(response => {
      repos = response.data.map(repo => repo.name);
      console.log(repos);
    });

    let weeklyCommits = [];
    weeklyCommits[0] = this.getRepoCommits(repos[0]);
    console.log(weeklyCommits);
  }

  getRepoCommits = (repoName) => {
    const repoUrl = 'https://api.github.com/repos/ChenfengLiu/' + repoName + '/stats/participation'
    axios({
      url: repoUrl,
      method: 'GET',
      responseType: 'json',
      Accept: 'application/vnd.github.v3+json',
      onDownloadProgress: (progressEvent) => {
        console.log("loading participation");
      }
    }).then(response => {
      console.log(response.data.owner);
      return response.data.owner;
    });
  }

  render() {
    setTheme('dark');
    track(false);
    return (
      <div>
      </div>
    );
  }
}

export default PunchCard;
