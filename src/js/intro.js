import '../css/style.css'
import { Actor, Engine, Vector, Loader, Font, Text, Rectangle, Color, GraphicsGroup, Direction, BaseAlign, TextAlign, vec, Scene, Random, Label, CollisionType, Resource } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Town } from './town.js'


class Intro extends Scene {
    bg
    game
    guide
    subText
    introText
    speachBubble

    constructor(game) {
        super()
        this.game = game
        // this.bg = Resources.Background
        this.bg = new Actor({
            x: 0,
            y: 0,
            width: 576,
            height: 1344,
            anchor: Vector.Zero
        })
        this.guide = new Actor({
            x: 200,
            y: 400,
            width: 510,
            height: 767,
            anchor: Vector.Zero
        })
        this.introText = new Label({
            x: 25,
            y: 475,
            text: 'Welcome to Pick me up Gatcha!',
            color: Color.Black,
            font: new Font({ size: 28, family: 'Arial' }),
        })
        this.speachBubble = new Actor({
            x: 0,
            y: 450,
            width: 200,
            height: 200,
            anchor: Vector.Zero
        })
    }

    onActivate() {
        var i = 0
        this.bg.graphics.add(Resources.Background.toSprite())
        this.add(this.bg)
        this.guide.graphics.add(Resources.Guide.toSprite())
        this.add(this.guide)

        this.speachBubble.graphics.add(Resources.SpeachBubble.toSprite())
        this.speachBubble.scale = vec(0.5, 0.5)
        this.add(this.speachBubble)
        this.add(this.introText)
        this.bg.on('pointerdown', () => {
            // console.log('pointerdown')
            // next text
            switch (i) {
                case 0:
                    this.introText.text = 'After exploring the dungeon,\nyou fell to the bottom of the dungeon.'
                    break;
                case 1:
                    this.introText.text = 'To escape, you need to defeat\nthe dungeon.'
                    break;
                case 2:
                    this.introText.text = 'Good luck!'
                    break;
                case 3:
                    this.game.goToScene('town')
                    break;
                default:
                    break;
            }
            i++
        })
    }

}


export { Intro }