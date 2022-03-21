import MotorCortex from "@donkeyclip/motorcortex";

export default class Draw extends MotorCortex.Effect {
  getScratchValue() {
    this.pathLength = Math.ceil(this.element.getTotalLength());
    this.element.style.strokeDasharray =
      this.pathLength + " " + this.pathLength;
    this.element.style.strokeDashoffset = this.pathLength;
    return 0;
  }

  onGetContext() {
    this.pathLength = Math.ceil(this.element.getTotalLength());
  }

  onProgress(millisecond) {
    const cover =
      (this.targetValue - this.initialValue) * this.getFraction(millisecond) +
      this.initialValue;
    this.element.style.strokeDashoffset = Math.ceil(
      this.pathLength * (1 - cover)
    );
  }
}
