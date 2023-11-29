import { Point } from "./point";
export class PointList {
    p: Point[] = [];
    private Belongs(x: number, y: number, r: number): boolean{
        if (
            (x>=0 && y>=0 && x*x +y*y <= ((r/2)*(r/2))) || // частина кола
            (x>=(-r) && y <= r) || // квадрат
            (x<=0 && y>=0 && y<=(x+r)/2) // трикутник
        ){
            return true;
        }
        else return false;
    }
    addPoint(x: number, y: number, r: number){
        let b = this.Belongs(x, y, r);
        let p = new Point (x, y, b);
        this.p.push(p)
    }
}