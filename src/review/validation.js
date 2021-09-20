import { checkSchema, validationResult } from "express-validator";

const schema = {
  comment: {
    in: ["body"],
    isString: {
      errorMessage: "comment validation failed, type must be a text ",
    },
  },
  rate: {
    in: ["body"],
    isString: {
      errorMessage: "rate validation failed, type must be a number between 1-5",
    },
  },
  productId: {
    in: ["body"],
    isString: {      
    errorMessage: "productId validation failed , type must be a number ",    },
  },
};

export const checkCommentSchema = checkSchema(commentSchema);
export const checkSearchSchema = checkSchema(searchSchema);
export const checkBlogPostSchema = checkSchema(schema);

export const checkValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Review post validation is failed");
    error.status = 400;
    error.errors = errors.array();
    next(error);
  }
  next();
};
