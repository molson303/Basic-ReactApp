var Greeter = React.createClass({
  getDefaultProps: function(){
    return{
      name: 'React',
      message: 'Default Message'
    };
  },
  render: function (){
    var name = this.props.name;
    var message = this.props.message
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var firstName = "Mike"

ReactDOM.render(
  <Greeter name={firstName} message="message from prop"/>,

  document.getElementById('app')
);
