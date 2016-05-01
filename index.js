'use strict';

var Firebase = require('firebase');
var React = require('react-native');

var {
  AppRegistry,
  View,
  Text,
  TextInput
} = React;


var Button = require('./node_modules/react-native-button');

var TApp = React.createClass({

  _handlePress : function(event){
    
    var username=this.state.username;
    var password=this.state.password;
   
    var ref = new Firebase("https://burning-fire-1723.firebaseio.com");
    ref.authWithPassword({
      email    : username,
      password : password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:");
      }
    });
  },



  render: function() {


    
        return (
          <View>
            
            <Text
            style={{
              padding: 5,
              margin: 10,
              marginTop: 50,
              fontSize : 25,
              color : 'rgb(0,0,255)',
              textAlign: "center"
            }}
            >
              Siphon Firebase App
           </Text>
            
            <TextInput 
            onChangeText={(text) => this.setState({username: text})}
            style={{
              height: 40,
              borderColor: 'gray',
              padding: 5,
              margin: 10,
              marginTop: 20,
              borderWidth: 1}} placeholder="UserName" />
            
             <TextInput 
             onChangeText={(text) => this.setState({password: text})}
             secureTextEntry={true}
            style={{
              height: 40,
              borderColor: 'gray',
              padding: 5,
              margin: 10,
              borderWidth: 1}} placeholder="Password" />

             <Button
                style={{
                  fontSize: 20,
                  height: 40,
                  padding: 5,
                  margin: 10,
                  backgroundColor: 'black',
                  color: 'green'}}
                styleDisabled={{color: 'red'}}
                onPress={this._handlePress}
              >
                Sign In
              </Button>
            
          </View>
      );
    


    
  }
});


var SiphonApp = React.createClass({

  _handlePress:function(event){
    var username=this.state.username;
    var password=this.state.password;
    console.log('Username is ',username);
    console.log('Password is ',password);
  },


  render: function() {
    return(
      <View>
	<Text
	    style={{
	      padding: 5,
	      margin: 10,
	      marginTop: 50,
	      fontSize : 25,
	      color : 'rgb(0,0,255)',
	      textAlign: "center"
	    }}
      >
	    Siphon Firebase App
	</Text>

	<TextInput 
	    style={{
	      height: 40,
	      borderColor: 'gray',
	      padding: 5,
	      margin: 10,
	      marginTop: 20,
	      borderWidth: 1}} onChangeText={(text) => this.setState({username: text})} placeholder="UserName" />

	<TextInput 
	     secureTextEntry={true}
	     style={{
	       height: 40,
	       borderColor: 'gray',
	       padding: 5,
	       margin: 10,
	       borderWidth: 1}} onChangeText={(text) => this.setState({password: text})} placeholder="Password" />


	<Button
		style={{
		  fontSize: 20,
		  height: 40,
		  padding: 5,
		  margin: 10,
		  backgroundColor: 'black',
		  color: 'green'}}
		styleDisabled={{color: 'red'}}
    onPress={this._handlePress}
		>
           Sign In
        </Button>

	      </View>


    );
  }
});







AppRegistry.registerComponent('App', () => SiphonApp);
