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

  for (var i = 0; i < times.length; i++) {
    var histogramHeight = 150;
    var step = histogramHeight / max;
    var columnHeight = times[i] * step;
    var columnWidth = 40;
    var initialX = 120;
    var initialY = 245;
    var indent = 90;
    var indentName = 20;
    var indentTime = 15;
    ctx.fillStyle = columnColor(names[i]);
    ctx.fillRect(initialX + indent * i, initialY - columnHeight, columnWidth, columnHeight);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], initialX + indent * i, initialY + indentName);
    ctx.fillText(times[i].toFixed(0), initialX + indent * i, initialY - columnHeight - indentTime);

  }
  function columnColor(namePlayer, opacity) {
    var namePlayer = names[i];
    var opacity = Math.random().toFixed(1);
    if (namePlayer === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, '+opacity+')';
    }
  }

};
