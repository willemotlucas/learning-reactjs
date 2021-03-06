var React = require('react');
var {Link} = require('react-router');

// We use a stateless functional component

var Examples = (props) => {
    return (
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few example location to try out:</p>
        <ol>
          <li><Link to="/?location=Blois">Blois, France</Link></li>
          <li><Link to="/?location=Rio">Rio, Brazil</Link></li>
        </ol>
      </div>
    );
}

module.exports = Examples;