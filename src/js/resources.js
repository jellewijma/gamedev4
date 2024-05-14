import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Hero: new ImageSource('images/hero.png'),
    Enemy: new ImageSource('images/enemy.png')
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Hero,
    Resources.Enemy
])

export { Resources, ResourceLoader }