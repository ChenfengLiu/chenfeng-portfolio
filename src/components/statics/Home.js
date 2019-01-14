import React, { Component } from 'react';
import axios from 'axios';
import * as firebase from 'firebase';

import Banner from '../lib/banner/Banner';
// import classes from '../../stylesheets/pages/Home.css';

class Home extends Component {

  componentDidMount() {
    console.log('[Home.js] Inside componentDidMount()');
  }

  handleDownload() {
    if(this.downloadButton.disabled === true) return;
    this.downloadButton.innerHTML = "... loading";
    this.downloadButton.disabled = true;
    // Create a reference with an initial file path and name
    let storage = firebase.storage();
    let resumeReference = storage.ref('2019_01_Resume.pdf');
    // Get the download URL
    resumeReference.getDownloadURL().then( url => {
      // download using axios
      axios({
        url: url,
        method: 'GET',
        responseType: 'blob',
        onDownloadProgress: (progressEvent) => {
          const val = Math.round(progressEvent.loaded / progressEvent.total * 100);
          if(val === 100) {
            this.downloadButton.innerHTML = "download resume";
            this.downloadButton.disabled = false;
          }
        }
      }).then(response => {
        // on response download to browser
        const url = window.URL.createObjectURL(new Blob([response.data]));
	console.log("[home] response data and generated url: ", response.data, url);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Chenfeng_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); //remove the link when done
      });
    }).catch(function(error) {
      // catch errors
      switch (error.code) {
        case 'storage/object_not_found':
          console.log("File doesn't exist");
          break;
        case 'storage/unauthorized':
          console.log("User doesn't have permission to access the object");
          break;
        case 'storage/canceled':
          console.log("User canceled the upload");
          break;
        case 'storage/unknown':
          console.log("Unknown error occurred, inspect the server response");
          break;
        default:
          break;
      }
    });
  }

  render() {
    return (
      <div>
        <div className="home-banner">
           <Banner title={"I'm Chenfeng"}
             subTitle={'creative front-end developer'}
             showButton={true}
             buttonText={'view projects'}
             buttonLink={'projects'}
             image={'chenfeng-sea.png'}/>
        </div>

        <div className="home-content">
          <div>
            <h1>Resume</h1>
            <a className="button button-dark"
              herf="#"
              ref={element => this.downloadButton = element}
              onClick={() => this.handleDownload()}>
              download resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
