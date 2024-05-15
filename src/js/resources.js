import { ImageSource, Sound, Resource, Loader, Sprite } from 'excalibur'
import { SpriteFusionResource } from '@excaliburjs/plugin-spritefusion'

const Resources = {
    TileMap: new ImageSource('images/tilemap_packed.png'),
    Fish: new ImageSource('images/fish.png'),
    Hero: new ImageSource('images/hero.png'),
    Enemy: new ImageSource('images/enemy.png'),
    CommonNames: ['Jonald', 'Jaina', 'Baelon', 'Aelis', 'Charlan', 'Emmalyn', 'Ollivander', 'Sophronia', 'Mirabelle', 'Lucian'],
    RareNames: ['Aerendyl', 'Thalassius', 'Elyssandra', 'Morvain', 'Seraphiel', 'Drystan', 'Elowyn', 'Thalwynn', 'Isolindra', 'Galadron'],
    EpicNames: ['Valarian the Brave', 'Elowyn Stormblade', 'Draven Darkheart', 'Aeliana Silvermoon', 'Ragnar Ironfist', 'Seraphina Dawnbringer', 'Galadriel Starfire', 'Thorne Shadowalker', 'Isolde Frostbane', 'Aric Blackthorn'],
    LegendaryNames: ['Eldritch the Everlasting', 'Morgana Shadowweaver', 'Aurelius the Undying', 'Celestia Dawnbringer', 'Azrael the Eternal', 'Seraphiel the Radiant', 'Morwynn the Enchanter', 'Drakonius the Dreaded', 'Thalassa the Tempestuous', 'Vaelastrasz the Unyielding'],
    Town: new SpriteFusionResource({
        mapPath: './map/town/map.json',
        spritesheetPath: './map/town/spritesheet.png'
    }),
    Tower: new SpriteFusionResource({
        mapPath: './map/tower/map.json',
        spritesheetPath: './map/tower/spritesheet.png'
    }),
}

console.log(Resources)
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Hero,
    Resources.Enemy,
    Resources.TileMap,
    Resources.Town,
    Resources.Tower
])

export { Resources, ResourceLoader }