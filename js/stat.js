'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx, names, times) {
    renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, 100, 10, '#fff');
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);

    ctx.fillText(names[0], 110, 75);
    ctx.fillRect(160, 60, 430, 20);

    ctx.fillText(names[1], 110, 105);
    ctx.fillRect(160, 90, 430, 20);

    ctx.fillText(names[2], 110, 135);
    ctx.fillRect(160, 120, 430, 20);

    ctx.fillText(names[3], 110, 165);
    ctx.fillRect(160, 150, 430, 20);
}