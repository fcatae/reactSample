
class App extends React.Component<{},{}> {
   render() {
      return (
         <div>
            <Word text="Hello"/>
            <Word text="Word" wordState={WordState.Highlight} />
            <Word text="1" wordState={WordState.Ignore} />
         </div>
      );
   }
}

class Phrase extends React.Component<IWord,{}> {

    render() {
      return (
         <div>
            <Word text="Hello"/>
            <Word text="Word" wordState={WordState.Highlight} />
            <Word text="1" wordState={WordState.Ignore} />
         </div>
      );
   }
}


enum WordState {
    Normal = 0,
    Highlight,
    Ignore
}

interface IWord {
    text: string;
    wordState?: WordState;
}

class Word extends React.Component<IWord,{}> {

    toColor() {
        let state = (this.props.wordState) ? this.props.wordState : WordState.Normal;

        switch(state) {
            case WordState.Normal:
                return 'color-normal';
            case WordState.Ignore:
                return 'color-none';
            case WordState.Highlight:
                return 'color-highlight';                
        }

        throw "Invalid color";
    }

    render() {
      return (
         <span className={"word " + this.toColor()}>
            {this.props.text}
         </span>
      );
   }
}