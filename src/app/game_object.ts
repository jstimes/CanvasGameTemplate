import { Point } from 'src/app/math/point';
import { Grid } from 'src/app/grid';

export class GameObject {
    readonly color = '#e34055';
    tileCoords: Point;

    constructor(tileCoords: Point) {
        this.tileCoords = tileCoords;
    }

    update(elapsedMs: number) {
        // No-op
    }

    render(context: CanvasRenderingContext2D): void {
        const tileCanvasTopLeft = Grid.getCanvasFromTileCoords(this.tileCoords);
        context.fillStyle = this.color;
        context.fillRect(tileCanvasTopLeft.x, tileCanvasTopLeft.y, Grid.TILE_SIZE, Grid.TILE_SIZE);
    }
}