import * as React from 'react';
import Typed from 'react-typed';

const Body = () => {
  return (
    <div className="content">
      <div className="content-inside">
        <h1 className='heading'>
          <Typed
            strings={['Engineer. Producer. Musician.']}
            typeSpeed={100}
            startDelay={1000}
            loop={false}
          />
        </h1>
        <p className="lead">
          Something short and leading about the collection below—its
          contents, the creator, etc. Make it short and sweet, but not too
          short so folks don't simply skip over it entirely.
        </p>
      </div>
    </div>
  );
}

export default Body;