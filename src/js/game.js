import '../css/style.css'
import { Actor, Engine, Vector, Loader, Font, Text, Rectangle, Color, GraphicsGroup, Direction, BaseAlign, TextAlign, vec, Label } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Tower } from './tower.js'
import { Town } from './town.js'
import { Hero } from './hero.js'


export class Game extends Engine {

    heroes = []

    constructor() {
        super({ width: 800, height: 600, pixelArt: true, maxFps: 30 })
        this.start(ResourceLoader).then(() => this.startGame())
        const town = new Town(this)
        this.add('town', town)

        const tower = new Tower(this)
        this.add('tower', tower)
    }

    startGame() {
        this.goToScene('town')
    }

    summonHero() {
        console.log('drawing hero')
        const hero = new Hero(this)
        this.add(hero)
        console.log(hero)

        this.heroes.push(hero)
    }
}

new Game()