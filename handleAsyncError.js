// Takes in an async middleware func and returns another async middleware func
// that awaits the input async middleware, but this time it is wrapped in a try catch
// an calls next(err) in the catch block
const handleAsyncError = asyncMiddleware => {
	return async (req, res, next) => {
		try {
			await asyncMiddleware(req, res, next);
		} catch (e) {
			next(e);
		}
    };
    
    (req, res, next) => {
        Promise.resolve(fn(req, res, next))
          .catch(next);
      };
};

module.exports = handleAsyncError;
