import Form from './component/Form/Form';
import Result from './component/Result/Result';
import StoreProvider from './stores/StoreProvider';

import { default as bemCssModules } from 'bem-css-modules';
import { default as AppStyle } from './App.module.scss';

const style = bemCssModules(AppStyle);

function App() {
  return (
    <StoreProvider>
      <div className={style()}>
        <h2 className={style('title')}>
          {' '}
          <span className='material-icons'>search</span> Wyszukiwarka repozytoriów na GitHub
        </h2>
        <Form />
        <Result />
      </div>
    </StoreProvider>
  );
}

export default App;
