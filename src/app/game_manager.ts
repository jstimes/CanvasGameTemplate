import { RENDER_SETTINGS } from 'src/app/render_settings';
import { Grid } from 'src/app/grid';
import { Point } from 'src/app/math/point';
import { GameObject } from 'src/app/game_object';
import { CONTROLS, ControlMap, EventType, Key } from 'src/app/controls';
import { GameStateManager } from 'src/app/game_state_manager';
import { ParticleSystem, ParticleShape } from './particle_system';


const BACKGROUND_COLOR = '#959aa3';
const GRID_COLOR = '#1560e8';
const HOVERED_TILE_COLOR = '#f7c25e';

export class GameManager implements GameStateManager {

    private readonly canvas: HTMLCanvasElement;
    private readonly context: CanvasRenderingContext2D;
    private readonly onExitGameCallback: () => void;

    private gameObjects: GameObject[];
    private particleSystems: ParticleSystem[];
    private controlMap: ControlMap;

    constructor(
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D,
        onExitGameCallback: () => void) {

        this.canvas = canvas;
        this.context = context;
        this.onExitGameCallback = onExitGameCallback;
        this.resetGame();
    }

    update(elapsedMs: number): void {
        this.controlMap.check();
        if (CONTROLS.hasClick()) {
            const clickCoords = CONTROLS.handleClick();
            const mouseTileCoords = Grid.getTileFromCanvasCoords(clickCoords);
            const gameObject = new GameObject(mouseTileCoords);
            this.gameObjects.push(gameObject);
            this.initNewRandomParticleSystem(clickCoords);
        }
        for (const gameObject of this.gameObjects) {
            gameObject.update(elapsedMs);
        }
        for (const particleSystem of this.particleSystems) {
            particleSystem.update(elapsedMs);
        }
        this.particleSystems = this.particleSystems
            .filter((particleSystem) => particleSystem.isAlive);
    }

    render(): void {
        const context = this.context;
        context.fillStyle = BACKGROUND_COLOR;
        context.clearRect(
            0, 0,
            RENDER_SETTINGS.canvasWidth, RENDER_SETTINGS.canvasHeight);
        context.fillRect(
            0, 0,
            RENDER_SETTINGS.canvasWidth, RENDER_SETTINGS.canvasHeight);

        // Draw grid lines.
        for (let i = 0; i < Grid.TILES_WIDE; i++) {
            const startX = i * Grid.TILE_SIZE;
            const endX = startX;
            const startY = 0;
            const endY = RENDER_SETTINGS.canvasHeight;

            context.beginPath();
            context.strokeStyle = GRID_COLOR;
            context.moveTo(startX, startY);
            context.lineTo(endX, endY);
            context.stroke();
        }
        for (let i = 0; i < Grid.TILES_TALL; i++) {
            const startX = 0;
            const endX = RENDER_SETTINGS.canvasWidth;
            const startY = i * Grid.TILE_SIZE;
            const endY = startY;

            context.beginPath();
            context.strokeStyle = GRID_COLOR;
            context.moveTo(startX, startY);
            context.lineTo(endX, endY);
            context.stroke();
        }

        // Indicate hovered tile.
        const mouseTileCoords = Grid.getTileFromCanvasCoords(CONTROLS.getMouseCanvasCoords());
        const tileCanvasTopLeft = Grid.getCanvasFromTileCoords(mouseTileCoords);
        context.fillStyle = HOVERED_TILE_COLOR;
        context.fillRect(tileCanvasTopLeft.x, tileCanvasTopLeft.y, Grid.TILE_SIZE, Grid.TILE_SIZE);

        for (const gameObject of this.gameObjects) {
            gameObject.render(context);
        }
        for (const particleSystem of this.particleSystems) {
            particleSystem.render(context);
        }
    }

    destroy(): void {
        if (this.controlMap) {
            this.controlMap.clear();
        }
    }

    private resetGame = (): void => {
        this.destroy();
        this.gameObjects = [];
        this.particleSystems = [];
        this.controlMap = new ControlMap();
        this.controlMap.add({
            key: Key.Q,
            name: 'Quit',
            func: this.onExitGameCallback,
            eventType: EventType.KeyPress,
        });
        this.controlMap.add({
            key: Key.R,
            name: 'Reset',
            func: this.resetGame,
            eventType: EventType.KeyPress,
        });
    }

    private initNewRandomParticleSystem(startPositionCanvas: Point): void {
        let shape = ParticleShape.CIRCLE;
        const random = Math.random();
        if (random > .75) {
            shape = ParticleShape.PLUS
        } else if (random > .5) {
            shape = ParticleShape.ELLIPSE;
        } else if (random > .25) {
            shape = ParticleShape.LINE;
        }
        const particleSystem = new ParticleSystem({
            startPositionCanvas,
            particleCount: 24,
            colorA: '#00FF00',
            colorB: '#0000FF',
            shape,
            minParticleSpeed: .005 * Grid.TILE_SIZE,
            maxParticleSpeed: .01 * Grid.TILE_SIZE,
            minLifetimeMs: 600,
            maxLifetimeMs: 800,
            minRadius: .07 * Grid.TILE_SIZE,
            maxRadius: .12 * Grid.TILE_SIZE,
        });
        this.particleSystems.push(particleSystem);
    }
}
