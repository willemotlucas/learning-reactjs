//GreeterForm component

var React = require('react');

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

module.exports = GreeterForm;