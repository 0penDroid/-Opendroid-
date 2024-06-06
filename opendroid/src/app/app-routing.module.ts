import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents.component';
import { DonationComponent } from './donation/donation.component';
import { ForumComponent } from './forum/forum.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { OpendroidComponent } from './opendroid/opendroid.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'opendroid',
    component: OpendroidComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'achievements', component: AchievementsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'documents', component: DocumentsComponent },
      { path: 'donation', component: DonationComponent },
      { path: 'forum', component: ForumComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
