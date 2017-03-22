React + Typescript
====================

# Getting Started

Create the file `app.tsx`:

```
    class App extends React.Component<{},{}> {
        render() {
            return (
                <div>
                    Hello World!
                </div>
            );
        }
    }
```

Compile the file into `app.js` with the command:

    tsc app.tsx --jsx react

Use an `index.html`:

```
<!DOCTYPE html>
<html lang = "en">

   <head>
      <meta charset = "UTF-8">
      <title>React App</title>
   </head>

   <body>
      <div id = "app"></div>

      <script src = "js/react.min.js"></script>
      <script src = "js/react-dom.min.js"></script>
      <script src = "app.js"></script>
      
      <script>
          ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
      </script>

   </body>

</html>
```

# Typed Components

Include the typings into the project:

    npm install @types/react @types/react-dom --save

The component definition is React.Component<P,S> - P for Props, S for State.

```
    interface IWord {
        text: string;
    }

    class Word extends React.Component<IWord,{}> {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
    }
```
