// Import custom styles ✨
import '../css/main.scss';
import '../css/utilities.scss';

// 👇 Your custom scripts here 👇
import './components/header';
import './components/counter';
import './components/preview';
import './components/modals';
import './components/loader';
import './animation';
import './datalayer';

// ⛔ DON'T DELETE NEXT LINES!
// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
  module.hot.accept();
}
