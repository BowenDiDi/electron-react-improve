import { clipboard } from 'electron';

export default class ClipboardObserver {
  //  定时器
  timer: ReturnType<typeof setInterval> | null = null;

  //  变动前的文本（用于比照新获取的剪贴板文本）
  beforeText: string = '';

  //  变动去的图片（用于比照新获取的剪贴板图片）
  // beforeImage: NativeImage;

  duration = 500;

  setTimer(): void {
    //  设置定时器
    this.timer = setInterval(() => {
      // if (this.textChange) {
      //   const text = clipboard.readText();
      //   //  判断内容是否与上次读取的内容不同
      //   if (this.isDiffText(this.beforeText, text)) {
      //     //  执行变动回调
      //     this.textChange(text, this.beforeText);
      //     //  记录此次内容
      //     this.beforeText = text;
      //   }
      // }
      // if (this.imageChange) {
      //   const image = clipboard.readImage();
      //   //  判断内容是否与上次读取的内容不同
      //   if (this.isDiffImage(this.beforeImage, image)) {
      //     //  执行变动回调
      //     this.imageChange(image, this.beforeImage);
      //     //  记录此次内容
      //     this.beforeImage = image;
      //   }
      // }
    }, this.duration);
  }
}
