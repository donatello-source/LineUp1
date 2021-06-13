import { AmbientLight, DirectionalLight } from 'three'

export default class Light {
    constructor(which) {
        if (which == 1) {    
            this.lightambient = new AmbientLight("white", 10);
            this.lightambient.position.set(-100, 200, 100)
            this.lightambient.intensity = 0.5;
            return this.lightambient 
        } else {
            this.light = new DirectionalLight("white", 10)
            this.light.position.set(0, 200, 100);
            this.light.intensity = 0.6;
            return this.light
        }
    }
}