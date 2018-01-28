var React = require('react');
var Link = require('react-router').Link;

var About = React.createClass({
    render: function(){
        return(
            <div>
                <Link to={"/"}>Home</Link>
                <center><h2>About me</h2><br/><br/>
      <img  width="304" height="300" src="http://mayanksharma.herokuapp.com/images/mayankjha.jpg" /></center><br/><br/>
      <p>Hi! This is Mayank Jha</p>
      <p>I am freelance UI/UX wizard as well as a Daydreamer who works on the Graveyard Shift and sleeps all the day!<br />
                         I craft website with both code and Heart making it live to the expectations of you.</p>
            </div>
        );
    }
});

module.exports = About;
