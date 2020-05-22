import { RENDER_SETTINGS } from 'src/app/render_settings';
import { CONTROLS } from 'src/app/controls';
import { GameManager } from 'src/app/game_manager';
import { StartMenu } from 'src/app/start_menu';
import { GameModeManager } from 'src/app/game_mode_manager';
import * as styles from 'src/assets/css/styles.css';


const BACKGROUND_COLOR = '#959aa3';
const GRID_COLOR = '#1560e8';
const HOVERED_TILE_COLOR = '#f7c25e';

enum GameState {
  START_MENU,
  GAME,
}

export class Main {

  private readonly canvas: HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D;
  private lastRenderTime = 0;

  private gameState: GameState = GameState.START_MENU;
  private gameStateManager?: GameModeManager

  constructor() {
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    document.body.classList.add(styles.body);
    this.canvas.setAttribute('height', `${RENDER_SETTINGS.canvasHeight}px`);
    this.canvas.setAttribute('width', `${RENDER_SETTINGS.canvasWidth}px`);
    this.context = this.canvas.getContext('2d')!;
    CONTROLS.initMouseControls(this.canvas);
    this.initStartMenu();
    window.requestAnimationFrame((timestamp: number) => {
      this.lastRenderTime = timestamp;
      this.gameLoop(timestamp);
    });
  }

  gameLoop(timestamp: number): void {
    const elapsedMs = timestamp - this.lastRenderTime;
    if (elapsedMs > RENDER_SETTINGS.msBetweenRenders) {
      this.lastRenderTime = timestamp;
      this.gameStateManager.update(elapsedMs);
      this.gameStateManager.render();
    }
    window.requestAnimationFrame((timestamp: number) => {
      this.gameLoop(timestamp);
    });
  }

  private initStartMenu(): void {
    this.gameState = GameState.START_MENU;
    this.gameStateManager = new StartMenu(
      this.canvas,
      this.context,
      {
        onPlayGame: () => {
          this.tearDownCurrentGameState();
          this.initGame();
        },
      });
  }

  private initGame(): void {
    this.gameState = GameState.GAME;
    this.gameStateManager = new GameManager(
      this.canvas,
      this.context,
      () => {
        this.tearDownCurrentGameState();
        this.initStartMenu();
      });
  }

  private tearDownCurrentGameState(): void {
    this.gameStateManager.destroy();
    this.gameStateManager = null;
  }
}

let isInitialized = false;
document.onreadystatechange = () => {
  if (document.readyState === 'complete' && !isInitialized) {
    new Main();
    isInitialized = true;
  }
}