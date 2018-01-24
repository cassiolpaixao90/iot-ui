import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';

import { ThemeModule } from '../../shared/shared.module';

import { EditorsRoutingModule, routedComponents } from './editors-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    EditorsRoutingModule,
    CKEditorModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class EditorsModule { }
