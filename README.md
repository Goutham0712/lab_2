# Lab-2

In this lab you will build a weather app using Node.js and API calls.

1. Install node.js ([https://nodejs.org/en/download/](https://nodejs.org/en/download/): select LTS), if you don't have it already.
2. Create the project folder.

```bash
mkdir weatherApp
cd weatherApp
```

3. Create necessary files.

```bash
atom index.html weatherapp.js style.css
```

4. Initialize the package manager.

```bash
npm init
```

5. Install express package using npm.
6. Get your API keys at [https://rapidapi.com/signup](https://rapidapi.com/signup) for Open Weather Map API.
7. Edit the weatherapp.js file as needed. 
    1. Test your code for full functionality.
    2. For example: What happens if they enter nothing for the city name? How can you fix inside the code is it is empty?
8. Display on your page at least **three** weather-related information in a nice way. Get creative with your design. You can add icons or use API icons if there are any.
9. Last but not the least, **deploy and run** you app on **Heroku**.
    1. Submit your heroku link in the github repository read.me file.
10. Update the **readme file** by answering the following questions:
    1. Assume that in your API call you received a 401 status code. Which part of your code most probably is not correct?
       If you receive a 401 status code, the issue most probably lies in the authentication part of the code, specifically where the API key is being included in the request headers. Double-check the following section in the `weather.js` file:

```javascript
req.headers({
    "x-rapidapi-key": "b0ecde0aa7msh4000c55386b3d0ap1a619djsn5b8ac1b1b077",
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "useQueryString": true
});
    3. Explain your design choices and how you used CSS to realize those changes.
In designing the weather app, I aimed for a clean and user-friendly interface. Here are some key design choices and how CSS was utilized:

Overall Layout: The app has a simple and centered layout for better readability and focus. The content is placed in a container with a maximum width to ensure responsiveness.

Typography: The chosen font is 'Arial' for a clean and familiar look. Font sizes are carefully selected to maintain a balance between readability and aesthetics.

Color Scheme: A light background color (#f0f0f0) is used for the body, providing a subtle contrast to the content. The main button has a contrasting color (#007bff) to make it stand out, and a darker shade on hover (#0056b3) provides visual feedback.

Form Styling: The form elements are styled for a cohesive and intuitive user experience. Labels and input fields have appropriate spacing and font sizes.

Weather Information Display: The weather information is presented in a bordered and slightly elevated container (#weather-info) for clear separation. The container has a white background for readability, and a border-radius gives it a subtle rounded appearance.
11. Submit your repository via github.
#   l a b _ 2  
 #   l a b _ 2  
 #   l a b _ 2  
 