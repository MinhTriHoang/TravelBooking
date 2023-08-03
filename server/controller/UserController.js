// UserController.js

exports.getAllUsers = (req, res) => {
    
    res.send('List of users');
  };
  
  exports.getUserById = (req, res) => {
   
    res.send(`Details of user with ID: ${req.params.userId}`);
  };
  
  exports.registerUser = (req, res) => {
   
    res.send('User registered');
  };
  
  exports.loginUser = (req, res) => {
    
    res.send('User logged in');
  };
  
  exports.updateUser = (req, res) => {
   
    res.send(`User with ID: ${req.params.userId} updated`);
  };
  
  exports.deleteUser = (req, res) => {
    
    res.send(`User with ID: ${req.params.userId} deleted`);
  };
  