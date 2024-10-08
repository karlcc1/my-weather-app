<strong>This is the old version. New version has been migrated to Vite as create-react-app is unsupported:</strong> https://github.com/karlcc1/vite-my-weather-app

A minimalistic weather web app created through the create-react-app for the MSA frontend project.

View deployed project: http://msa-devops-2020-karl-frontend.azurewebsites.net/

This app uses the '[Current Weather Data](https://openweathermap.org/current)' API from OpenWeather. Users can input a city name, as well as a country code if needed. It displays current basic weather metrics based on the city such as: current temp, min and max temp, wind speed, a short description, and an accompanying logo to go with it. The input components on the top left are from the [Material-UI](https://material-ui.com/) library. The background colour varies based on the current weather.

![Auckland](Auckland.PNG)
![London](London.PNG)

This project uses Azure DevOps pipelines for continuous development and integration. The build pipelines are automatically started on commits to the ‘develop’ and ‘master’ branches. This improves development and lead time as well as ensuring that the latest software is deployed automatically. Following that, the release pipeline is automatically activated after the build artefact is published from the previous pipeline which deploys it onto the web.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
