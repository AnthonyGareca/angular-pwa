import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss']
})
export class InstallComponent {

  installEvent = null;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeINstallPrompt(event : Event) {
    console.log(event);
    event.preventDefault();
    this.installEvent = event;
  }

  installByUser() {
    if(this.installEvent) {
      this.installEvent.prompt();
      this.installEvent.userChoice.then(
        ans => {
          console.log(ans);
        }
      );
    }
  }
}
