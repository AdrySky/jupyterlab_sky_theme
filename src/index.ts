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
      name: 'jupyterlab_sky_theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
