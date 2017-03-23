
class App extends React.Component<{},{}> {
   render() {
      return (
         <div>
            <Phrase text="Hello 1 2 3 World"/>
         </div>
      );
   }
}

interface IPhraseProps {
    text: string;
}

class Phrase extends React.Component<IPhraseProps,{}> {

    render() {
        let getWords = (t :string) => t.split(' ');
        let toWordState = (word: string) : WordState => {
                if( word.length <= 3 ) {
                    return WordState.Ignore;
                }
                return WordState.Highlight;
            };

        let words = getWords ( this.props.text );
        let wordList = words.map(w => {
                return <Word text={w} wordState={ toWordState(w) }/>
            });

      return <div>{wordList}</div>;
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