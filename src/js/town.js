import '../css/style.css'
import { Actor, Engine, Vector, Loader, Font, Text, Rectangle, Color, GraphicsGroup, Direction, BaseAlign, TextAlign, vec, Scene, Random, Label } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Hero } from './hero.js'
import { Game } from './game.js'
import { Tower } from './tower.js'

class Town extends Scene {

    game
    name

    constructor(game) {
        super()

        this.game = game
        console.log('Town scene created')

        const summeningHeroeButton = new Label({
            text: "Summon Hero",
            width: 200,
            height: 50,
            pos: new Vector(600, 400),
            anchor: new Vector(0.5, 0.5),
            color: Color.White,
            font: new Font(
                {
                    size: 32,
                    baseAlign: BaseAlign.Middle,
                    textAlign: TextAlign.Center
                })
        });
        summeningHeroeButton.on('pointerdown', () => {
            this.game.summonHero()
        })
        this.add(summeningHeroeButton)


        const goToTowerButton = new Label({
            text: "Go to Tower",
            width: 200,
            height: 50,
            pos: new Vector(200, 400),
            anchor: new Vector(0.5, 0.5),
            color: Color.White,
            font: new Font(
                {
                    size: 32,
                    baseAlign: BaseAlign.Middle,
                    textAlign: TextAlign.Center
                })
        });
        goToTowerButton.on('pointerdown', () => {
            // const tower = new Tower(game)
            // this.game.add('tower', tower)
            this.game.goToScene('tower')
        })
        this.add(goToTowerButton)

        this.name = 'Town'
    }
}


export { Town }