import '../css/style.css'
// @ts-ignore
import { Actor, Engine, Vector, Loader, Font, Text, Rectangle, Color, GraphicsGroup, Direction, BaseAlign, TextAlign, vec, Label, DisplayMode } from "excalibur"
// @ts-ignore
import { Resources, ResourceLoader } from './resources.js'
import { Tower } from './tower.js'
import { Town } from './town.js'
import { Hero } from './hero.js'


export class Game extends Engine {

    heroes = []
    coins

    constructor() {
        super({
            width: 144,
            height: 256,
            pixelArt: true,
            maxFps: 30,
            displayMode: DisplayMode.FitScreen,
            antialiasing: false,
            pixelRatio: 16,
        })
        this.start(ResourceLoader).then(() => this.startGame())
        const town = new Town(this)
        this.add('town', town)

        const tower = new Tower(this)
        this.add('tower', tower)

        this.coins = 1
    }

    startGame() {
        this.goToScene('town')
    }

    summonHero() {

        if (this.coins < 1) {
            return
        }
        this.coins -= 1
        console.log(this.coins)
        // update coins label

        this.currentScene.actors.forEach(actor => {
            // @ts-ignore
            if (actor.text == `Coins: ${this.coins + 1}`) {
                // @ts-ignore
                actor.text = `Coins: ${this.coins}`
            }
        })

        console.log('drawing hero')
        const hero = new Hero(this)
        this.add(hero)
        console.log(hero)

        this.heroes.push(hero)
    }

    showCoins() {
        const showCoins = new Label({
            text: `Coins: ${this.coins}`,
            width: 20,
            height: 5,
            z: 100,
            pos: new Vector(20, 10),
            anchor: new Vector(0.5, 0.5),
            color: Color.White,
            font: new Font(
                {
                    size: 8,
                    baseAlign: BaseAlign.Middle,
                    textAlign: TextAlign.Center
                })
        });
        this.add(showCoins)
    }
}

new Game()