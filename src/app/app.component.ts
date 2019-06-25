import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyCu2Kz7DCvF3hcBoPaAVOFtbDBphoPNsI4",
      authDomain: "biblio-d1a8a.firebaseapp.com",
      databaseURL: "https://biblio-d1a8a.firebaseio.com",
      projectId: "biblio-d1a8a",
      storageBucket: "biblio-d1a8a.appspot.com",
      messagingSenderId: "1078191899445",
      appId: "1:1078191899445:web:be9d1e315022c26f"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
