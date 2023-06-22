import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

let root = null;
const getRoot = (container) => {
  if (!root) {
    const rootEle = container ? container.querySelector('root') : document.querySelector('#root');
    return ReactDOM.createRoot(rootEle);
  }
  return root;
};

function render(props) {
  const { container, count } = props;
  root = getRoot(container);

  root.render(
    <React.StrictMode>
      <div>micro app ....</div>
      <div>count: {count}</div>
    </React.StrictMode>);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  root.unmount();
  root = null;
}

export async function update(props) {
  console.log('update props', props);
}