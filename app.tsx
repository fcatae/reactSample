class App extends React.Component<{},{}> {
   render() {
      return (
         <div>
            <Word text="Hello"/>
            <Word text="Word"/>
         </div>
      );
   }
}

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
