//ik haal hier canvas op en sla het op in een variable
const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 1
        }

        this.width = 30
        this.height = 30
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

}

const player = new Player()
player.draw()