import { Component, OnInit } from '@angular/core';

import { RouteItem } from '../model/RouteItem';
import { SwUpdate, SwPush } from '@angular/service-worker';
import 'firebase/messaging';
import 'firebase/firestore';
import * as firebase from 'firebase/app';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  title: string =  "Student!";
  routeItems: RouteItem[] = [
    new RouteItem('Subjects', 'subjects'),
    new RouteItem('Tasks', 'tasks')
  ];
  constructor(
    private updates: SwUpdate,
    private push: SwPush,
  ) {
    localStorage.setItem("studentId", 'pOnk5GMS0cqpTsOFXYT3');
    updates.available.subscribe(_ => updates.activateUpdate().then(() => {
      console.log('reload for update');
      document.location.reload();
    }));
    push.messages.subscribe(msg => console.log('push message', msg));
    push.notificationClicks.subscribe(click => console.log('notification click', click));
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
      navigator.serviceWorker.getRegistration().then(sw => firebase.messaging().useServiceWorker(sw));
    }
  }

  ngOnInit(): void {
    this.permitToNotify();
  }

  permitToNotify() {
    const messaging = firebase.messaging();
    const firestore = firebase.firestore();
    messaging.requestPermission()
      .then(() => messaging.getToken().then(async token => {
        console.log(`student token => ${token}`);
        const response = await firestore.collection('new-questionary-token-list').add({ token });
        console.log('new-questionary-token-list = ' + response);
      }))
      .catch( err => console.log(`Error => ${err}`));
  }

}
