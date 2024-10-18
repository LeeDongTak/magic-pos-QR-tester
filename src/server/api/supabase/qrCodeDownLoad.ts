import { QRdataType } from '@/shared/store/qrCode';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import JSZip from 'jszip';

export const QRDownloadAllHtml2CanvasPromiseAll = async (qrData: QRdataType[]) => {
  if (qrData) {
    try {
      const startTime = window.performance.now();
      const zip = new JSZip();
      const qrCodeImg = qrData.map(async qrCode => {
        // html2canvas
        const canvas = await html2canvas(qrCode.qrRef, { scale: 2 });
        const image = canvas.toDataURL('image/png');
        return zip.file(`${qrCode.orderType}.jpg`, image.split(',')[1], { base64: true });
      });

      await Promise.all(qrCodeImg).then(() => {
        zip
          .generateAsync({ type: 'blob' })
          .then(content => {
            saveAs(content, 'QRCode');
          })
          .catch(error => {
            console.error(error);
          });
      });
      const endTime = window.performance.now();
      console.log(`html2canvas + promiseAll => ${(endTime - startTime).toFixed(2)} ms`);
    } catch (error) {
      console.error(error);
    }
  }
};
export const QRDownloadAllHtml2CanvasFor = async (qrData: QRdataType[]) => {
  if (qrData) {
    try {
      const startTime = window.performance.now();
      const zip = new JSZip();
      for (let i = 0; i < qrData.length; i++) {
        // html2canvas
        const canvas = await html2canvas(qrData[i].qrRef, { scale: 2 });
        const image = canvas.toDataURL('image/png');
        zip.file(`${qrData[i].orderType}.jpg`, image.split(',')[1], { base64: true });
      }

      zip
        .generateAsync({ type: 'blob' })
        .then(content => {
          saveAs(content, 'QRCode');
        })
        .catch(error => {
          console.error(error);
        });

      const endTime = window.performance.now();
      console.log(`html2canvas + for => ${(endTime - startTime).toFixed(2)} ms`);
    } catch (error) {
      console.error(error);
    }
  }
};

////////////////////////
export const QRDownloadAllDomToImagePromiseAll = async (qrData: QRdataType[]) => {
  if (qrData) {
    try {
      const startTime = window.performance.now();
      const zip = new JSZip();
      const qrCodeImg = qrData.map(async qrCode => {
        // domToImage
        const file = await domtoimage.toBlob(qrCode.qrRef);
        return zip.file(`${qrCode.orderType}.jpg`, file);
      });

      await Promise.all(qrCodeImg).then(() => {
        zip
          .generateAsync({ type: 'blob' })
          .then(content => {
            saveAs(content, 'QRCode');
          })
          .catch(error => {
            console.error(error);
          });
      });
      const endTime = window.performance.now();
      console.log(`DomToImage + promiseAll => ${(endTime - startTime).toFixed(2)} ms`);
    } catch (error) {
      console.error(error);
    }
  }
};
export const QRDownloadAllDomToImageFor = async (qrData: QRdataType[]) => {
  if (qrData) {
    try {
      const startTime = window.performance.now();
      const zip = new JSZip();
      for (let i = 0; i < qrData.length; i++) {
        // domToImage
        const file = await domtoimage.toBlob(qrData[i].qrRef);
        zip.file(`${qrData[i].orderType}.jpg`, file);
      }

      zip
        .generateAsync({ type: 'blob' })
        .then(content => {
          saveAs(content, 'QRCode');
        })
        .catch(error => {
          console.error(error);
        });

      const endTime = window.performance.now();
      console.log(`DomToImage + for => ${(endTime - startTime).toFixed(2)} ms`);
    } catch (error) {
      console.error(error);
    }
  }
};

///////////////////////////////////
export const QRDownloadAllCustomFeaturePromiseAll = async (qrData: QRdataType[]) => {
  if (qrData) {
    try {
      const startTime = window.performance.now();
      const zip = new JSZip();
      const qrCodeImg = qrData.map(async qrCode => {
        // custom feature
        const canvas = await domToCanvas(qrCode.qrRef);
        const image = canvas.toDataURL('image/png');
        return zip.file(`${qrCode.orderType}.jpg`, image.split(',')[1], { base64: true });
      });

      await Promise.all(qrCodeImg).then(() => {
        zip
          .generateAsync({ type: 'blob' })
          .then(content => {
            saveAs(content, 'QRCode');
          })
          .catch(error => {
            console.error(error);
          });
      });
      const endTime = window.performance.now();
      console.log(`CustomFeature + promiseAll => ${(endTime - startTime).toFixed(2)} ms`);
    } catch (error) {
      console.error(error);
    }
  }
};
export const QRDownloadAllCustomFeatureFor = async (qrData: QRdataType[]) => {
  if (qrData) {
    try {
      const startTime = window.performance.now();
      const zip = new JSZip();
      for (let i = 0; i < qrData.length; i++) {
        // custom feature
        const canvas = await domToCanvas(qrData[i].qrRef);
        const image = canvas.toDataURL('image/png');
        zip.file(`${qrData[i].orderType}.jpg`, image.split(',')[1], { base64: true });
      }

      zip
        .generateAsync({ type: 'blob' })
        .then(content => {
          saveAs(content, 'QRCode');
        })
        .catch(error => {
          console.error(error);
        });

      const endTime = window.performance.now();
      console.log(`CustomFeature + for => ${(endTime - startTime).toFixed(2)} ms`);
    } catch (error) {
      console.error(error);
    }
  }
};

const applyInlineStyles = (element: HTMLElement) => {
  const computedStyle = window.getComputedStyle(element);
  let inlineStyles = '';
  Array.from(computedStyle).forEach(key => {
    inlineStyles += `${key}: ${computedStyle.getPropertyValue(key)}; `;
  });
  element.setAttribute('style', inlineStyles);
  Array.from(element.children).forEach((child: Element) => applyInlineStyles(child as HTMLElement));
};

const removeInlineStyles = (element: HTMLElement) => {
  element.removeAttribute('style');
  Array.from(element.children).forEach(child => removeInlineStyles(child as HTMLElement));
};

const domToCanvas = (element: HTMLElement): Promise<HTMLCanvasElement> => {
  applyInlineStyles(element);
  const canvasEl = new Promise<HTMLCanvasElement>(resolve => {
    const { width, height } = element.getBoundingClientRect();
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    const svgData = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
          <foreignObject width="100%" height="100%">
            ${new XMLSerializer().serializeToString(element)}
          </foreignObject>
        </svg>
    `;
    const image = new Image();
    image.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgData);
    image.onload = () => {
      context?.drawImage(image, 0, 0);
      resolve(canvas);
    };
    removeInlineStyles(element);
  });
  return canvasEl;
};

export const QRDownload = async (qrData: QRdataType) => {
  if (qrData) {
    try {
      const file = await domtoimage.toBlob(qrData.qrRef);
      saveAs(file, `${qrData.orderType}.jpg`);
    } catch (error) {
      console.error(error);
    }
  }
};
