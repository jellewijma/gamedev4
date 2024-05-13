import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import * as tiled from '@excaliburjs/plugin-tiled';

// import level1 from '../../public/assets/tilemap/Sample.tmx'


const Resources = {
    Fish: new ImageSource('images/fish.png'),
    // Background: new tiled.TiledResource('assets/tilemap/Sample.tmx'),
    sample: new tiled.TiledResource('images/Sample.tmx')
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.sample
])

export { Resources, ResourceLoader }