import '../css/style.css'
import { Actor, Engine, Vector, Loader } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { TiledResource } from '@excaliburjs/plugin-tiled';


export class Game extends Engine {

    tiledMap

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }
    
    
    
    startGame() {
        // console.log(this.tiledMap, loader)
        // this.tiledMap.addToScene(this.currentScene);

        console.log("start de game!")
        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(400, 300)
        fish.vel = new Vector(-10,0)
        this.add(fish)


        const bg = new Actor()
        // bg.graphics.use(Resources.Background.toSprite())
        // this.add(bg)
        // this.tiledMap.graphics.use(Resources.sample.getTileMap())
        // tiledMap.addToScene(this.currentScene);

        // const background = new Actor()
        // background.graphics.use(Resources.Background.getTileMap())
        // background.pos = new Vector(0, 0)
        // this.add(background)
        
        // tiledMapResource.addToScene(this.currentScene);
        // this.currentScene.camera.zoom = 2;

        // for (let tile of tilemap.tiles) {
        //     const sprite = IsoDungeonSpriteSheet.getSprite(0, 0);
        //     if (sprite) {
        //         tile.addGraphic(sprite);
        //     }
        // }
    }
}

new Game()
