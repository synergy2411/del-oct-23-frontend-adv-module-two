import { Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { AuthComponent } from "./demo/auth/auth.component";
import { DemoPipeComponent } from "./demo/demo-pipe/demo-pipe.component";
import { ProductsComponent } from "./products/products.component";
import { OverviewComponent } from "./products/overview/overview.component";
import { SpecificationComponent } from "./products/specification/specification.component";
import { LoginGuard } from "./services/guards/login.guard";

export const APP_ROUTES: Routes = [
  {
    path: "users",
    component: UsersComponent,
    canActivate: [LoginGuard]
  }, {
    path: "login",
    component: AuthComponent
  }, {
    path: "pipe",
    component: DemoPipeComponent
  }, {
    path: "products",
    component: ProductsComponent,
    children: [
      { path: "overview/:productId/:price", component: OverviewComponent },
      { path: "specification", component: SpecificationComponent }
    ]
  }, {
    path: "lazy",
    loadChildren: () => import("./modules/lazy/lazy.module").then(m => m.LazyModule)
  }

]
