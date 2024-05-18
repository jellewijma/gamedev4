import '../css/style.css'
import { Actor, Engine, Vector, Loader, Font, Text, Rectangle, Color, GraphicsGroup, Direction, BaseAlign, TextAlign, vec, Scene, Random, Label, Animation } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Character } from './character.js'


class Hero extends Character {
    experience = 0
    rarity = ''
    name = 'Hero'
    type = 'hero'
    enemy
    enemyDist

    attackStopper = 180

    game
    destination
    rand = new Random();
    randomX
    randomY

    healthBar
    HBbg

    Run
    Attack_up
    Attack_down
    Attack_left

    constructor(game) {
        super()


        const Idle = Resources.Warrior.getAnimation('Idle')
        this.Run = Resources.Warrior.getAnimation('Run')
        this.Attack_up = Resources.Warrior.getAnimation('Up')
        this.Attack_down = Resources.Warrior.getAnimation('Down')
        this.Attack_left = Resources.Warrior.getAnimation('Front')
        // @ts-ignore
        this.Attack_left.flipHorizontal = true
        // @ts-ignore
        const Attack_right = Resources.Warrior.getAnimation('Front')
        // @ts-ignore
        this.graphics.use(Idle)
        this.pos = new Vector(288, 400)
        this.z = 10

        this.rarity = this.getRarity()
        // distribute stats based on rarity
        if (this.rarity == 'common') {
            this.health = 100
            this.baseHealth = 100
            this.attack = 10
            this.defense = 5
            this.speed = 5
        } else if (this.rarity == 'rare') {
            this.health = 150
            this.baseHealth = 150
            this.attack = 15
            this.defense = 7
            this.speed = 7
        } else if (this.rarity == 'epic') {
            this.health = 200
            this.baseHealth = 200
            this.attack = 20
            this.defense = 10
            this.speed = 10
        } else if (this.rarity == 'legendary') {
            this.health = 250
            this.baseHealth = 250
            this.attack = 25
            this.defense = 15
            this.speed = 15
        }
        // randomize name
        const rand = new Random(1234)
        this.name = this.getName()

        this.setRandomDestination()

        this.game = game

        this.HealthBar()
    }

    getRarity() {
        const rand = new Random(1234)
        var rarity = rand.integer(1, 100)
        if (rarity <= 5) {
            this.rarity = 'legendary'
        } else if (rarity <= 15) {
            this.rarity = 'epic'
        } else if (rarity <= 40) {
            this.rarity = 'rare'
        } else {
            this.rarity = 'common'
        }
        return this.rarity
    }

    getName() {
        var name = ''
        if (this.rarity == 'common') {
            name = Resources.CommonNames[this.rand.integer(0, Resources.CommonNames.length - 1)]
        } else if (this.rarity == 'rare') {
            name = Resources.RareNames[this.rand.integer(0, Resources.RareNames.length - 1)]
        } else if (this.rarity == 'epic') {
            name = Resources.EpicNames[this.rand.integer(0, Resources.EpicNames.length - 1)]
        } else if (this.rarity == 'legendary') {
            name = Resources.LegendaryNames[this.rand.integer(0, Resources.LegendaryNames.length - 1)]
        }
        return name
    }

    Attack(Tower) {
        if (this.attackStopper > 0) {
            this.attackStopper -= this.speed
        } else {
            console.log('attacking')

            if (this.enemy.pos.y > this.pos.y) {
                // up
                // @ts-ignore
                this.graphics.use(this.Attack_up)
            }

            if (this.enemy.pos.y < this.pos.y) {
                // down
                // @ts-ignore
                this.graphics.use(this.Attack_down)
            }

            if (this.enemy.pos.x > this.pos.x) {
                // right
                // @ts-ignore
                this.graphics.use(this.Attack_right)
            }

            if (this.enemy.pos.x < this.pos.x) {
                // left
                // @ts-ignore
                this.graphics.use(this.Attack_left)
            }

            this.enemy.health -= this.attack
            this.attackStopper = 180
        }

        // if enemy health is 0 remove enemy
        if (this.enemy.health <= 0) {
            console.log('enemy defeated')
            this.game.currentScene.remove(this.enemy)
            // check if there are any enemies left
            // else afterBattle()
            Tower.afterBattle('Enemy defeated')
        }
    }

    Move() {
        // get enemy pos and move 1px towards it
        this.pos = this.pos.add(this.enemy.pos.sub(this.pos).normalize())

        this.enemyDist = this.pos.distance(this.enemy.pos)
    }

    Train() {
        console.log('training')
    }


    setRandomDestination() {
        this.randomX = this.rand.integer(0, 576);
        this.randomY = this.rand.integer(0, 1344);
        this.destination = new Vector(this.randomX, this.randomY);
    }

    onPostUpdate() {
        // console.log(this.game.currentScene.name)
        if (this.game.currentScene.name == 'Town') {
            if (this.pos.distance(this.destination) < 5) { // If the hero is close to the destination
                this.setRandomDestination();
            } else {
                const direction = this.destination.sub(this.pos).normalize(); // Get the direction to the destination
                this.vel = direction.scale(75); // Move the hero in the direction of the destination
            }
        } else {
            this.vel = new Vector(0, 0)
        }

        // update health bar
        this.HealthBar()

    }

    HealthBar() {
        if (this.healthBar != undefined) {

            this.removeChild(this.healthBar)
            this.removeChild(this.HBbg)
        }

        this.HBbg = new Actor({
            width: 16,
            height: 2,
            x: 0,
            y: -10,
            color: Color.Black
        })

        // create a health bar
        this.healthBar = new Actor({
            width: this.health / this.baseHealth * 16,
            height: 2,
            x: -8,
            y: -10,
            color: Color.Red,
            anchor: vec(0, 0.5)
        })
        this.addChild(this.HBbg)
        this.addChild(this.healthBar)

    }
}
export { Hero }