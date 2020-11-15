
const errorHandler = (error, req, res, next) => {
  if (process.env.NODE_ENV === 'development')
    console.log(error)

  return res.status(500).json({ message: 'Internal Server Error' });
}

export default errorHandler;