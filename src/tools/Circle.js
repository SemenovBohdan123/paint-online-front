import Tool from "./Tool"

export default class Circle extends Tool {
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
      let radius = Math.sqrt(width ** 2 + height ** 2);

      this.draw(this.startX, this.startY, radius)
    }
  }

  draw(x, y, r) {
    const img = new Image()

    img.src = this.saved

    img.onload = async function () {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx.beginPath()
      this.ctx.arc(x, y, r, 0, 2 * Math.PI)
      this.ctx.fill()
      this.ctx.stroke()
    }.bind(this)
  }
}
