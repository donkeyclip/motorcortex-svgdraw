import MotorCortex from '@kissmybutton/motorcortex';

export default class Draw extends MotorCortex.Effect{
    getScratchValue(){
        this.pathLength = Math.ceil(this.element.getTotalLength());
        this.element.style.strokeDasharray = this.pathLength + ' ' + (this.pathLength);
        this.element.style.strokeDashoffset = this.pathLength;
        return 0;
    }

    onGetContext(){
        this.pathLength = Math.ceil(this.element.getTotalLength());
    }

    onProgress(fraction, millisecond){
        const cover = (this.targetValue - this.initialValue) * fraction + this.initialValue;
        this.element.style.strokeDashoffset = Math.ceil(this.pathLength * (1 - cover));
    }
}
