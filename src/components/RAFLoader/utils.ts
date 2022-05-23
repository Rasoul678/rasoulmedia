class Circle {
  angle: number;
  sign: number;
  radius: number;
  rotationRadius: number;
  initialX: number;
  initialY: number;
  incrementer: number;
  context: CanvasRenderingContext2D;

  currentX: number = 0;
  currentY: number = 0;

  constructor(
    angle: number,
    sign: number,
    radius: number,
    rotationRadius: number,
    initialX: number,
    initialY: number,
    context: CanvasRenderingContext2D
  ) {
    this.angle = angle;
    this.sign = sign;
    this.radius = radius;
    this.rotationRadius = rotationRadius;
    this.initialX = initialX;
    this.initialY = initialY;
    this.incrementer = 0.01 + Math.random() * 0.1;
    this.context = context;
  }

  update() {
    this.angle += this.incrementer;

    this.currentX = this.initialX + this.rotationRadius * Math.cos(this.angle);
    this.currentY = this.initialY + this.rotationRadius * Math.sin(this.angle);

    if (this.angle >= Math.PI * 2) {
      this.angle = 0;
      this.incrementer = 0.01 + Math.random() * 0.1;
    }

    //! The following code is responsible for actually drawing the circle on the screen
    this.context.beginPath();
    this.context.arc(
      this.currentX,
      this.currentY,
      this.radius,
      0,
      Math.PI * 2,
      false
    );
    this.context.closePath();
    this.context.fillStyle = "rgba(177, 0, 129, .1)";
    this.context.fill();
  }
}

export default Circle;
