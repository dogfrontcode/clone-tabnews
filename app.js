const React = require('react');
const Component = React.Component;
const blessed = require('blessed');
const { render } = require('react-blessed');


// Rendering a simple centered box
class App extends Component {
  render() {
    return (
      <box top="center" left="center" width="50%" height="50%" border={{type: 'line'}} style={{border: {fg: 'cyan'}}}>
        Hello, React Blessed!
      </box>
    );
  }
}
git
// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'react-blessed hello world'
});

// Adding a way to quit the program
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Rendering the React app using our screen
const component = render(<App />, screen);
