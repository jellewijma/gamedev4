import { ImageSource, Sound, Resource, Loader, Sprite } from 'excalibur'
import { SpriteFusionResource } from '@excaliburjs/plugin-spritefusion'
import { AsepriteResource } from '@excaliburjs/plugin-aseprite'

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
        mapPath: './map/town2/map.json',
        spritesheetPath: './map/town2/spritesheet.png'
    }),
    Tower: new SpriteFusionResource({
        mapPath: './map/tower2/map.json',
        spritesheetPath: './map/tower2/spritesheet.png'
    }),
    Sword: new ImageSource('images/sword.png'),
    Warrior: new AsepriteResource('images/warrior/Warrior_Blue.json'),
    Goblin: new AsepriteResource('images/goblin/Torch_Red.json'),
}

console.log(Resources)
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Hero,
    Resources.Enemy,
    Resources.TileMap,
    Resources.Town,
    Resources.Tower,
    Resources.Sword,
    Resources.Warrior,
    Resources.Goblin
])

export { Resources, ResourceLoader }