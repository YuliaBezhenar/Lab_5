import { Component, OnInit } from '@angular/core';
import { PointList } from './class/pointList';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {
  p: PointList = new PointList();
  setAll(Xn: string, Xk: string, Xh: string, Yn: string, Yk: string, Yh: string, R: string){
    this.p.p = [];
    let xn: number = parseInt(Xn);
    let xk: number = parseInt(Xk);
    let xh: number = parseInt(Xh);
    let yn: number = parseInt(Yn);
    let yk: number = parseInt(Yk);
    let yh: number = parseInt(Yh);
    let r: number = parseInt(R);
    let x: number = xn;
    let y: number = yn;
    while (x <= xk) {
      while (y <= yk){
        this.p.addPoint(x, y, r);
        y = y + yh;
      }
      y = yn;
      x = x + xh;
    }
  }
  GetColor(b: boolean){
    return b === true ? 'green' : 'red';
  }
  constructor() { }
  ngOnInit(): void { } 
}