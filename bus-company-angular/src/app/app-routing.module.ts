import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BusListComponent} from "./componet/bus/bus-list/bus-list.component";
import {BusCreateComponent} from "./componet/bus/bus-create/bus-create.component";


const routes: Routes = [{
  path: "bus/list",
  component: BusListComponent
}, {
  path: "bus/update/:id",
  component: BusListComponent
}, {
  path: "bus/create",
  component: BusCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
