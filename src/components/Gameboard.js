import { DoubleSide, MeshPhongMaterial, BoxGeometry, Mesh, SphereGeometry, TextureLoader } from 'three';


export default class Board {
    constructor(which) {
        if (which == "board") {

            this.material = []
            this.material.push(new MeshPhongMaterial({ side: DoubleSide, map: new TextureLoader().load('src/components/assets/side.png') }));
            this.material.push(new MeshPhongMaterial({ side: DoubleSide, map: new TextureLoader().load('src/components/assets/side.png') }));
            this.material.push(new MeshPhongMaterial({ side: DoubleSide, map: new TextureLoader().load('src/components/assets/up.png') }));
            this.material.push(new MeshPhongMaterial({ side: DoubleSide, map: new TextureLoader().load('src/components/assets/up.png') }));
            this.material.push(new MeshPhongMaterial({ side: DoubleSide, map: new TextureLoader().load('src/components/assets/front.png') }));
            this.material.push(new MeshPhongMaterial({ side: DoubleSide, map: new TextureLoader().load('src/components/assets/back.png') }));
            console.log(this.material)
            this.geometry = new BoxGeometry(140, 120, 30);
            this.Board = new Mesh(this.geometry, this.material);
            this.Board.position.set(0, 60, 0)
            return this.Board
        }
    }
}