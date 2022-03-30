# Collaborate Market

Software development project

- ✨Magic ✨

## Features

- Import

> Test

## Technology used:

- [ReactJS] - Frontend framework!
- [VS Code] - Awesome editor
- [GitHub link](https://github.com/Saeed-kazemi/SMT) - Project repo

## Installation 🚀

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
├─ .gitignore
├─ client
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  └─ src
│     ├─ actions
│     │  ├─ alert.js
│     │  ├─ auth.js
│     │  ├─ post.js
│     │  ├─ profile.js
│     │  └─ types.js
│     ├─ App.css
│     ├─ App.js
│     ├─ components
│     │  ├─ auth
│     │  │  ├─ Login.js
│     │  │  └─ Register.js
│     │  ├─ dashboard
│     │  │  ├─ Certification.js
│     │  │  ├─ Dashboard.js
│     │  │  ├─ DashboardActions.js
│     │  │  └─ Projects.js
│     │  ├─ layout
│     │  │  ├─ Alert.js
│     │  │  ├─ Landing.js
│     │  │  ├─ Navbar.js
│     │  │  ├─ spinner.gif
│     │  │  └─ Spinner.js
│     │  ├─ post
│     │  │  ├─ CommentForm.js
│     │  │  ├─ CommentItem.js
│     │  │  └─ Post.js
│     │  ├─ posts
│     │  │  ├─ PostForm.js
│     │  │  ├─ PostItem.js
│     │  │  └─ Posts.js
│     │  ├─ profile
│     │  │  ├─ Profile.js
│     │  │  ├─ ProfileAbout.js
│     │  │  ├─ ProfileCertification.js
│     │  │  ├─ ProfileProject.js
│     │  │  └─ ProfileTop.js
│     │  ├─ profile-forms
│     │  │  ├─ AddCertification.js
│     │  │  ├─ AddProject.js
│     │  │  └─ ProfileForm.js
│     │  ├─ profiles
│     │  │  ├─ ProfileItem.js
│     │  │  └─ Profiles.js
│     │  └─ routing
│     │     └─ PrivateRoute.js
│     ├─ img
│     │  └─ showcase.jpg
│     ├─ index.js
│     ├─ reducers
│     │  ├─ alert.js
│     │  ├─ auth.js
│     │  ├─ index.js
│     │  ├─ post.js
│     │  └─ profile.js
│     ├─ routing
│     ├─ setupTests.js
│     ├─ store.js
│     └─ utils
│        ├─ formatDate.js
│        └─ setAuthToken.js
├─ config
│  ├─ db.js
│  └─ default.json
├─ middleware
│  ├─ auth.js
│  └─ checkObjectId.js
├─ models
│  ├─ Post.js
│  ├─ Profile.js
│  └─ User.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ routes
│  └─ api
│     ├─ auth.js
│     ├─ posts.js
│     ├─ profile.js
│     └─ users.js
└─ server.js

```
