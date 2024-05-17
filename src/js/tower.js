import '../css/style.css'
import { Actor, Engine, Vector, Loader, Font, Text, Rectangle, Color, GraphicsGroup, Direction, BaseAlign, TextAlign, vec, Scene, Random, Label } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Town } from './town.js'
import { Enemy } from './enemy.js'


class Tower extends Scene {
    game
    hero
    button
    level = 1
    battle = false
    characters = []
    enemy

    rand = new Random(1234)
    // town
    constructor(game) {
        super()
        console.log('Tower scene created')

        this.game = game
    }

    onInitialize() {
        // hero = new Actor()
        this.enemy = new Enemy(this.game)
    }


    onActivate() {
        Resources.Tower.addToScene(this.game.currentScene)



        this.hero = this.game.heroes[0]
        this.hero.pos = new Vector(56, 128)
        this.add(this.hero)


        this.enemy.graphics.use(Resources.Enemy.toSprite())
        this.enemy.pos = new Vector(88, 128)
        this.add(this.enemy)

        // get all heroes and enemies in a array sorted by speed
        this.characters = [this.hero, this.enemy]

        this.characters.forEach(character => {
            if (character.type == 'hero') {
                // select closest enemy
                character.enemy = this.enemy
            } else {
                // select closest hero
                character.enemy = this.hero
            }
        })

        this.button = new Label({
            text: "Fight!",
            width: 20,
            height: 5,
            z: 100,
            pos: new Vector(72, 200),
            anchor: new Vector(0.5, 0.5),
            color: Color.White,
            font: new Font(
                {
                    size: 8,
                    baseAlign: BaseAlign.Middle,
                    textAlign: TextAlign.Center
                })
        });
        this.button.on('pointerdown', () => {
            this.battle = true
        })

        this.add(this.button)
    }


    afterBattle(message) {
        this.battle = false
        // remove old button
        this.remove(this.button)

        const messageLable = new Label({
            text: message,
            width: 20,
            height: 5,
            z: 100,
            pos: new Vector(72, 100),
            anchor: new Vector(0.5, 0.5),
            color: Color.White,
            font: new Font(
                {
                    size: 8,
                    baseAlign: BaseAlign.Middle,
                    textAlign: TextAlign.Center
                })
        });
        this.add(messageLable)

        console.log('after battle')
        // get button and set it to go back to previous scene
        const button = new Label({
            text: "Go back to Town",
            width: 20,
            height: 5,
            z: 100,
            pos: new Vector(72, 200),
            anchor: new Vector(0.5, 0.5),
            color: Color.White,
            font: new Font(
                {
                    size: 8,
                    baseAlign: BaseAlign.Middle,
                    textAlign: TextAlign.Center
                })
        });
        button.on('pointerdown', () => {
            this.game.goToScene('town')
            this.remove(button)
            console.log('back to game')
            this.remove(message)
            this.remove(messageLable)
            this.enemy.health = this.enemy.baseHealth
            this.hero.health = this.hero.baseHealth
        })

        this.add(button)
    }

    onPostUpdate() {
        if (this.battle == true) {
            this.characters.forEach(character => {
                if (character.enemyDist < 20) {
                    character.Attack(this)
                } else {
                    character.Move()
                }
            })
        }
    }
}




export { Tower }