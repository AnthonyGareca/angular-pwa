import { Component, OnInit } from '@angular/core';

import { SwUpdate, SwPush } from '@angular/service-worker';
import 'firebase/messaging';
import 'firebase/firestore';
import * as firebase from 'firebase/app';
import { environment } from '../../environments/environment';

import { RouteItem } from '../model/RouteItem';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  title: string =  "Teachers!";
  routeItems: RouteItem[] = [
    new RouteItem('Courses', 'courses'),
    new RouteItem('Subjects', 'subjects'),
    new RouteItem('Students', 'students'),
  ];

  constructor(
    private updates: SwUpdate,
    private push: SwPush,
  ) {
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
        console.log(` teacher token => ${token}`);
        const response = await firestore.collection('new-response-token-list').add({ token });
        console.log('new-response-token-list = ' + response);
      }))
      .catch( err => console.log(`Error => ${err}`));
  }

}
