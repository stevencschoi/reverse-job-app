import React from 'react';
import { articles } from '../models';
import Article from './partials/Article';

const Community = () => {
  return (
    <section className="community">
      <h2>Build a better tomorrow</h2>
      <p>Make Steven's network thrive with trickle down economics</p>
      {articles.map((article, index) => {
        return <Article article={article} alignRight={index % 2 !== 0 ? true : false} />;
      })}
    </section>
  );
};

export default Community;
