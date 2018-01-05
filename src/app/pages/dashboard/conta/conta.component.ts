import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { ElectricityService } from '../../../@core/data/electricity.service';

@Component({
  selector: 'ngx-conta',
  styleUrls: ['./conta.component.scss'],
  templateUrl: './conta.component.html',
})
export class ContaComponent implements OnDestroy {

  data: Array<any>;

  type = 'Semana';
  types = ['Semana', 'Mês', 'Ano'];

  currentTheme: string;
  themeSubscription: any;

  constructor(private eService: ElectricityService, private themeService: NbThemeService) {
    this.data = this.eService.getData();

    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
