import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';


// gsap.registerPlugin(MorphSVGPlugin);
// const section = .createRef();

// useEffect(()=>{
//   gsap.to(section.current, {color:"#8c0",duration:2});
// },[section]);

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
  
})
export class ExamenComponent implements OnInit {
  
  

  constructor() {
   
  }

  ngOnInit(): void {
    
  }

}

export default ExamenComponent;