import React from 'react';

const Article = ({ article, alignRight }) => {
  return (
    <article className={alignRight ? 'flex-end' : null}>
      <div className="article-text">
        <h3>{article.title}</h3>
        <p>{article.desc}</p>
      </div>
      <div className="figure">
        <img src={article.img} alt={article.alt} />
      </div>
    </article>
  );
};

export default Article;
