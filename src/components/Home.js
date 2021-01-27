import React from 'react';
import Hero from './partials/Hero';
import Community from './Community';

const Home = () => {
  return (
    <main>
      <Hero
        title={`Now Accepting Offers`}
        desc={`Help advance Steven's career and give him the opportunity to prosper`}
        main
        background={`papers`}
      />
      <div className="wrapper">
        <Community />
      </div>
      <Hero title={`Join our mission and help power prosperity`} background={`redshirt`} />
    </main>
  );
};

export default Home;
