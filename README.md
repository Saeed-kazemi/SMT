# Collaborate Market

Software development project

- β¨Magic β¨

## Features

- Import

> Test

## Technology used:

- [ReactJS] - Frontend framework!
- [VS Code] - Awesome editor
- [GitHub link](https://github.com/Saeed-kazemi/SMT) - Project repo

## Installation π

Add a default.json file in config folder with the following

```sh
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret"
}
```

Install server dependencies

```sh
npm install
```

Install client dependencies

```sh
cd client
npm install
```

Run both Express & React from root

```sh
npm run dev
```

For production

```sh
cd client
npm run build
```

```
SMT
ββ .gitignore
ββ client
β  ββ package-lock.json
β  ββ package.json
β  ββ public
β  β  ββ favicon.ico
β  β  ββ index.html
β  β  ββ logo192.png
β  β  ββ logo512.png
β  β  ββ manifest.json
β  β  ββ robots.txt
β  ββ src
β     ββ actions
β     β  ββ alert.js
β     β  ββ auth.js
β     β  ββ post.js
β     β  ββ profile.js
β     β  ββ types.js
β     ββ App.css
β     ββ App.js
β     ββ components
β     β  ββ auth
β     β  β  ββ Login.js
β     β  β  ββ Register.js
β     β  ββ dashboard
β     β  β  ββ Certification.js
β     β  β  ββ Dashboard.js
β     β  β  ββ DashboardActions.js
β     β  β  ββ Projects.js
β     β  ββ layout
β     β  β  ββ Alert.js
β     β  β  ββ Landing.js
β     β  β  ββ Navbar.js
β     β  β  ββ spinner.gif
β     β  β  ββ Spinner.js
β     β  ββ post
β     β  β  ββ CommentForm.js
β     β  β  ββ CommentItem.js
β     β  β  ββ Post.js
β     β  ββ posts
β     β  β  ββ PostForm.js
β     β  β  ββ PostItem.js
β     β  β  ββ Posts.js
β     β  ββ profile
β     β  β  ββ Profile.js
β     β  β  ββ ProfileAbout.js
β     β  β  ββ ProfileCertification.js
β     β  β  ββ ProfileProject.js
β     β  β  ββ ProfileTop.js
β     β  ββ profile-forms
β     β  β  ββ AddCertification.js
β     β  β  ββ AddProject.js
β     β  β  ββ ProfileForm.js
β     β  ββ profiles
β     β  β  ββ ProfileItem.js
β     β  β  ββ Profiles.js
β     β  ββ routing
β     β     ββ PrivateRoute.js
β     ββ img
β     β  ββ showcase.jpg
β     ββ index.js
β     ββ reducers
β     β  ββ alert.js
β     β  ββ auth.js
β     β  ββ index.js
β     β  ββ post.js
β     β  ββ profile.js
β     ββ routing
β     ββ setupTests.js
β     ββ store.js
β     ββ utils
β        ββ formatDate.js
β        ββ setAuthToken.js
ββ config
β  ββ db.js
β  ββ default.json
ββ middleware
β  ββ auth.js
β  ββ checkObjectId.js
ββ models
β  ββ Post.js
β  ββ Profile.js
β  ββ User.js
ββ package-lock.json
ββ package.json
ββ README.md
ββ routes
β  ββ api
β     ββ auth.js
β     ββ posts.js
β     ββ profile.js
β     ββ users.js
ββ server.js

```
