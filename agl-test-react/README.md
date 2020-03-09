There are two projects created for AGL Programming Challenge.

##  1. .NET Core API

This application connects with external API '[http://agl-developer-test.azurewebsites.net/people.json](http://agl-developer-test.azurewebsites.net/people.json) to get list of owners with pets. 

Then it transforms data (using LINQ) and send JSON response with gender of owners with list of cat names in alphabetical order.

It is developed using:

 - .NET Core using Visual Studio 2019
 - **MediatR**,  **CQRS** & **Dependecy Injection** pattern
 - **FluentResults** package to handle API response
 - Tests are written using **Xunit** and **NSubstitute**
 - Documentation is supported by  **SWAGGER**
 - **Logging** for Error, Information and Trace logs.

To run this application:

 - Clone this solution and run using VS 2019.
 - It will run on localhost using port 17733 - [http://localhost:17733/](http://localhost:17733/)
 - Navigate to URL to get JSON response with gender of owners with list of cat names   - [http://localhost:17733/api/pets](http://localhost:17733/api/pets)
 - Swagger End point - [http://localhost:17733/swagger](http://localhost:17733/swagger)




##### Sample JSON Response:
[{"ownerGender":"Male","catNames":["Garfield","Jim","Max","Tom"]},{"ownerGender":"Female","catNames":["Garfield","Simba","Tabby"]}]

## 2.  React UI

This UI project is created with React JS. 

It connects with **.NET Core API** to get list of gender of owners with cats.

Then it renders this list on UI using different components under folder '**src/components/Owners**'. 

Link to API Endpoint is configured under /src/utils/constants.js file

It is developed using:

 - React JS with Visual Studio Code
 - UI Atomic pattern to create reusable components
 - **axios** package to connect to API
 - Tests are written using **testing-library/react**
 - **FLOW** for typecheck
 -  
### `Sample UI output`

Male
 - Garfield 
 - Jim 
 - Max 
 - Tom

Female
 - Garfield 
 - Simba 
 - Tabby

### Available Scripts

   

### `npm start`

  

Runs the app in the development mode.<br  />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

  

### `npm test`

Launches the test runner in the interactive watch mode.<br  />

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

### `npm run build`

  

Builds the app for production to the `build` folder.<br  />

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.<br  />

Your app is ready to be deployed!

### `npm run flow`

A static type checker for JavaScript



