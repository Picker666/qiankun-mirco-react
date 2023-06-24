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

// 独立运行 的render
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

const handleGlobalStateChange = (state, preState) => {
  console.log('==========state, preState: ', state, preState);
}

// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等
export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

// 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
export async function mount(props) {
  console.log('[react16] props from main framework', props);
  props.onGlobalStateChange(handleGlobalStateChange)
  props.setGlobalState({count: 66});
  render(props);
  if (!window.name) {
    window.name = 666;
  }
  console.log('window.name: ', window.name);
}

// 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
export async function unmount(props) {
  root.unmount();
  root = null;
}

// 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
export async function update(props) {
  console.log('update props', props);
}
