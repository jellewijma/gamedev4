import '../css/style.css'
import { Actor, Engine, Vector, Loader, Font, Text, Rectangle, Color, GraphicsGroup, Direction, BaseAlign, TextAlign, vec, Scene, Random, Label } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


class Tower extends Scene {
    constructor() {
        super()
        console.log('Tower scene created')
    }

    hero = new Actor()
    enemy = new Actor()

    onActivate() {
        this.hero.graphics.use(Resources.Hero.toSprite())
        this.hero.pos = new Vector(350, 300)
        this.hero.scale = new Vector(4, 4)
        this.add(this.hero)


        this.enemy.graphics.use(Resources.Enemy.toSprite())
        this.enemy.pos = new Vector(450, 300)
        this.enemy.scale = new Vector(4, 4)
        this.add(this.enemy)


        const button = new Label({
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
        button.on('pointerdown', () => {
            this.attack()
        })

        this.add(button)
    }

    attack() {
        console.log('attacking')
        // move hero and enemy towards each other
        // hero.pos.x += 10
        this.hero.pos.x += 20
        this.enemy.pos.x -= 20

        // do a 50/50 of winning
        const rand = new Random(1234)
        var are_you_winning_son = rand.bool()
        console.log(are_you_winning_son)
        // if hero wins
        // remove enemy


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
                this.afterBatle()
            }, 500);
        }
        // if enemy wins
        // remove hero
        if (!are_you_winning_son) {
            console.log('enemy wins')
            this.remove(this.enemy)

            setTimeout(() => {
                const content = new Text({
                    text: "Hero wins", font: new Font({ size: 32 })
                });
                const message = new Actor()
                message.pos = new Vector(400, 200)
                message.graphics.use(content)
                this.add(message)
                this.afterBatle()
            }, 500);
        }

        // go back to previous scene

    }

    afterBatle() {
        console.log('after battle')
        // get button and set it to go back to previous scene
        const button = new Label({
            text: "Start Game",
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
            // this.goToScene('game')
            console.log('back to game')
        })

        this.add(button)
    }
}




export { Tower }