import '../css/style.css'
import { Actor, Engine, Vector, Loader, Font, Text, Rectangle, Color, GraphicsGroup, Direction, BaseAlign, TextAlign, vec, Scene, Random, Label, Animation, Circle, Collider, CollisionType, Shape } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Character } from './character.js'
// import { Placeholder } from './placeholder.js'

const ATTACK_STOPPER_INITIAL = 180;
const RANDOM_SEED = 1234;
const TOWN_SCENE_NAME = 'Town';
const BASE_HEALTH_COMMON = 100;
const BASE_ATTACK_COMMON = 10;
const BASE_DEFENSE_COMMON = 5;
const BASE_SPEED_COMMON = 5;

// Note: all functionality and varables are created by me and the formating was done by chatgpt

class Hero extends Character {
    experience = 0;
    rarity = '';
    name = 'Hero';
    type = 'hero';
    role = 'swordsman';
    enemy;
    enemyDist;
    attackStopper = ATTACK_STOPPER_INITIAL;
    game;
    destination;
    rand = new Random(RANDOM_SEED);
    randomX;
    randomY;
    healthBar;
    HBbg;
    Run;
    Attack_up;
    Attack_down;
    Attack_left;
    Attack_right;
    Idle;
    animation = Animation;
    bodyCollider
    viewRange
    inRange = false;

    constructor(game) {
        super();

        this.collisionType = CollisionType.Active
        // this.body = Shape.Box(64, 64);

        this.game = game;

        this.setupAnimations();
        this.pos = new Vector(288, 400);
        this.z = 10;

        this.rarity = this.getRarity();
        this.setupStatsBasedOnRarity();
        this.name = this.getName();
        // this.setupCustomHitbox();
        this.HealthBar();
        this.setRandomDestination();
        this.on('collisionstart', (e) => {
            // console.log(e)
            if (e.other.name === 'Enemy') {
                this.inRange = true;
            }
        })
    }

    setupAnimations() {
        this.Idle = Resources.Warrior.getAnimation('Idle');
        this.Idle.CollisionType = CollisionType.PreventCollision;
        this.Run = Resources.Warrior.getAnimation('Run');
        this.Run.CollisionType = CollisionType.PreventCollision;
        this.Attack_up = this.setupNonLoopingAnimation('Up');
        this.Attack_up.ColliderType = CollisionType.PreventCollision;
        this.Attack_down = this.setupNonLoopingAnimation('Down');
        this.Attack_down.ColliderType = CollisionType.PreventCollision;
        this.Attack_left = this.setupFlippedAnimation('Front', true);
        this.Attack_left.ColliderType = CollisionType.PreventCollision;
        this.Attack_right = this.setupNonLoopingAnimation('Front');
        this.Attack_right.ColliderType = CollisionType.PreventCollision;
        this.graphics.use(this.Idle);
    }

    setupNonLoopingAnimation(animationName) {
        const animation = Resources.Warrior.getAnimation(animationName);
        //@ts-ignore
        animation.loop = false;
        return animation;
    }

    setupFlippedAnimation(animationName, flipHorizontal) {
        const animation = this.setupNonLoopingAnimation(animationName);
        //@ts-ignore
        animation.flipHorizontal = flipHorizontal;
        return animation;
    }
    getRarity() {
        const rarityValue = this.rand.integer(1, 100);
        if (rarityValue <= 5) return 'legendary';
        if (rarityValue <= 15) return 'epic';
        if (rarityValue <= 40) return 'rare';
        return 'common';
    }

    setupStatsBasedOnRarity() {
        switch (this.rarity) {
            case 'common':
                this.setStats(BASE_HEALTH_COMMON, BASE_ATTACK_COMMON, BASE_DEFENSE_COMMON, BASE_SPEED_COMMON);
                break;
            case 'rare':
                this.setStats(150, 15, 7, 7);
                break;
            case 'epic':
                this.setStats(200, 20, 10, 10);
                break;
            case 'legendary':
                this.setStats(250, 25, 15, 15);
                break;
        }
    }

