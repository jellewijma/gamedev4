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
        this.game = game
    }

    onActivate() {
        Resources.Tower.addToScene(this.game.currentScene)


        this.createEnemies(this.level)
        this.getHeros()


        this.characters.forEach(character => {
            console.log(character)
            if (character.type == 'hero') {
                console.log('hero')
                const enemies = this.characters.filter(character => character.type == 'enemy')
                const closestEnemy = this.rand.pickOne(enemies)
                enemies.forEach(enemy => {
                    console.log('here')
                    if (closestEnemy.pos.distance(character.pos) <= enemy.pos.distance(character.pos)) {
                        character.enemy = enemy
                        console.log(enemy)
                    }
                });
            } else {
                const enemies = this.characters.filter(character => character.type == 'hero')
                const closestEnemy = this.rand.pickOne(enemies)
                enemies.forEach(enemy => {
                    console.log('here too')
                    console.log(enemy.pos.distance(character.pos))
                    console.log(closestEnemy.pos.distance(character.pos))
                    if (closestEnemy.pos.distance(character.pos) <= enemy.pos.distance(character.pos)) {
                        character.enemy = enemy
                        console.log(character.enemy)
                    }
                });
            }
        })

        this.button = new Label({
            text: "Fight!",
            width: 20,
            height: 5,
            z: 100,
            pos: new Vector(288, 1100),
            anchor: new Vector(0.5, 0.5),
            color: Color.White,
            font: new Font(
                {
                    size: 32,
                    baseAlign: BaseAlign.Middle,
                    textAlign: TextAlign.Center,
                    bold: true
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

        // this.hero.graphics.use(Resources.Warrior.getAnimation('Idle'))

        const messageLable = new Label({
            text: message,
            width: 20,
            height: 5,
            z: 100,
            pos: new Vector(288, 400),
            anchor: new Vector(0.5, 0.5),
            color: Color.White,
            font: new Font(
                {
                    size: 32,
                    baseAlign: BaseAlign.Middle,
                    textAlign: TextAlign.Center,
                    bold: true
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
            pos: new Vector(288, 1100),
            anchor: new Vector(0.5, 0.5),
            color: Color.White,
            font: new Font(
                {
                    size: 32,
                    baseAlign: BaseAlign.Middle,
                    textAlign: TextAlign.Center,
                    bold: true
                })
        });
        button.on('pointerdown', () => {
            this.game.goToScene('town')
            this.remove(button)
            console.log('back to game')
            this.remove(message)
            this.remove(messageLable)
            this.characters.forEach(character => {
                character.health = character.baseHealth
            })
        })

        this.add(button)
    }

    onPostUpdate() {
        if (this.battle == true) {
            this.characters.forEach(character => {
                character.fight()
            })
        }
    }

    createEnemies(level) {

        if (level % 10 == 0) {
            const enemy = new Enemy(this.game)
            enemy.health = 100 * (2 + (level / 10))
            enemy.baseHealth = 100 * (1 + (level / 10))
            enemy.attack = 10 * (2 + (level / 10))
            enemy.defense = 5 * (2 + (level / 10))
            enemy.speed = 5 * (2 + (level / 10))
            enemy.pos = new Vector(288, 300)
            // add enemy to array
            this.characters.push(enemy)
            this.add(enemy)
        } else {
            for (let i = 0; i < 1; i++) {
                const enemy = new Enemy(this.game)
                enemy.health = 100 * (1 + (level / 10))
                enemy.baseHealth = 100 * (1 + (level / 10))
                enemy.attack = 10 * (1 + (level / 10))
                enemy.defense = 5 * (1 + (level / 10))
                enemy.speed = 5 * (1 + (level / 10))
                enemy.pos = new Vector(115 * i + 57, 300)
                // add enemy to array
                this.characters.push(enemy)
                this.add(enemy)
            }
        }
    }

    getHeros() {
        this.game.heroes.forEach((hero, i) => {
            console.log(hero)
            hero.pos = new Vector(115 * i + 57, 900)
            this.characters.push(hero)
            this.add(hero)
        })
    }

}



export { Tower }