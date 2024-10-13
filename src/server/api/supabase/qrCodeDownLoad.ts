import { QRdataType } from '@/shared/store/qrCode';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';

// const logMemoryUsage = () => {
//   const usedJSHeap = window.performance.memory;
//   const totalJSHeap = window.performance.memory.totalJSHeapSize / 1024 / 1024;
//   const jsHeapLimit = window.performance.memory.jsHeapSizeLimit / 1024 / 1024;
//   console.log(`Used JS Heap: ${usedJSHeap.toFixed(2)} MB`);
//   console.log(`Total JS Heap: ${totalJSHeap.toFixed(2)} MB`);
//   console.log(`JS Heap Limit: ${jsHeapLimit.toFixed(2)} MB`);
//   // } else {
//   //   console.log('The browser does not support performance.memory API.');
//   // }
// };

export const QRDownloadAll = async (qrData: QRdataType[]) => {
  if (qrData) {
    try {
      const startTime = window.performance.now();
      const zip = new JSZip();
      const qrCodeImg = qrData.map(async qrCode => {
        // domToImage
        // const file = await domtoimage.toBlob(qrCode.qrRef);
        // return zip.file(`${qrCode.orderType}.jpg`, file);

        // html2canvas
        // const canvas = await html2canvas(qrCode.qrRef, { scale: 2 });
        // const image = canvas.toDataURL('image/png');
        // return zip.file(`${qrCode.orderType}.jpg`, image.split(',')[1], { base64: true });

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
      console.log(`${(endTime - startTime).toFixed(2)} ms`);
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

  element.setAttribute('style', inlineStyles); // 한 번에 적용

  Array.from(element.children).forEach((child: Element) => applyInlineStyles(child as HTMLElement));
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
