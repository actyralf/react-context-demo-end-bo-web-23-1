# React Context Demo

To code along, start with the neuefische Next.js template by calling:

`npx ghcd@latest neuefische/web-exercises/tree/main/templates/next next-context-demo -i`

## React Context

1. Create a Context:
   ```js
   import { createContext } from "react";
   export const ThemeContext = createContext();
   ```
2. Wrap the context around the part of the component hierarchy where you want to have access to it
   ```js
   <ThemeContext.Provider value={theme}>
     <Component />
   </ThemeContext.Provider>
   ```
3. Use the Context in the components where you need it:
   ```js
   import { ThemeContext } from "../../pages/_app";
   import { useContext } from "react";
   function YourComponent() {
     const theme = useContext(ThemeContext);
   }
   ```
4. Refactoring: Create a separate file for your context in `/context/ThemeContext.js`
   ```js
   import { createContext } from "react";
   export const ThemeContext = createContext();
   export function ThemeContextProvider({children}){
    return <ThemeContext.Provider value={{...}}>{children}</ThemeContext.Provider>
   }
   ```

## Resources

- [Context on React Beta Docs](https://beta.reactjs.org/learn/passing-data-deeply-with-context)

- [Redux](https://redux.js.org/)
- [zustand](https://www.npmjs.com/package/zustand)
- [recoil](https://recoiljs.org/)

## Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run dev` to start the development server
- `npm run build` to create a production build
- `npm run start` to start the production build
- `npm run test` to run the tests in watch mode (if available)

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.

```

```
