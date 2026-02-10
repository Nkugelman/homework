export default function parseNumbers(req, res, next) {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send('One or both numbers are invalid');
  }

 
  req.a = a;
  req.b = b;

  next();
}
