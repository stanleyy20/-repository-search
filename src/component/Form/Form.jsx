import React, { useContext } from 'react';

import { StoreContext } from '../../stores/StoreProvider';

import { default as bemCssModules } from 'bem-css-modules';
import { default as FormStyle } from './Form.module.scss';

const style = bemCssModules(FormStyle);

const Form = () => {
  const { inputValue, setInputValue, getRepos } = useContext(StoreContext);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    getRepos();
  };

  return (
    <form className={style()}>
      <input type='text' value={inputValue} onChange={handleOnChange} placeholder='Wpisz nazwę repozytorium' />
      <button onClick={handleOnClick}>Wyszukaj</button>
    </form>
  );
};

export default Form;
