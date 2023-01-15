import Tool from "./Tool"

export default class Brush extends Tool {
  constructor(canvas) {
    super(canvas);
    this.listen()
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHendler.bind(this)
    this.canvas.onmousedown = this.mouseDownHendler.bind(this)
    this.canvas.onmouseup = this.mouseUpHendler.bind(this)
  }

  mouseUpHendler(event) {
    this.mouseDown = false
  }

  mouseDownHendler(event) {
    this.mouseDown = true
    this.ctx.beginPath()
    this.ctx.moveTo(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop)
  }

  mouseMoveHendler(event) {
    if (this.mouseDown === true) {
      this.draw(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop)
    }
  }

  draw(x, y) {
    this.ctx.lineTo(x, y)
    this.ctx.stroke()
  }
}
