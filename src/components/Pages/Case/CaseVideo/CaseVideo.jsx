import React from 'react';
import ReactPlayer from 'react-player';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

const CaseVideo = ({ link }) => {
  const containerRef = React.useRef();
  const lockRef = React.useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }

  return (
    <section className="case-video">
      <div className="case-video__wrapper" ref={containerRef}>
        {lockRef.current && (
          <LazyLoadComponent>
            <ReactPlayer
              className="react-player"
              controls={true}
              url={link}
              width="100%"
              height="100%"
              allowFullScreen={true}
              config={{
                vimeo: {
                  playerVars: { origin: 'http://localhost:8000' },
                },
              }}
            />
          </LazyLoadComponent>
        )}
      </div>
    </section>
  );
};

CaseVideo.propTypes = {
  link: PropTypes.string,
};

export default CaseVideo;
