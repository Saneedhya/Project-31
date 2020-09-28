class Plinko{
    constructor(x, y, w, h){
        var options = {
            isStatic:false
        }

        this.body = Bodies.circle(x, y, w, h, options);
        radius=10;

    }
}