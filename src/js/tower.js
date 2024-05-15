import '../css/style.css'
import { Actor, Engine, Vector, Loader, Font, Text, Rectangle, Color, GraphicsGroup, Direction, BaseAlign, TextAlign, vec, Scene, Random, Label } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Town } from './town.js'


class Tower extends Scene {
    game
    hero
    button

    rand = new Random(1234)
    // town
    constructor(game) {
        super()
        console.log('Tower scene created')

        this.game = game
    }

    onInitialize() { }

    // hero = new Actor()
    enemy = new Actor()

    onActivate() {
        Resources.Tower.addToScene(this.game.currentScene)

        this.hero = this.game.heroes[0]
        this.hero.pos = new Vector(56, 128)
        this.add(this.hero)


        this.enemy.graphics.use(Resources.Enemy.toSprite())
        this.enemy.pos = new Vector(88, 128)
        this.add(this.enemy)


        this.button = new Label({
            text: "Fight!",
            width: 200,
            height: 50,
            pos: new Vector(400, 400),
            anchor: new Vector(0.5, 0.5),
            color: Color.White,
            font: new Font(
                {
                    size: 32,
                    baseAlign: BaseAlign.Middle,
                    textAlign: TextAlign.Center
                })
        });
        this.button.on('pointerdown', () => {
            this.attack()
        })

        this.add(this.button)
    }

    attack() {
        console.log('attacking')
        // move hero and enemy towards each other
        // hero.pos.x += 10
        this.hero.pos.x += 20
        this.enemy.pos.x -= 20

        // do a 50/50 of winning

        var are_you_winning_son = this.rand.bool()
        console.log(are_you_winning_son)
        // if hero wins
        // remove enemy

        var i
        for (i = 0; i < 100; i++) {
            var are_you_winning_son = this.rand.bool()
            console.log(are_you_winning_son)
        }


        if (are_you_winning_son) {
            console.log('hero wins')
            this.remove(this.enemy)

            setTimeout(() => {
                const content = new Text({
                    text: "Hero wins", font: new Font({ size: 32 })
                });
                const message = new Actor()
                message.pos = new Vector(400, 200)
                message.graphics.use(content)
                this.add(message)
                this.afterBatle(message)
            }, 500);
        }
        // if enemy wins
        // remove hero
        if (!are_you_winning_son) {
            console.log('enemy wins')
            this.remove(this.hero)

            setTimeout(() => {
                const content = new Text({
                    text: "Enemy wins", font: new Font({ size: 32 })
                });
                const message = new Actor()
                message.pos = new Vector(400, 200)
                message.graphics.use(content)
                this.add(message)
                this.afterBatle(message)
            }, 500);
        }

        // go back to previous scene

    }

    afterBatle(message) {
        // remove old button
        this.remove(this.button)

        console.log('after battle')
        // get button and set it to go back to previous scene
        const button = new Label({
            text: "Go back to Town",
            width: 200,
            height: 50,
            pos: new Vector(400, 400),
            anchor: new Vector(0.5, 0.5),
            color: Color.White,
            font: new Font(
                {
                    size: 32,
                    baseAlign: BaseAlign.Middle,
                    textAlign: TextAlign.Center
                })
        });
        button.on('pointerdown', () => {
            this.game.goToScene('town')
            this.remove(button)
            console.log('back to game')
            this.remove(message)
        })

        this.add(button)
    }
}




export { Tower }