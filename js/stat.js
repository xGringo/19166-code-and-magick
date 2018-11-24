'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_SHADOW_OFFSET = 10;
  var GAP = 30;
  var FONT = '16px "PT Mono"';
  var TEXT_HEIGHT = 20;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var createHeaderText = function (ctx) {
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
    ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + TEXT_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  var createHistograms = function (ctx, names, times) {
    var BAR_HEIGHT = 150;
    var BAR_WIDTH = 40;
    var BAR_GAP = 50;
    var columnMaxHeight = BAR_HEIGHT - TEXT_HEIGHT;
    var cloudTitleHeight = CLOUD_Y + GAP + TEXT_HEIGHT * 2;

    for (var i = 0; i < names.length; i++) {
      var columnHeight = (columnMaxHeight * times[i]) / getMaxElement(times);
      var columnPosX = CLOUD_X + GAP * 2 + (BAR_WIDTH + BAR_GAP) * i;
      var timePosY = cloudTitleHeight + 10 + (columnMaxHeight - columnHeight);
      var columnPosY = cloudTitleHeight + TEXT_HEIGHT + (columnMaxHeight - columnHeight);
      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(times[i]), columnPosX, timePosY);
      ctx.fillText(names[i], columnPosX, CLOUD_Y + CLOUD_HEIGHT - GAP);
      ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random().toFixed(3) + ')';
      ctx.fillRect(columnPosX, columnPosY, BAR_WIDTH, columnHeight);
    }
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_SHADOW_OFFSET, CLOUD_Y + CLOUD_SHADOW_OFFSET, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    ctx.fillStyle = '#000';
    ctx.font = FONT;
    createHeaderText(ctx);
    createHistograms(ctx, names, times);
  };
})();
