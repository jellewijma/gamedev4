import '../css/style.css'
import { Actor, Engine, Vector, Loader, Font, Text, Rectangle, Color, GraphicsGroup, Direction, BaseAlign, TextAlign, vec, Scene, Random, Label, CollisionType, Resource } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Town } from './town.js'


class Outro extends Scene {
    bg
    game
    guide
    subText
    introText
    speachBubble

    constructor(game) {
        super()
        this.game = game
        this.bg = new Actor({
            x: 0,
            y: 0,
            width: 576,
            height: 1344,
            anchor: Vector.Zero
        })
        this.introText = new Label({
            x: 175,
            y: 475,
            text: 'You won!',
            color: Color.White,
            font: new Font({ size: 50, family: 'Arial' }),
        })
    }

    onActivate() {
        this.bg.graphics.add(Resources.Background.toSprite())
        this.add(this.bg)

        this.add(this.introText)
        this.bg.on('pointerdown', () => {
            this.game.goToScene('town')

        })
    }

}


export { Outro }