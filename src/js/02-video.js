import Player from '@vimeo/player';
import { saveStorage, loadStorage } from './helpers/storage';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// встановлення таймштампу з сховища при завантаженні вікна
window.addEventListener('load', function () {
  if (loadStorage('videoplayer-current-time')) {
    player.setCurrentTime(loadStorage('videoplayer-current-time'));
  }
});
//збереження таймштампу в сховище
player.on(
  'timeupdate',
  throttle(function (currentTime) {
    saveStorage('videoplayer-current-time', currentTime.seconds);
  }, 1500)
);
