import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';

import { SharedModule } from '../../shared/shared.module';

import { EditorsRoutingModule, routedComponents } from './editors-routing.module';

@NgModule({
  imports: [
    SharedModule,
    EditorsRoutingModule,
    CKEditorModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class EditorsModule { }
