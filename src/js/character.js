import '../css/style.css'
import { Actor, Engine, Vector, Loader, Font, Text, Rectangle, Color, GraphicsGroup, Direction, BaseAlign, TextAlign, vec, Scene, Random, Label } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


class Character extends Actor {
    health = 100
    baseHealth = 100
    attack = 10
    defense = 5
    speed = 5
    level = 1


    constructor() {
        super()
    }


    Attack() {
        console.log('attacking')
    }

    Train() {
        console.log('training')
    }

}
export { Character }