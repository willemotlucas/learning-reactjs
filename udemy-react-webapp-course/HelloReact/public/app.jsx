// GreeterMessage component

var GreeterMessage = React.createClass({

  render: function(){
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }

});

//GreeterForm component

var GreeterForm = React.createClass({

  onFormSubmit: function(event){
    event.preventDefault();
    var nameRef = this.refs.name;

    var name = nameRef.value;
    nameRef.value = '';

    if(typeof name === 'string' && name.length > 0){
      this.props.onNewName(name);
    }
  },

  render: function(){
    return (
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name"/>
          <button>Set your name</button>
        </form>
    );
  }

});

//Greeter main component

var Greeter = React.createClass({

  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'This is my first React.js application !'
    };
  },

  getInitialState: function(){
    return {
      name: this.props.name
    }
  },

  handleNewName: function(name){
    this.setState({
      name
    });
  },

  render: function(){
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }

});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);