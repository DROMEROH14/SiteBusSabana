import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Ruta para el módulo de buses
  { path: 'buses', loadChildren: () => import('./modules/buses/buses.module').then(m => m.BusesModule) },
  
  // Ruta para el módulo de rutas
  { path: 'routes', loadChildren: () => import('./modules/routes/routes.module').then(m => m.RoutesModule) },
  
  // Ruta para el módulo de horarios
  { path: 'schedules', loadChildren: () => import('./modules/schedules/schedules.module').then(m => m.SchedulesModule) },
  
  // Ruta para el módulo de notificaciones
  { path: 'notifications', loadChildren: () => import('./modules/notifications/notifications.module').then(m => m.NotificationsModule) },
  
  // Ruta para el módulo de asignaciones
  { path: 'assignments', loadChildren: () => import('./modules/assignments/assignments.module').then(m => m.AssignmentsModule) },
  
  // Ruta para el módulo de usuarios
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
  
  // Ruta para el módulo de permisos
  { path: 'permissions', loadChildren: () => import('./modules/permissions/permissions.module').then(m => m.PermissionsModule) },
  
  // Ruta para el módulo de UserTypes
  { path: 'usertypes', loadChildren: () => import('./modules/usertypes/usertypes.module').then(m => m.UsertypesModule) },
  
  // Ruta para el módulo de PermissionsXUserTypes
  { path: 'permissionsxusertypes', loadChildren: () => import('./modules/permissionsxusertypes/permissionsxusertypes.module').then(m => m.PermissionsxusertypesModule) },
  
  // Ruta para el módulo del administrador
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  
  // Ruta para el módulo del viajero
  { path: 'traveler', loadChildren: () => import('./modules/traveler/traveler.module').then(m => m.TravelerModule) },
  
  // Redirección por defecto a notificaciones si no se especifica ruta
  { path: '', redirectTo: 'notifications', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }