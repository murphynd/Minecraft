import {dirtImg, glassImg, grassImg, logImg, woodImg} from './images'
import {TextureLoader} from "three";


const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const woodTexture = new TextureLoader().load(woodImg)
const logTexture = new TextureLoader().load(logImg)
const groundTexture= new TextureLoader().load(grassImg)



export {
    grassTexture, glassTexture, dirtTexture, woodTexture, logTexture, groundTexture
}