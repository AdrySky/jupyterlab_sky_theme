import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_sky_theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_sky_theme',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab_sky_theme is activated!');
    const style = 'jupyterlab_sky_theme/index.css';

    manager.register({
      name: 'JupyterLab Sky',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });

  //   let head = document.head || document.getElementsByTagName('head')[0];

  //   function changeFavicon(src: string) {
  //     let link = document.createElement('link'),
  //      oldLink = document.getElementById('dynamic-favicon');
  //     link.id = 'dynamic-favicon';
  //     link.rel = 'icon';
  //     link.type = 'image/x-icon';
  //     link.href = src;
  //     if (oldLink) {
  //       head.removeChild(oldLink);
  //     }
  //       head.appendChild(link);
  //   }
  // changeFavicon('file:///C:/Users/user/jupyterlab_sky_theme/style/images/cloud.svg');
  // changeFavicon('http://www.google.com/favicon.ico');
  // changeFavicon('https://stackoverflow.com/favicon.ico');
  }
};

export default extension;
