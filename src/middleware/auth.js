const { verifySign } = require("../jwt/jwt");
const Usuario = require("../api/models/user.model");


const isAuth = (req, res, next) => {
  try {
    // console.log(req.headers);
    const authorization = req.headers.authorization;
    if (!authorization) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token no provided" });
    }


    const tokenVerified = verifySign(token);
    req._user = tokenVerified;
    // console.log(req._user);
    next();
  } catch (error) {
    return res.status(500).json(error);
  }
  
};

const isAdmin = async (req, res, next) => {
    try {
      // console.log(req.headers);
      const authorization = req.headers.authorization;    
      if (!authorization) {
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      const token = authorization.split(" ")[1];
      console.log('token:',token);
      
      // si no pones token no entra en la función
      // if (!token) {
      //   return res.status(401).json({ message: "Token no provided" });
      // }
            
      const tokenVerified = verifySign(token);
      // console.log('tokenVerified:',tokenVerified);
      req._user = tokenVerified; 
      console.log('tokenVerified.id',tokenVerified.id);
      const user1 = await Usuario.findById(tokenVerified.id); // await!!! al loro
      console.log('user1:',user1);  // estamos aquí

      if(user1.role !== 'admin'){
        return res.status(401).json({ message: "Unauthorized your role is:"+ user1.role  });
      }      
      next();
    } catch (error) {
      return res.status(500).json(error);
    }
    
  };

module.exports = { isAuth, isAdmin };
