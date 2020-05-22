import { Point } from 'src/app/math/point';
import { Grid } from 'src/app/grid';
import { Texture } from 'src/app/texture';
import WhiteDrywallTexture from 'src/assets/img/white_drywall_texture.jpg';

export class GameObject {
    private readonly texture: Texture = new Texture(WhiteDrywallTexture);
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
        context.fillRect(
            tileCanvasTopLeft.x, tileCanvasTopLeft.y,
            Grid.TILE_SIZE, Grid.TILE_SIZE);

        this.texture.tryDrawing({
            context,
            sourceX: tileCanvasTopLeft.x, sourceY: tileCanvasTopLeft.y,
            sourceWidth: Grid.TILE_SIZE, sourceHeight: Grid.TILE_SIZE,
            canvasX: tileCanvasTopLeft.x, canvasY: tileCanvasTopLeft.y,
            canvasWidth: Grid.TILE_SIZE,
            canvasHeight: Grid.TILE_SIZE,
        });
    }
}