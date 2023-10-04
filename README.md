# Address Book

The Address book app is designed to help users manage their contacts effortlessly. Below are the key features and components of the app:

- Contact List: The app offers an organized list of contacts. Each contact item is displayed with their name, email, avatar and phone.
- Pagination: To handle large numbers of contacts, the app implements a pagination system showing only 10 records by page.
- Contact Detail: Clicking on a contact in the list opens the Contact Detail Component. This component provides a comprehensive view of all available information for the selected contact.

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Given more time

- Implement search input. Due the app is using `https://randomuser.me/` we must change this service to another one.
- Implement Redux to handle the app state. Currently the app is setting the state in a service using behaviour subjects.
- Enhance the UI using some CSS animations or create more elaborate layouts.
- Do unit tests for containers components.

## Local environment

Download the repository in your local using the following steps.

- Git clone `git clone https://github.com/jhonatan89/address-book.git`
- `npm install`
- `ng serve`, navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Deployment

Every contribution to `master` branch will launch a new version in Netlify. Please use the following url to see the app in production:

- [Netlify](https://651d57a4b2555f5cd6a44cf1--whimsical-dolphin-f6d0d3.netlify.app/adress-book/list)

Also deployed manually in Github pages:

- [Github pages](https://jhonatan89.github.io/address-book/adress-book/list)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. For deploying to github-pages you can use the command `npm run build-githubpages` in order to build artifacts and then make push to `master`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). If you need to execute a specific test use `ng test --include=path/test.spec.ts`. For example: `src/app/address-book/detail/detail-view/detail-view.component.spec.ts`

Jhonatan A
