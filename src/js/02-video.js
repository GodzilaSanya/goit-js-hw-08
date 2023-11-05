import Player from '@vimeo/player';
import { saveStorage, loadStorage } from './helpers/storage';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (currentTime) {
    saveStorage('videoplayer-current-time', currentTime.seconds);
  }, 1500)
);

if (loadStorage('videoplayer-current-time')) {
  player.setCurrentTime(loadStorage('videoplayer-current-time'));
}
