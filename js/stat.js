'use strict';

const CLOUD_HEIGHT = 270;
const CLOUD_WIDTH = 420;
const CLOUD_Y = 10;
const CLOUD_X = 100;
const GAP = 10;
const BAR_WIDTH = 40;
const BAR_GAP = 50;
const BAR_Y = 250;
const BAR_X = 150;
const BAR_HEIGHT = 150;

// Рисуем облако
const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Текст в облаке
const writeText = function (ctx) {
  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + GAP * 2, BAR_GAP - GAP);
  ctx.fillText(`Список результатов:`, CLOUD_X + GAP * 2, BAR_GAP + GAP);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );
  writeText(ctx);

  ctx.fillStyle = `#000`;

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    ctx.fillStyle = `#000`;
    ctx.fillText(
        names[i],
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        BAR_Y + GAP
    );
    let getRandomSaturation = Math.random().toFixed(2) * 100;
    if (names[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = `hsl(240,` + getRandomSaturation + `%, 50%)`;
    }
    ctx.fillRect(
        BAR_X + (BAR_WIDTH + BAR_GAP) * i,
        BAR_Y - GAP,
        BAR_WIDTH,
        -(BAR_HEIGHT * times[i]) / maxTime);
    let round = Math.round(times[i]);
    ctx.fillStyle = `#000`;
    ctx.fillText(
        round,
        BAR_X + (BAR_WIDTH + BAR_GAP) * i,
        BAR_Y - ((BAR_HEIGHT * times[i]) / maxTime) - GAP * 2);
  }
};
