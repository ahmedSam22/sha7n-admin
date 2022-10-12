
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmedOrdersComponent } from './confirmed-orders/confirmed-orders.component';
import { FinishedComponent } from './finished/finished.component';
import { FromChinaComponent } from './from-china/from-china.component';
import { FromSaudiComponent } from './from-saudi/from-saudi.component';
import { InChinaComponent } from './in-china/in-china.component';
import { InSaudiComponent } from './in-saudi/in-saudi.component';
import { ListComponent } from './list/list.component';
import { RecievedChinaComponent } from './recieved-china/recieved-china.component';
import { RecivedSaudiComponent } from './recived-saudi/recived-saudi.component';
import { ToClientComponent } from './to-client/to-client.component';

const routes: Routes = [
  {path:'newOrder',component:ListComponent,data:{title:'طلبات جديده'}},
  {path:'confirmedOrders',component:ConfirmedOrdersComponent,data:{title:'طلبات مؤكده'}},
  {path:'recievedChina',component:RecievedChinaComponent,data:{title:'طلبات تم استلامها من متجر الصين'}},
  {path:'inChina',component:InChinaComponent,data:{title:'طلبات في مستودع الصين'}},
  {path:'fromChina',component:FromChinaComponent,data:{title:'طلبات تم شحنها من مطار الصين'}},
  {path:'recievedSaudi',component:RecivedSaudiComponent,data:{title:'طلبات تم استلامها من متجر السعوديه'}},
  {path:'inSaudi',component:InSaudiComponent,data:{title:'طلبات في مستودع السعوديه'}},
  {path:'fromSaudi',component:FromSaudiComponent,data:{title:'طلبات تم شحنها من مطار السعوديه'}},
  {path:'toClient',component:ToClientComponent,data:{title:'طلبات قيد التوصيل للعميل'}},
  {path:'Finished',component:FinishedComponent,data:{title:'طلبات منتهيه'}},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllOrdersModule { }
