import React, { useContext } from 'react';

import { StoreContext } from '../../stores/StoreProvider';

import { default as bemCssModules } from 'bem-css-modules';
import { default as ResultStyle } from './Result.module.scss';

const style = bemCssModules(ResultStyle);

const Result = () => {
  const { respoName, data, totalCount } = useContext(StoreContext);

  let resultElement;

  if (totalCount !== 0) {
    resultElement = data.map((data) => {
      return (
        <li key={data.id}>
          <details>
            <summary>
              <h3 className={style('title')}>{data.name}</h3>
            </summary>
            <div className={style('show-hide')}>
              <a className={style('link')} href={data.html_url}>
                {data.html_url}
              </a>
              <p>
                {data.homepage ? (
                  <a className={style('link')} href={data.homepage}>
                    HomePage
                  </a>
                ) : null}
              </p>
              <p className={style('first')}>Pełna nazawa: {data.full_name ? data.full_name : `Brak`}</p>
              <p>Opis: {data.description ? data.description : `Brak`}</p>
              <p className={style('last')}>Język programowania: {data.language ? data.language : `Brak`}</p>
            </div>
          </details>
        </li>
      );
    });
  } else {
    return <p className={style('no-result')}>Nie znaleziono repozytorium o nazwie {respoName}</p>;
  }

  return <ul className={style()}>{resultElement}</ul>;
};

export default Result;
