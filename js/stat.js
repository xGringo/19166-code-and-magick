'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов: ', 120, 60);

  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time.toFixed(0);
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / max;

  for (var i = 0; i < times.length; i++) {
    ctx.fillRect(120 + 90 * i, 245 - times[i] * step, 40, times[i] * step);
    ctx.fillText(names[i], 120 + 90 * i, 245 + 20);
    ctx.fillText(times[i].toFixed(0), 120 + 90 * i, 245 - times[i] * step - 15);
    }
};
