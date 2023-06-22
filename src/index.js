import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './Main';

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

let root = null;
const getRoot = (container) => {
  if (!root) {
    const rootEle = container ? container.querySelector('#root') : document.querySelector('#root');
    return ReactDOM.createRoot(rootEle);
  }
  return root;
};

function render(props) {
  const { container } = props;
  root = getRoot(container);

  root.render(
    <React.StrictMode>
      <Router basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
        <App />
      </Router>
    </React.StrictMode>);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

const handleGlobalStateChange = (state, preState) => {
  console.log('==========state, preState: ', state, preState);
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  props.onGlobalStateChange(handleGlobalStateChange)
  props.setGlobalState({count: 66});
  render(props);
}

export async function unmount(props) {
  root.unmount();
  root = null;
}

export async function update(props) {
  console.log('update props', props);
}
