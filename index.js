//
exports.handler = (events, context, cb) => {

  console.log('I m in hello handler !!!')

  const response_success = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'ok'
    }),
  };
  return cb(undefined,response_success);
}