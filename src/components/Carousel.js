import React from 'react';
import ReactSwipe from 'react-swipe';

const Carousel = () => {
  let reactSwipeEl;

  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div className="divthing">PANE 1</div>
        <div className="divthing">PANE 2</div>
        <div className="divthing">PANE 3</div>
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>
  );
};
export default Carousel;
