import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { AchievementService } from '../services/achievement.service';
import { AlertsService } from '../services/alert.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptorProvider } from '../interceptors/auth.interceptor';
import { AuthService } from '../services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { BuildingComponent } from './building/building.component';
import { CategoryService } from '../services/category.service';
import { CommentService } from '../services/comment.service';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents.component';
import { DonationComponent } from './donation/donation.component';
import { ErrorInterceptorProvider } from '../interceptors/error.interceptor';
import { FilterService } from '../services/filter.service';
import { FilterTextPipe } from '../pipes/FilterText.pipe';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForumComponent } from './forum/forum.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LucideAngularModule, icons } from 'lucide-angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NotFoundComponent } from './not-found/not-found.component';
import { OpendroidComponent } from './opendroid/opendroid.component';
import { PostService } from '../services/post.service';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { registerLocaleData } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StorageService } from '../services/storage.service';
import { SubcategoryService } from '../services/subcategory.service';
import { UserService } from '../services/user.service';
import { UtilsService } from '../services/utils.service';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AboutComponent,
    AchievementsComponent,
    AppComponent,
    DocumentsComponent,
    DonationComponent,
    FilterTextPipe,
    FooterComponent,
    ForumComponent,
    HeaderComponent,
    LoginComponent,
    OpendroidComponent,
    ProfileComponent,
    RegisterComponent,
    SidebarComponent,
    NotFoundComponent,
    BuildingComponent,
    SettingsComponent,
    DashboardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LucideAngularModule.pick(icons),
    NgxSkeletonLoaderModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    AchievementService,
    AlertsService,
    AuthInterceptorProvider,
    AuthService,
    CategoryService,
    CommentService,
    ErrorInterceptorProvider,
    PostService,
    StorageService,
    SubcategoryService,
    UserService,
    UtilsService,
    FilterService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
