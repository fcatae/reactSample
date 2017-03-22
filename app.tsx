class App extends React.Component<{},{}> {
   render() {
      return (
         <div>
            <Word text="Hello"/>
            <Word text="Word" color="color-orange"/>
            <Word text="1"/>
         </div>
      );
   }
}

interface IWord {
    text: string;
    color?: string;
}

class Word extends React.Component<IWord,{}> {

    toColor() {
        return (this.props.color) ? this.props.color : "color-none";
    }

    render() {
      return (
         <span className={"word " + this.toColor()}>
            {this.props.text}
         </span>
      );
   }
}
