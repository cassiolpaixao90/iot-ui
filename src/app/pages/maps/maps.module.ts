import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxEchartsModule } from 'ngx-echarts';

import { SharedModule } from '../../shared/shared.module';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AgmCoreModule.forRoot(),
    LeafletModule.forRoot(),
    MapsRoutingModule,
    NgxEchartsModule,
  ],
  exports: [],
  declarations: [
    ...routedComponents,
  ],
})
export class MapsModule { }
