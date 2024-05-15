import '../css/style.css'
import { Actor, Engine, Vector, Loader, Font, Text, Rectangle, Color, GraphicsGroup, Direction, BaseAlign, TextAlign, vec, Scene, Random, Label } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Hero } from './hero.js'

class Town extends Scene {
    constructor() {
        super()
        console.log('Town scene created')

        const summeningHeroeButton = new Label({
            text: "Summon Hero",
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
        summeningHeroeButton.on('pointerdown', () => {
            this.summonHero()
        })
        this.add(summeningHeroeButton)

        this.setRandomDestination();
    }

    onPostUpdate(engine, delta) {
        if (this.pos.distance(this.destination) < 5) { // If the hero is close to the destination
            this.setRandomDestination(engine);
        } else {
            const direction = this.destination.sub(this.pos).normalize(); // Get the direction to the destination
            this.vel = direction.scale(100); // Move the hero in the direction of the destination
        }
    }

    setRandomDestination(engine) {
        const randomX = Random.between(0, engine.drawWidth);
        const randomY = Random.between(0, engine.drawHeight);
        this.destination = new Vector(randomX, randomY);
    }


    summonHero() {
        console.log('drawing hero')
        const hero = new Hero()
        this.add(hero)
        console.log(hero)
    }
}




export { Town }