import '../css/style.css'
import { Actor, Engine, Vector, Loader, Font, Text, Rectangle, Color, GraphicsGroup, Direction, BaseAlign, TextAlign, vec, Label } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Tower } from './tower.js'
import { Town } from './town.js'


export class Game extends Engine {
    constructor() {
        super({ width: 800, height: 600, pixelArt: true, maxFps: 30 })
        this.start(ResourceLoader).then(() => this.startGame())
        const town = new Town()
        this.add('town', town)
        this.goToScene('town')
    }



    startGame() {
        



        // const hero = new Actor()
        // hero.graphics.use(Resources.Hero.toSprite())
        // hero.pos = new Vector(400, 300)
        // hero.scale = new Vector(4, 4)
        // this.add(hero)

        // const button = new Label({
        //     text: "Start Game",
        //     width: 200,
        //     height: 50,
        //     pos: new Vector(400, 400),
        //     anchor: new Vector(0.5, 0.5),
        //     color: Color.White,
        //     font: new Font(
        //         {
        //             size: 32,
        //             baseAlign: BaseAlign.Middle,
        //             textAlign: TextAlign.Center
        //         })
        // });

        // button.on('pointerdown', () => {
        //     // change scene
        //     console.log('button clicked')
        //     const tower = new Tower()
        //     this.add('tower', tower)
        //     this.goToScene('tower')
        // })

        // this.add(button)
    }
}

new Game()
