import '../css/style.css'
import { Actor, Engine, Vector, Loader, Font, Text, Rectangle, Color, GraphicsGroup, Direction, BaseAlign, TextAlign, vec, Scene, Random, Label, CollisionType, Shape } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Character } from './character.js'
// import { Placeholder } from './placeholder.js'


class Enemy extends Character {
    experience = 0
    rarity = ''
    name = 'Enemy'
    type = 'enemy'
    enemy
    enemyDist

    healthBar
    HBbg

    attackStopper = 180

    game

    bodyCollider
    inRange = false

    constructor(game) {
        super()
        const goblinAnim = Resources.Goblin.getAnimation('Idle')
        // console.log(goblinAnim)
        // @ts-ignore
        this.graphics.use(goblinAnim)
        this.pos = new Vector(72, 128)

        // distribute stats based on rarity
        if (this.rarity == 'common') {
            this.health = 5
            this.baseHealth = 5
            this.attack = 10
            this.defense = 5
            this.speed = 5
        } else if (this.rarity == 'boss') {
            this.health = 10
            this.baseHealth = 10
            this.attack = 20
            this.defense = 14
            this.speed = 3
        }
        this.game = game

        this.z = 10

        this.collisionType = CollisionType.Active
        // this.colliderShape = Shape.Box(64, 64);

        // this.setupCustomHitbox()

        this.on('collisionstart', (e) => {
            console.log(e)
            if (e.other.name === 'Hero') {
                this.inRange = true;
            }
        })
    }

    getTowerLvl() {
        // console.log(this.game.currentScene)
        // var level = this.game.currentScene.level
        if (this.game.currentScene.level / 10 == 0) {
            this.rarity = 'boss'
        } else {
            this.rarity = 'common'
        }
        return this.rarity
    }

    Attack(Tower) {
        if (this.attackStopper > 0) {
            this.attackStopper -= this.speed
        } else {
            console.log('attacking')
            this.enemy.health -= this.attack
            this.attackStopper = 180
            // this.enemy.healthBar.width = 1
        }

        // if heor health is 0 remove enemy
        if (this.enemy.health <= 0) {
            console.log('Hero defeated')
            this.game.currentScene.remove(this.enemy)
            // check if there are any enemies left
            // else afterBattle()
            Tower.afterBattle('Hero defeated')
            this.inRange = false;
        }
    }

    Move() {
        const direction = this.enemy.pos.sub(this.pos).normalize();
        const distance = 3;
        this.vel = direction.scale(distance); // Update the velocity instead of modifying the position directly
        this.enemyDist = this.pos.distance(this.enemy.pos);
        this.pos = this.pos.add(this.vel); // Update the position based on the velocity
    }

    Train() {
        console.log('training')
    }

    HealthBar() {
        if (this.healthBar != undefined) {

            this.removeChild(this.healthBar)
            this.removeChild(this.HBbg)
        }

        this.HBbg = new Actor({
            width: 32,
            height: 4,
            x: 0,
            y: -32,
            color: Color.Black
        })

        // create a health bar
        this.healthBar = new Actor({
            width: this.health / this.baseHealth * 32,
            height: 4,
            x: -16,
            y: -32,
            color: Color.Red,
            anchor: vec(0, 0.5)
        })
        this.addChild(this.HBbg)
        this.addChild(this.healthBar)

    }

    onPostUpdate() {
        // update health bar
        // this.HealthBar()
    }

    fight() {
        if (this.inRange) {
            this.Attack(this.game.currentScene);
        } else {
            this.Move();
        }
    }

    // setupCustomHitbox() {
    //     // const customHitbox = Shape.Box(64, 64);
    //     // this.collider.set(customHitbox);
    //     // this.bodyCollider = new Placeholder('Fixed', 'square');
    //     // this.viewRange = new Placeholder('Passive', 'cross');
    //     // this.addChild(this.bodyCollider);
    //     // this.addChild(this.viewRange);   
    // }

}
export { Enemy }