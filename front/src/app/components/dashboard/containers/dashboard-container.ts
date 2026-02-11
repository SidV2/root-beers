import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardPresenter } from '../presenters/dashboard-presenter';

@Component({
  selector: 'app-dashboard-container',
  imports: [DashboardPresenter],
  template: `<app-dashboard-presenter />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainer {}
