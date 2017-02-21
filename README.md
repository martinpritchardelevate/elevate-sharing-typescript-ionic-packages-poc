# Sharing `typescript` packages in `ionic 2`

## Get Started

### 1. Install & link dependencies

For our **shared** package:

```
cd elevate-shared-reactive-extensions
npm i
npm link
```

For our **consuming** packages:

```
cd elevate-ionic-employer
npm i
// npm 'link' is not strictly necessary here,
// as it's done by the 'ionic serve' command...
// it's only here for reference purposes.
npm link elevate-shared-reactive-extensions
```

and/or:

```
cd elevate-ionic-candidate
npm i
// npm 'link' is not strictly necessary here,
// as it's done by the 'ionic serve' command...
// it's only here for reference purposes.
npm link elevate-shared-reactive-extensions
```

### 2. When developing

#### 2.1 Watch shared package for changes

This will run and recompile our typescript whenever
there is a change in this package:

```
cd elevate-shared-reactive-extensions
npm run watch
```

#### 2.2 Fire up your ionic app

```
cd elevate-ionic-candidate
ionic serve
```