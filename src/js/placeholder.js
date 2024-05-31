import { Actor, CollisionType, Shape, PolygonCollider, vec } from "excalibur"


class Placeholder extends Actor {
    type
    shape
    colliderShape
    constructor(type, shape) {
        super();
        this.type = type;
        this.shape = shape;
        this.createHitBox();
    }

    createHitBox() {
        switch (this.type) {
            case 'Active':
                this.body.collisionType = CollisionType.Active;
                break;
            case 'Passive':
                this.body.collisionType = CollisionType.Passive;
                break;
            case 'Fixed':
                this.body.collisionType = CollisionType.Fixed;
                break;
            default:
                break;
        }

        switch (this.shape) {
            case 'square':
                this.colliderShape = Shape.Box(64, 64);
                break;
            case 'cross':
                this.colliderShape = new PolygonCollider({
                    points: [vec(32, 32), vec(96, 32), vec(96, -32), vec(32, -32), vec(32, -96), vec(-32, -96), vec(-32, -32), vec(-96, -32), vec(-96, 32), vec(-32, 32), vec(-32, 96), vec(32, 96)]
                });
                break;
            case 'rectangle':
                this.colliderShape = Shape.Box(128, 64);
                break;
            default:
                break;
        }
        this.collider.set(this.colliderShape);
    }

    onCollisionStart() {
        // console.log('collision')
        // console.log(this)
    }

}

export { Placeholder }