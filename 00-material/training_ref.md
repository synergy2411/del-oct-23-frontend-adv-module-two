# CLI based App

- node index.js add --title="..." --body="..."
  // Store note data in JSON file
- node index.js remove --title="..."
  // to remove the note from JSON file based upon the title supplied
- node index.js list
  // to list down all the notes available in JSON file
- node index.js read --title="..."
  // to read individual item from JSON file

# Semantic Versioning (X.Y.Z)

X - Major Version : New fetuares added in the app with code base change
Y - Minor Version : New features added in the app without code base change
Z - Patch Version - bug fixes / performance improvements

semver.orgs

> npx create-react-app awesome-app

# React Bootstrap Process

- npm start > starts the webpack-dev-server
- serves the public/index.html
- webpack loads src/index.js
- index.js imports App.js and load it as a component o nthe browser

# useEffect : side effect code.

- useEffect(cb) : cb will execute for every rendering
- useEffect(cb, []) (componentDidMount) : cb will execute at initial rendering ONLY.
- useEffect(cb, [deps]) (componentDidUpdate) : cb will execute at initial rendering as well as whenever the dependency will change.
- useEffect(cb => cleanUpFn, [deps]) : cb will run at the initial rendering and follows below steps -
  > mentioned dependency will change
  > cleanUp function will run
  > cb will execute
  > cleanUp function also fire before detaching the component from DOM (componentWillUnmount)

> json-server --watch db.json --port=3030

---

# TypeScript

- Extension of JavaScript with Types
- Corporate Care-taker - Microsoft
- ES6+ features
- OOPS enabled
- Angular itself created in typescript

# Types in TypeScript

- All JavaScript Types
- any, unknown, null, undefined, never, void, tuple, union
- Custom Types : type keyword, interface, classes.

# Decorators

- @Component({})
- @Directive({})
- @Pipe({})
- @NgModule({})
- @Injectable({})

@Component({})
class AppComponent {}

@Directive({})
class HighlightDirective {}

@Pipe({})
class DemoPipe{}

@NgModule({})
class AppModule{}

@Injectable({})
class DataService{}

# Decorator Types -

- Classes
- Functions : @HostListener()
- Properties : @Input(), @Output(), @HostBinding()
- Parameters : @Optional(), @skip()

# Angular CLI Tool - NG

- npm install @angular/cli@14 -g

- ng version

- ng new angular-app

- cd angular-app

- npm start

fruits = [];

fruits.push(newFruit); // Impure Change

fruits = ["newFruit"]; // Pure Change

let products = [
{
id : "",
name : "",
company : "",
price : "",
qty: ""
}
]

---

- Routes : configure the URL path with component
- RouterModule : to submit route configuration to Angular
- RouterLink : to create dynamic links (similar to anchor element)
- RouterOutlet : to provide space on template to load the component
