import React, { Component } from 'react';

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

class LightGallery extends Component {

  constructor() {
    super();
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState((prevState) => {
      return {currentImage: prevState.currentImage - 1};
    });
  }

  gotoNext() {
    this.setState((prevState) => {
      return {currentImage: prevState.currentImage + 1};
    });
  }

  render() {
    const divStyle = {
      width: "100%",
      height: "auto"
    };
    return (
      <div className="gallery-0" style={divStyle}>
        <Gallery photos={this.props.photos} onClick={this.openLightbox}/>
        <Lightbox images={this.props.photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen} />
      </div>
    );
  }
};

export default LightGallery;
