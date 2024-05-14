import '../css/style.css'
import { Actor, Engine, Vector, Loader, Font, Text, Rectangle, Color, GraphicsGroup, Direction, BaseAlign, TextAlign, vec, Scene, Random, Label } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


class Hero extends Actor {
    health = 100
    attack = 10
    defense = 5
    speed = 5
    level = 1
    experience = 0
    rarity = ''
    name = 'Hero'


    constructor() {
        super()
        this.graphics.use(Resources.Hero.toSprite())
        this.pos = new Vector(400, 300)
        this.scale = new Vector(4, 4)

        this.rarity = this.getRarity()
        // distribute stats based on rarity
        if (this.rarity == 'common') {
            this.health = 100
            this.attack = 10
            this.defense = 5
            this.speed = 5
        } else if (this.rarity == 'rare') {
            this.health = 150
            this.attack = 15
            this.defense = 7
            this.speed = 7
        } else if (this.rarity == 'epic') {
            this.health = 200
            this.attack = 20
            this.defense = 10
            this.speed = 10
        } else if (this.rarity == 'legendary') {
            this.health = 250
            this.attack = 25
            this.defense = 15
            this.speed = 15
        }
        // randomize name
        const rand = new Random(1234)
        this.name = this.getName()
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
        const rand = new Random(1234)
        var name = ''
        if (this.rarity == 'common') {
            name = Resources.CommonNames[rand.integer(0, Resources.CommonNames.length - 1)]
        } else if (this.rarity == 'rare') {
            name = Resources.RareNames[rand.integer(0, Resources.RareNames.length - 1)]
        } else if (this.rarity == 'epic') {
            name = Resources.EpicNames[rand.integer(0, Resources.EpicNames.length - 1)]
        } else if (this.rarity == 'legendary') {
            name = Resources.LegendaryNames[rand.integer(0, Resources.LegendaryNames.length - 1)]
        }
        return name
    }

    Attack() {
        console.log('attacking')
    }

    Train() {
        console.log('training')
    }
}