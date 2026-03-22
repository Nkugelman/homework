export default function(req,res,next) {
  if (req.session.userName) {
    next();
    } else {
        const error = new Error('Unauthorized');
        error.statusCode = 401;
        next(error);
    }
}