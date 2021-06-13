import { MeshBasicMaterial, BoxGeometry, Mesh, } from 'three';


export default class Wall {
    constructor(which) {
        this.material = new MeshBasicMaterial({
            color: 0x00ff00,
            wireframe: false,
            transparent: false,
        })
        if (which == "pt") {
            this.geometry = new BoxGeometry(1000, 500, 0);
            this.wall = new Mesh(this.geometry, this.material);
        } else if (which == "bb") {
            this.geometry = new BoxGeometry(0, 500, 1000);
            this.wall = new Mesh(this.geometry, this.material)
        }
        return this.wall
    }
}