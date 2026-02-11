import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-presenter',
  templateUrl: './dashboard-presenter.html',
  styleUrl: './dashboard-presenter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPresenter {}
