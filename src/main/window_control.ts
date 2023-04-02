import { BrowserWindow } from 'electron';

export default class WindowController {
  mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  mountWindowListener(): void {
    this.mainWindow.on('focus', () => {
      console.log('窗口正在被focus');
    });

    // 窗口在失去焦点时，需要清空全部输入内容并隐藏
    this.mainWindow.on('blur', () => {
      console.log('窗口已经在被blur');
      // this.mainWindow.hide();
    });
  }
}
