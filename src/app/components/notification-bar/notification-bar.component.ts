import { NavigationEnd, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { INotification } from 'src/app/interfaces/notification.interface';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss'],
})
export class NotificationBarComponent implements OnInit, OnDestroy {
  notifications$: Observable<INotification | void>;
  routerSub: Subscription;
  constructor(
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.notifications$ = this.notificationService.notifications$;
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.notificationService.closeNotification();
      }
    });
  }
  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  ngOnInit(): void {}
  closeNotification() {
    this.notificationService.closeNotification();
  }
}
