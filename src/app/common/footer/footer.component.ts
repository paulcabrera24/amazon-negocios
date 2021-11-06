import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt,faPhoneAlt,faCheck, faLongArrowAltRight,faRss} from '@fortawesome/free-solid-svg-icons';
import { faFilePdf,faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter, faPinterest, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faMapMarkerAlt= faMapMarkerAlt;
  faPhoneAlt=faPhoneAlt;
  faEnvelope=faEnvelope;
  faFilePdf=faFilePdf;
  faCheck=faCheck;
  faLongArrowAltRight=faLongArrowAltRight;
  faFacebookF=faFacebookF;
  faTwitter=faTwitter;
  faPinterest=faPinterest;
  faLinkedinIn = faLinkedinIn;
  faRss=faRss;

  constructor() { }

  ngOnInit(): void {
  }

}
