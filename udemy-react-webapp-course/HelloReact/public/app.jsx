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
    var messageRef = this.refs.message;

    var name = nameRef.value;
    nameRef.value = '';

    var message = messageRef.value;
    messageRef.value = '';

    if(typeof name === 'string' && name.length > 0 && typeof message === 'string' && message.length > 0){
      var updates = {
        name,
        message
      };

      this.props.onNewData(updates);
    }
  },

  render: function(){
    return (
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name"/> <br/>
          <textarea cols="30" rows="5" ref="message" placeholder="Enter a message"></textarea> <br/>
          <button>Send</button>
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
      name: this.props.name,
      message: this.props.message
    }
  },

  handleNewData: function(updates){
    this.setState(updates)
  },

  render: function(){
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }

});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);