
const errorHandler = (error, req, res, next) => {
  console.log(error.message)

  return res.status(500).json({ message: 'Internal Server Error' });
}

export default errorHandler;