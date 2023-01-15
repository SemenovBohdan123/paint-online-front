import Tool from "./Tool"

export default class Rect extends Tool {
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
    this.startX = event.pageX - event.target.offsetLeft;
    this.startY = event.pageY - event.target.offsetTop;
    this.saved = this.canvas.toDataURL();
  }

  mouseMoveHendler(event) {
    if (this.mouseDown === true) {
      let curentX = event.pageX - event.target.offsetLeft;
      let curentY = event.pageY - event.target.offsetTop;
      let width = curentX - this.startX;
      let height = curentY - this.startY;

      this.draw(this.startX, this.startY, width, height)
    }
  }

  draw(x, y, w, h) {
    const img = new Image()

    img.src = this.saved

    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx.beginPath()
      this.ctx.rect(x, y, w, h)
      this.ctx.fill()
      this.ctx.stroke()
    }

    this.ctx.rect(x, y, w, h)
    this.ctx.fill()
    this.ctx.stroke()
  }
}
