import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaveTaskPage } from './save-task.page';

const routes: Routes = [
  {
    path: '',
    component: SaveTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaveTaskPageRoutingModule {}
