import { _decorator, Animation, CCFloat, Component, Node, Vec3, tween } from 'cc';
const { ccclass, property } = _decorator;



@ccclass('Bird')
export class Bird extends Component {
    @property({
        type: CCFloat,
        tooltip: 'how high can they fly'
    })
    public jumpHeight: number = 3.5;

    @property({
        type: CCFloat,
        tooltip: 'how long can they fly'
    })
    public jumpDuration: number = 3.5;

    public birdAnimation: Animation;
    public birdLocation: Vec3;
    public hitSomething: boolean;

    onLoad(){
        this.resetBird();

        this.birdAnimation = this.getComponent(Animation);
        

    }

    resetBird(){
        this.birdLocation = new Vec3(0,0,0);

        this.node.setPosition(this.birdLocation)
        
    }

    fly(){
        this.birdAnimation.stop();

        tween(this.node.position)
            .to(this.jumpDuration, new Vec3(this.node.position.x, this.node.position.y + this.jumpHeight, 0 ), {easing: "smooth",
                onUpdate: (target: Vec3, rotato: Number) => {
                    this.node.position = target;
                }
            })
            .start();

        this.birdAnimation.play();
    }


}


