import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';  // ✅ Import provideRouter
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';  // ✅ Import routes

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]  // ✅ Pass the routes to Angular
}).catch(err => console.error(err));
