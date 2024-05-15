import '../css/style.css'
import { Actor, Engine, Vector, Loader, Font, Text, Rectangle, Color, GraphicsGroup, Direction, BaseAlign, TextAlign, vec, Scene, Random, Label, ImageSource, SpriteSheet, TileMap } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

class Town extends Scene {

    game
    name

    constructor(game) {
        super()

        this.game = game
        this.game.pixelArt = true
        console.log('Town scene created')

        const summeningHeroeButton = new Label({
            text: "Summon Hero \n (1 coins)",
            width: 20,
            height: 5,
            z: 100,
            pos: new Vector(65, 50),
            anchor: new Vector(0.5, 0.5),
            color: Color.White,
            font: new Font(
                {
                    size: 8,
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
            width: 20,
            height: 5,
            z: 100,
            pos: new Vector(110, 180),
            anchor: new Vector(0.5, 0.5),
            color: Color.White,
            font: new Font(
                {
                    size: 8,
                    baseAlign: BaseAlign.Middle,
                    textAlign: TextAlign.Center
                })
        });
        goToTowerButton.on('pointerdown', () => {
            // const tower = new Tower(game)
            // this.game.add('tower', tower)
            if (this.game.heroes.length == 0) {
                alert('You need to summon a hero first!')
            } else {
                this.game.goToScene('tower')
            }
        })
        this.add(goToTowerButton)

        this.name = 'Town'

    }

    onActivate() {
        this.game.showCoins()

        this.game.heroes.forEach(hero => {
            this.add(hero)
        }
        )
        Resources.Town.addToScene(this.game.currentScene)
    }
}



export { Town }