    setStats(health, attack, defense, speed) {
        this.health = health;
        this.baseHealth = health;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
    }

    getName() {
        switch (this.rarity) {
            case 'common':
                return Resources.CommonNames[this.rand.integer(0, Resources.CommonNames.length - 1)];
            case 'rare':
                return Resources.RareNames[this.rand.integer(0, Resources.RareNames.length - 1)];
            case 'epic':
                return Resources.EpicNames[this.rand.integer(0, Resources.EpicNames.length - 1)];
            case 'legendary':
                return Resources.LegendaryNames[this.rand.integer(0, Resources.LegendaryNames.length - 1)];
            default:
                return '';
        }
    }

    fight() {
        if (this.inRange) {
            this.Attack(this.game.currentScene);
        } else {
            this.Move();
        }
    }

    Attack(Tower) {
        // console.log('attacking');
        // console.log(this.enemy.health)
        if (this.attackStopper > 0) {
            // console.log('attack stopper')
            this.attackStopper -= this.speed;
        } else {
            // console.log('attacking1')
            this.performAttackAnimation();
            this.enemy.health -= this.attack;
            this.attackStopper = ATTACK_STOPPER_INITIAL;
            this.enemy.HealthBar();
        }

        if (this.enemy.health <= 0) {
            // check if there are any enemies left
            // if (Tower.characters.length === 5) {
            this.handleEnemyDefeat(Tower);
            this.graphics.use(this.Idle)
            this.inRange = false;
            // }
            // get new enemy
        }
    }

    performAttackAnimation() {
        if (this.enemy.pos.y < this.pos.y) this.graphics.use(this.Attack_up);
        else if (this.enemy.pos.y > this.pos.y) this.graphics.use(this.Attack_down);
        else if (this.enemy.pos.x > this.pos.x) this.graphics.use(this.Attack_right);
        else if (this.enemy.pos.x < this.pos.x) this.graphics.use(this.Attack_left);
    }

    handleEnemyDefeat(Tower) {
        // console.log('enemy defeated');
        this.game.currentScene.remove(this.enemy);
        // console.log('Enemy defeated');
        Tower.afterBattle('Enemy defeated');

    }

    Move() {
        const direction = this.enemy.pos.sub(this.pos).normalize();
        const distance = 3;
        this.vel = direction.scale(distance); // Update the velocity instead of modifying the position directly
        this.enemyDist = this.pos.distance(this.enemy.pos);
        this.pos = this.pos.add(this.vel); // Update the position based on the velocity
    }

    Train() {
        // console.log('training');
    }

    setRandomDestination() {
        this.randomX = this.rand.integer(0, 576);
        this.randomY = this.rand.integer(0, 1344);
        this.destination = new Vector(this.randomX, this.randomY);
    }

    onPostUpdate() {
        if (this.game.currentScene.name === TOWN_SCENE_NAME) {
            this.updatePositionInTown();
        } else {
            this.vel = new Vector(0, 0);
        }
        // this.HealthBar();
    }

    updatePositionInTown() {
        if (this.pos.distance(this.destination) < 5) {
            this.setRandomDestination();
        } else {
            const direction = this.destination.sub(this.pos).normalize();
            this.vel = direction.scale(75);
        }
    }

    HealthBar() {
        if (this.healthBar) {
            this.removeChild(this.healthBar);
            this.removeChild(this.HBbg);
        }

        this.HBbg = this.createHealthBarBackground();
        this.healthBar = this.createHealthBar();

        this.addChild(this.HBbg);
        this.addChild(this.healthBar);
    }

    createHealthBarBackground() {
        return new Actor({
            width: 32,
            height: 4,
            x: 0,
            y: -32,
            z: 10,
            color: Color.Black,
            collisionType: CollisionType.PreventCollision
        });
    }

    createHealthBar() {
        return new Actor({
            width: this.health / this.baseHealth * 32,
            height: 4,
            x: -16,
            y: -32,
            z: 10,
            color: Color.Red,
            anchor: vec(0, 0.5),
            collisionType: CollisionType.PreventCollision
        });
    }
}

export { Hero }
