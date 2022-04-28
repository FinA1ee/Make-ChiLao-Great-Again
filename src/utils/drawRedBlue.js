const Colors = Object.freeze({
  red: 'rgb(255 ,0, 0)',
  blue: 'rgb(0 ,0, 255)',
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)'
});

const drawText = (ctx, input, color, x, y) => {
  ctx.font = "80px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  const { width } = ctx.measureText(input);
  console.log(y)
  ctx.fillStyle = color;
  ctx.fillRect(x, y, x + width, 100);

  ctx.fillStyle = Colors.white;
  ctx.fillText(input, x, y);
  return y;
}


const drawCanvas = (inputContent, width, height) => {
  console.log("Drawing canvas using: ", inputContent);
  const inputArr = inputContent.split(' ');
  if (!inputArr || inputArr.length !== 5) {
    throw '同学，请输入规范的5行赤佬体。'
  }
  console.log(inputArr);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d', { alpha: false });

  // 填充背景
  ctx.fillStyle = Colors.white;
  ctx.fillRect(0, 0, width, height);

  // 绘制文字
  let color = Colors.red;
  let y = 0;
  for (const input of inputArr) {
    drawText(ctx, input, color, 0, y);
    if (color === Colors.red) color = Colors.blue
    else if (color === Colors.blue) color = Colors.red
    y += 100;
  }
  
  return canvas.toDataURL();
}

const generateImg = (inputContent) => {
  const width = 600;
  const height = 600;
  return drawCanvas(inputContent, width, height);
}

module.exports = generateImg;


// 别他妈了隔壁 念你那通稿 谁不会啊 能不能开个麦啊 赤佬